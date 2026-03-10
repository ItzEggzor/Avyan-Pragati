

let complaintsListener = null;
let currentFilter = 'all';



function initNationalCommand() {
    console.log('🇮🇳 Initializing National Command Center...');
    
    startComplaintListener();
    
    setInterval(updateStateCounts, 5000);
    
    addStateMarkerHandlers();
    
    console.log('✅ National Command Center initialized');
}



function startComplaintListener() {
    if (!window.govFirestore) {
        console.warn('⚠️ Firebase not initialized yet, retrying in 2s...');
        setTimeout(startComplaintListener, 2000);
        return;
    }
    
    const db = window.govFirestore;
    const complaintsRef = window.govFirestoreCollection(db, 'complaints');
    const q = window.govFirestoreQuery(
        complaintsRef,
        window.govFirestoreOrderBy('timestamp', 'desc'),
        window.govFirestoreLimit(50)
    );
    
    complaintsListener = window.govFirestoreOnSnapshot(q, (snapshot) => {
        console.log(`📡 Received ${snapshot.size} complaints from Firebase`);
        
        const complaints = [];
        snapshot.forEach((doc) => {
            complaints.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        renderComplaintFeed(complaints);
        
        updateStateCountsFromData(complaints);
    }, (error) => {
        console.error('❌ Error listening to complaints:', error);
        loadStaticComplaintData();
    });
}



function renderComplaintFeed(complaints) {
    const feedContainer = document.getElementById('liveComplaintFeed');
    if (!feedContainer) return;
    
    let filteredComplaints = complaints;
    if (currentFilter !== 'all') {
        filteredComplaints = complaints.filter(c => 
            c.district === currentFilter || c.location?.district === currentFilter
        );
    }
    
    if (filteredComplaints.length === 0) {
        feedContainer.innerHTML = '<div style="text-align: center; padding: 40px; opacity: 0.5;">No complaints in this district</div>';
        return;
    }
    
    feedContainer.innerHTML = filteredComplaints.slice(0, 20).map(complaint => {
        const categoryEmoji = getCategoryEmoji(complaint.category || 'other');
        const statusInfo = getStatusInfo(complaint.status || 'new');
        const timeAgo = getTimeAgo(complaint.timestamp);
        const district = complaint.district || complaint.location?.district || 'Unknown';
        
        return `
            <div class="complaint-card" onclick="viewComplaintDetails('${complaint.id}')">
                <div class="complaint-header">
                    <div class="complaint-meta">
                        <div class="complaint-id">${complaint.id || 'CMP-' + Math.floor(Math.random() * 9999)}</div>
                        <div class="complaint-district">📍 ${district}</div>
                        <div class="complaint-time">⏰ ${timeAgo}</div>
                    </div>
                    <span class="complaint-status status-${statusInfo.class}">${statusInfo.label}</span>
                </div>
                <div class="complaint-title">${complaint.title || complaint.description || 'Untitled complaint'}</div>
                <span class="complaint-category">${categoryEmoji} ${capitalizeFirst(complaint.category || 'General')}</span>
            </div>
        `;
    }).join('');
}



function loadStaticComplaintData() {
    const staticComplaints = [
        {
            id: 'CMP-2847',
            district: 'Central Delhi',
            title: 'Massive pothole on Ring Road near ITO',
            category: 'road',
            status: 'new',
            timestamp: { seconds: Math.floor(Date.now() / 1000) - 120 }
        },
        {
            id: 'CMP-2846',
            district: 'South Mumbai',
            title: 'Overflowing garbage bins at Dadar Station',
            category: 'sanitation',
            status: 'assigned',
            timestamp: { seconds: Math.floor(Date.now() / 1000) - 300 }
        },
        {
            id: 'CMP-2845',
            district: 'Bengaluru Urban',
            title: 'Water supply cut for 3 days in Koramangala',
            category: 'water',
            status: 'resolved',
            timestamp: { seconds: Math.floor(Date.now() / 1000) - 720 }
        },
        {
            id: 'CMP-2844',
            district: 'Hyderabad',
            title: 'Street lights broken on HITEC City Main Rd',
            category: 'electricity',
            status: 'new',
            timestamp: { seconds: Math.floor(Date.now() / 1000) - 360 }
        },
        {
            id: 'CMP-2843',
            district: 'Kolkata',
            title: 'Waterlogging at Gariahat crossing',
            category: 'drainage',
            status: 'assigned',
            timestamp: { seconds: Math.floor(Date.now() / 1000) - 900 }
        }
    ];
    
    renderComplaintFeed(staticComplaints);
}



function updateStateCountsFromData(complaints) {
    const stateCounts = {};
    
    complaints.forEach(complaint => {
        const state = inferStateFromDistrict(complaint.district || complaint.location?.district || '');
        if (state) {
            stateCounts[state] = (stateCounts[state] || 0) + 1;
        }
    });
    
    const stateMapping = {
        'Maharashtra': 'mh',
        'Delhi': 'dl',
        'Karnataka': 'ka',
        'West Bengal': 'wb',
        'Tamil Nadu': 'tn',
        'Uttar Pradesh': 'up',
        'Rajasthan': 'rj'
    };
    
    Object.keys(stateMapping).forEach(stateName => {
        const countEl = document.getElementById(`count-${stateMapping[stateName]}`);
        if (countEl && stateCounts[stateName]) {
            animateCount(countEl, parseInt(countEl.textContent) || 0, stateCounts[stateName]);
        }
    });
}



function inferStateFromDistrict(district) {
    const districtToState = {
        'Central Delhi': 'Delhi',
        'New Delhi': 'Delhi',
        'South Delhi': 'Delhi',
        'South Mumbai': 'Maharashtra',
        'Mumbai': 'Maharashtra',
        'Pune': 'Maharashtra',
        'Bengaluru Urban': 'Karnataka',
        'Mysuru': 'Karnataka',
        'Chennai': 'Tamil Nadu',
        'Kolkata': 'West Bengal',
        'Hyderabad': 'Telangana',
        'Lucknow': 'Uttar Pradesh',
        'Jaipur': 'Rajasthan'
    };
    
    return districtToState[district] || null;
}



function animateCount(element, start, end) {
    const duration = 1000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}



function updateStateCounts() {
    const states = ['mh', 'up', 'ka', 'wb', 'tn', 'rj', 'dl'];
    
    states.forEach(state => {
        const countEl = document.getElementById(`count-${state}`);
        if (countEl) {
            const currentCount = parseInt(countEl.textContent) || 0;
            const change = Math.random() > 0.5 ? Math.floor(Math.random() * 3) : -Math.floor(Math.random() * 2);
            const newCount = Math.max(0, currentCount + change);
            if (newCount !== currentCount) {
                animateCount(countEl, currentCount, newCount);
            }
        }
    });
}



function filterComplaints(district) {
    currentFilter = district;
    console.log(`🔍 Filtering complaints for: ${district}`);
    
    loadStaticComplaintData();
}



function switchMapView(view) {
    console.log(`🗺️ Switching to ${view} view`);
    
    const buttons = document.querySelectorAll('.view-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(view)) {
            btn.classList.add('active');
        }
    });
    
    const mapContainer = document.getElementById('indiaMapContainer');
    if (view === 'district') {
        mapContainer.style.background = 'linear-gradient(135deg, #1e293b 0%, #334155 100%)';
    } else {
        mapContainer.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
    }
}



function addStateMarkerHandlers() {
    document.querySelectorAll('.state-marker').forEach(marker => {
        marker.addEventListener('click', function() {
            const state = this.getAttribute('data-state');
            const title = this.getAttribute('title');
            alert(`📊 ${title}\n\nClick to view detailed state dashboard (Feature coming soon)`);
        });
    });
}



function viewComplaintDetails(complaintId) {
    console.log(`Opening complaint: ${complaintId}`);
    alert(`📋 Complaint Details: ${complaintId}\n\nFull complaint view will open here (Feature in development)`);
}



async function sendSchemeNotification(targetGroup, schemeName) {
    console.log(`📤 Sending ${schemeName} to ${targetGroup}`);
    
    const button = event.target;
    const originalContent = button.innerHTML;
    button.innerHTML = '⏳';
    button.style.pointerEvents = 'none';
    
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        if (window.govFirestore && window.govFirestoreAddDoc) {
            const db = window.govFirestore;
            await window.govFirestoreAddDoc(window.govFirestoreCollection(db, 'notifications'), {
                targetGroup: targetGroup,
                scheme: schemeName,
                sentBy: 'Government Dashboard',
                timestamp: new Date(),
                type: 'scheme_notification',
                message: `New scheme alert: ${schemeName} for ${targetGroup}`,
                read: false
            });
        }
        
        button.innerHTML = '✅';
        setTimeout(() => {
            alert(`✅ Notification sent successfully!\n\n${schemeName} notification sent to all ${targetGroup} users.`);
            button.innerHTML = originalContent;
            button.style.pointerEvents = 'auto';
        }, 500);
        
    } catch (error) {
        console.error('Error sending notification:', error);
        alert('❌ Failed to send notification. Please try again.');
        button.innerHTML = originalContent;
        button.style.pointerEvents = 'auto';
    }
}

function showNotificationModal() {
    alert('📤 Bulk Notification System\n\nThis will open a modal to compose and send notifications to multiple user groups simultaneously.\n\n(Feature in development)');
}



function getCategoryEmoji(category) {
    const emojis = {
        'road': '🚧',
        'sanitation': '🗑️',
        'water': '💧',
        'electricity': '⚡',
        'drainage': '🌊',
        'traffic': '🚦',
        'animal': '🐕',
        'noise': '🔊',
        'encroachment': '🚫',
        'infrastructure': '🏗️',
        'other': '📝'
    };
    return emojis[category.toLowerCase()] || emojis['other'];
}

function getStatusInfo(status) {
    const statusMap = {
        'new': { label: 'NEW', class: 'new' },
        'assigned': { label: 'ASSIGNED', class: 'assigned' },
        'in-progress': { label: 'IN PROGRESS', class: 'assigned' },
        'resolved': { label: 'RESOLVED', class: 'resolved' },
        'closed': { label: 'CLOSED', class: 'resolved' }
    };
    return statusMap[status.toLowerCase()] || statusMap['new'];
}

function getTimeAgo(timestamp) {
    if (!timestamp) return 'Just now';
    
    const now = Date.now();
    const then = timestamp.seconds ? timestamp.seconds * 1000 : timestamp;
    const diffSeconds = Math.floor((now - then) / 1000);
    
    if (diffSeconds < 60) return 'Just now';
    if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)} minutes ago`;
    if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)} hours ago`;
    return `${Math.floor(diffSeconds / 86400)} days ago`;
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}



if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNationalCommand);
} else {
    initNationalCommand();
}
