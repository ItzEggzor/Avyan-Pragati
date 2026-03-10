

var COMPLAINTS_DATA_URL = '/api/complaints';

var gMap              = null;
var heatmapLayer      = null;
var heatCircles       = [];
var markersList       = [];
var markersVisible    = false;
var heatVisible       = true;
var currentSort       = 'urgency-desc';
var currentUrgency    = 'all';
var allComplaints     = [];
var filteredComplaints = [];


var demoComplaints = [
    { id: 'CMP-062501', subject: 'Pothole in main road causing accidents', state: 'Delhi', lat: 28.6139, lng: 77.2090, urgency: 'critical', status: 'open', date: '2026-03-04', description: 'Large pothole on Rajendra Prasad Marg affecting vehicular movement. The pothole is approximately 2 feet wide and 8 inches deep, posing a serious accident risk to two-wheelers and cycles.', photo: 'https://picsum.photos/seed/cmp501/480/260' },
    { id: 'CMP-062502', subject: 'Water supply disruption for 3 days', state: 'Maharashtra', lat: 19.7515, lng: 75.7139, urgency: 'high', status: 'in-progress', date: '2026-03-03', description: 'No water supply in Marine Drive area, residents facing hardship. A burst pipe near the main junction has cut off water to over 200 households.', photo: 'https://picsum.photos/seed/cmp502/480/260' },
    { id: 'CMP-062503', subject: 'Street lights not working in colony', state: 'Karnataka', lat: 15.3173, lng: 75.7139, urgency: 'medium', status: 'open', date: '2026-03-02', description: 'Street lights in Whitefield area non-functional for 2 weeks causing safety concerns especially for women returning home after dark.', photo: '' },
    { id: 'CMP-062504', subject: 'Garbage not collected for a week', state: 'Tamil Nadu', lat: 11.1271, lng: 78.6569, urgency: 'high', status: 'open', date: '2026-03-01', description: 'Waste accumulation in residential area causing health hazard. Stray animals are scattering the garbage and residents report foul odour in a 200m radius.', photo: 'https://picsum.photos/seed/cmp504/480/260' },
    { id: 'CMP-062505', subject: 'Road divider damaged', state: 'Telangana', lat: 18.1124, lng: 79.0193, urgency: 'low', status: 'resolved', date: '2026-02-28', description: 'Road divider repair completed on Hitech City road. Concrete barriers have been restored and reflectors replaced successfully.', photo: '' },
    { id: 'CMP-062506', subject: 'School roof leakage during monsoon', state: 'Gujarat', lat: 22.2587, lng: 71.1924, urgency: 'high', status: 'in-progress', date: '2026-02-27', description: 'Government school building requires urgent roof repair. Rainwater seeps into two classrooms affecting around 80 students who have been shifted to the corridor.', photo: 'https://picsum.photos/seed/cmp506/480/260' },
    { id: 'CMP-062507', subject: 'Hospital equipment malfunction', state: 'Uttar Pradesh', lat: 26.8467, lng: 80.9462, urgency: 'critical', status: 'open', date: '2026-02-26', description: 'X-ray machine in district hospital non-functional for patient care. Approximately 30-40 patients are being redirected to private facilities daily, causing financial burden.', photo: '' },
    { id: 'CMP-062508', subject: 'Bridge safety concern', state: 'West Bengal', lat: 22.9868, lng: 87.8550, urgency: 'critical', status: 'open', date: '2026-02-25', description: 'Visible cracks in footbridge over railway track causing safety risk. Cracks are 1-2 cm wide running across the bridge span. Used by over 500 people daily to cross the tracks.', photo: 'https://picsum.photos/seed/cmp508/480/260' },
    { id: 'CMP-062509', subject: 'Railway crossing gate malfunction', state: 'Rajasthan', lat: 27.0238, lng: 74.2179, urgency: 'high', status: 'in-progress', date: '2026-02-24', description: 'Automatic gate at railway crossing stuck open causing traffic chaos. The gate motor has failed and manual operation is not possible. Near-miss incidents reported twice.', photo: 'https://picsum.photos/seed/cmp509/480/260' },
    { id: 'CMP-062510', subject: 'Public park maintenance needed', state: 'Madhya Pradesh', lat: 22.9734, lng: 78.6569, urgency: 'medium', status: 'open', date: '2026-02-23', description: 'Trees overgrown, benches broken in central park. Fallen branches are blocking the walking path. Several benches have missing planks posing injury risk to elderly visitors.', photo: '' },
    { id: 'CMP-062511', subject: 'Sewerage overflowing in market area', state: 'Delhi', lat: 28.5355, lng: 77.3910, urgency: 'critical', status: 'open', date: '2026-02-22', description: 'Sanitation crisis in commercial area with health risk. Sewage water is overflowing onto the main market road. Shopkeepers have voluntarily closed shops to avoid contamination.', photo: 'https://picsum.photos/seed/cmp511/480/260' },
    { id: 'CMP-062512', subject: 'Traffic signal malfunction', state: 'Maharashtra', lat: 19.0760, lng: 72.8777, urgency: 'high', status: 'open', date: '2026-02-21', description: 'Signals not working at busy intersection causing accidents. The 4-way signal at the main junction has been dark since yesterday evening. Two minor collisions already reported.', photo: '' },
    { id: 'CMP-062513', subject: 'Building foundation crack', state: 'Karnataka', lat: 12.9716, lng: 77.5946, urgency: 'critical', status: 'in-progress', date: '2026-02-20', description: 'Government office building showing structural weakness. A large crack has appeared along the south wall spanning from ground floor to first floor. Building partially evacuated.', photo: 'https://picsum.photos/seed/cmp513/480/260' },
    { id: 'CMP-062514', subject: 'Water contamination complaint', state: 'Tamil Nadu', lat: 13.0827, lng: 80.2707, urgency: 'critical', status: 'open', date: '2026-02-19', description: 'Drinking water supply contaminated affecting 10000+ residents. Water appears yellowish with foul odour. Suspected heavy metal contamination from nearby industrial effluent discharge.', photo: 'https://picsum.photos/seed/cmp514/480/260' },
    { id: 'CMP-062515', subject: 'Fire exit blocked', state: 'Telangana', lat: 17.3850, lng: 78.4867, urgency: 'critical', status: 'open', date: '2026-02-18', description: 'Emergency exit in office building blocked by construction material. The staircase fire exit on all 3 floors is blocked by contractor equipment. Reported to building management twice with no action.', photo: '' },
];


async function loadComplaintsData() {
    if (window.govFirestore && window.govFirestoreCollection && window.govFirestoreOnSnapshot) {
        try {
            var q = window.govFirestoreQuery(
                window.govFirestoreCollection(window.govFirestore, 'complaints'),
                window.govFirestoreOrderBy('timestamp', 'desc')
            );
            window.govFirestoreOnSnapshot(q, function(snapshot) {
                allComplaints = snapshot.docs.map(function(docSnap) {
                    var c = docSnap.data();
                    var stateFromDistrict = getStateFromDistrict(c.district);
                    var tsMs = c.timestamp
                        ? (c.timestamp.toMillis ? c.timestamp.toMillis() : Number(c.timestamp))
                        : Date.now();
                    return {
                        id:          c.id || docSnap.id,
                        subject:     c.title || c.subject || 'Complaint',
                        state:       stateFromDistrict || c.state || 'Unknown',
                        district:    c.district || 'Unknown',
                        lat:         +c.lat  || 20.5937,
                        lng:         +c.lng  || 78.9629,
                        urgency:     c.severity || c.urgency || 'medium',
                        status:      c.status || 'pending',
                        date:        new Date(tsMs).toISOString().split('T')[0],
                        description: c.description || '',
                        category:    c.category || '',
                        photo:       c.beforeImage || c.photo || '',
                        upvotes:     c.upvotes || 0,
                        firestoreId: docSnap.id
                    };
                });
                console.log('[Complaints] \u2705 Snapshot: ' + allComplaints.length + ' complaints (real-time)');
                _reRender();
            }, function(err) {
                console.warn('[Complaints] onSnapshot failed:', err.message);
                _useDemoData();
            });
        } catch(e) {
            _useDemoData();
        }
    } else {
        _useDemoData();
    }
}

function _useDemoData() {
    allComplaints = demoComplaints;
    _reRender();
}

function _reRender() {
    applyJurisdictionPreFilter();
    updateStats();
    renderComplaintsList();
    renderComplaintsHeat();
    renderRoleSummary();
}

function getStateFromDistrict(district) {
    var districtStateMap = {
        'Mumbai': 'Maharashtra', 'Mumbai Suburban': 'Maharashtra', 'Pune': 'Maharashtra', 'Thane': 'Maharashtra',
        'New Delhi': 'Delhi', 'North Delhi': 'Delhi', 'South Delhi': 'Delhi', 'East Delhi': 'Delhi',
        'Bengaluru Urban': 'Karnataka', 'Mysuru': 'Karnataka', 'Hubballi-Dharwad': 'Karnataka',
        'Chennai': 'Tamil Nadu', 'Coimbatore': 'Tamil Nadu', 'Madurai': 'Tamil Nadu',
        'Hyderabad': 'Telangana', 'Rangareddy': 'Telangana', 'Warangal': 'Telangana',
        'Ahmedabad': 'Gujarat', 'Surat': 'Gujarat', 'Vadodara': 'Gujarat',
        'Lucknow': 'Uttar Pradesh', 'Kanpur': 'Uttar Pradesh', 'Agra': 'Uttar Pradesh',
        'Kolkata': 'West Bengal', 'Howrah': 'West Bengal',
        'Jaipur': 'Rajasthan', 'Jodhpur': 'Rajasthan', 'Jaisalmer': 'Rajasthan',
        'Bhopal': 'Madhya Pradesh', 'Indore': 'Madhya Pradesh'
    };
    return districtStateMap[district] || null;
}


function applyJurisdictionPreFilter() {
    var jur      = window.OFFICER_JURISDICTION || {};
    var role     = jur.role     || 'national';
    var jurState = jur.jurisdiction || null;
    var jurDist  = jur.district    || null;

    if (role === 'district') {
        allComplaints = allComplaints.filter(function(c) {
            if (c.state && c.state !== jurState) return false;
            if (c.district && jurDist && c.district !== jurDist) return false;
            return true;
        });
        var stateDropdown = document.getElementById('stateFilter');
        if (stateDropdown) {
            stateDropdown.value = jurState;
            var sg = stateDropdown.closest ? stateDropdown.closest('.filter-group') : null;
            if (sg) sg.style.display = 'none';
        }
    } else if (role === 'state') {
        allComplaints = allComplaints.filter(function(c) {
            return c.state === jurState;
        });
        var stateDropdown = document.getElementById('stateFilter');
        if (stateDropdown) {
            stateDropdown.value = jurState;
            var sg = stateDropdown.closest ? stateDropdown.closest('.filter-group') : null;
            if (sg) sg.style.display = 'none';
        }
    }
    filteredComplaints = allComplaints.slice();
}


function filterComplaints() {
    var searchVal = document.getElementById('searchComplaint').value.toLowerCase();
    var stateVal  = document.getElementById('stateFilter').value;
    var statusVal = document.getElementById('statusFilter').value;
    var jur       = window.OFFICER_JURISDICTION || {};
    var jurRole   = jur.role || 'national';
    var jurState  = jur.jurisdiction || null;
    var jurDist   = jur.district || null;

    filteredComplaints = allComplaints.filter(function(c) {
        if (jurRole === 'district') {
            if (c.state && c.state !== jurState) return false;
            if (c.district && jurDist && c.district !== jurDist) return false;
        } else if (jurRole === 'state') {
            if (c.state !== jurState) return false;
        }

        var matchSearch = !searchVal ||
            c.id.toLowerCase().indexOf(searchVal) > -1 ||
            c.subject.toLowerCase().indexOf(searchVal) > -1;
        var matchState  = !stateVal  || c.state === stateVal;
        var matchStatus = !statusVal || c.status === statusVal;
        var matchUrgency = currentUrgency === 'all' || c.urgency === currentUrgency;

        return matchSearch && matchState && matchStatus && matchUrgency;
    });

    sortComplaints();
}

function filterByUrgency(level) {
    currentUrgency = level;
    
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    document.querySelector('[data-urgency="' + level + '"]').classList.add('active');

    filterComplaints();
}

function sortComplaints() {
    var sortVal = document.getElementById('sortBy').value || currentSort;
    currentSort = sortVal;

    var sortFn = {
        'urgency-desc': function(a, b) {
            var order = { critical: 0, high: 1, medium: 2, low: 3 };
            return (order[a.urgency] || 4) - (order[b.urgency] || 4);
        },
        'urgency-asc': function(a, b) {
            var order = { critical: 0, high: 1, medium: 2, low: 3 };
            return (order[b.urgency] || 4) - (order[a.urgency] || 4);
        },
        'date-newest': function(a, b) {
            return new Date(b.date) - new Date(a.date);
        },
        'date-oldest': function(a, b) {
            return new Date(a.date) - new Date(b.date);
        },
        'state': function(a, b) {
            return a.state.localeCompare(b.state);
        }
    };

    if (sortFn[sortVal]) {
        filteredComplaints.sort(sortFn[sortVal]);
    }

    renderComplaintsList();
}

function resetFilters() {
    document.getElementById('searchComplaint').value = '';
    var jur = window.OFFICER_JURISDICTION || {};
    if (jur.role === 'state' || jur.role === 'district') {
        document.getElementById('stateFilter').value = jur.jurisdiction || '';
    } else {
        document.getElementById('stateFilter').value = '';
    }
    document.getElementById('statusFilter').value = '';
    document.getElementById('sortBy').value = 'urgency-desc';
    currentUrgency = 'all';
    
    document.querySelectorAll('[data-urgency]').forEach(function(btn) {
        btn.classList.remove('active');
    });
    document.querySelector('[data-urgency="all"]').classList.add('active');

    filterComplaints();
}


function renderComplaintsList() {
    var list = document.getElementById('complaintsList');
    list.innerHTML = '';

    if (filteredComplaints.length === 0) {
        list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📋</div><div class="empty-state-text">No complaints found</div></div>';
        document.getElementById('listCount').textContent = '0 / ' + allComplaints.length;
        return;
    }

    filteredComplaints.forEach(function(c) {
        var div = document.createElement('div');
        div.className = 'complaint-item';
        div.onclick = function() { highlightComplaint(c, this); };
        div.innerHTML =
            '<div class="complaint-header">' +
            '  <span class="complaint-id">' + c.id + '</span>' +
            '  <span class="complaint-urgency-badge urgency-' + c.urgency + '">' + c.urgency.toUpperCase() + '</span>' +
            '</div>' +
            '<p class="complaint-subject">' + c.subject + '</p>' +
            '<div class="complaint-meta">' +
            '  <span class="complaint-state">📍 ' + c.state + '</span>' +
            '  <span class="complaint-status-badge">' + (c.status === 'open' ? '🔵 Open' : c.status === 'in-progress' ? '🟡 In Progress' : c.status === 'resolved' ? '🟢 Resolved' : '⚫ Closed') + '</span>' +
            '  <span>' + c.date + '</span>' +
            '</div>';
        list.appendChild(div);
    });

    document.getElementById('listCount').textContent = filteredComplaints.length + ' / ' + allComplaints.length;
}



var HEAT_RADIUS        = 40000;
var HEAT_INTENSITY_MULT = 1.0;

function renderComplaintsHeat() {
    heatCircles.forEach(function(c) { c.setMap(null); });
    heatCircles = [];
    if (!heatVisible || !gMap) return;

    var jur  = window.OFFICER_JURISDICTION || {};
    var role = jur.role || 'national';

    if (role === 'district') {
        var locMap = {};
        allComplaints.forEach(function(c) {
            var key = c.lat.toFixed(4) + ',' + c.lng.toFixed(4);
            if (!locMap[key]) locMap[key] = { lat:c.lat, lng:c.lng, count:0, hasCritical:false };
            locMap[key].count++;
            if (c.urgency === 'critical') locMap[key].hasCritical = true;
        });
        var maxC = Math.max.apply(null, Object.values(locMap).map(function(v){ return v.count; })) || 1;
        Object.values(locMap).forEach(function(loc) {
            var ratio = loc.count / maxC;
            heatCircles.push(new google.maps.Circle({
                center:        { lat: loc.lat, lng: loc.lng },
                radius:        HEAT_RADIUS * (0.3 + 0.7 * ratio) * HEAT_INTENSITY_MULT,
                map:           gMap,
                fillColor:     loc.hasCritical ? '#dc2626' : ratio > 0.6 ? '#003366' : ratio > 0.3 ? '#3a8fd1' : '#add8e6',
                fillOpacity:   Math.min(0.85, (0.3 + 0.5 * ratio) * HEAT_INTENSITY_MULT),
                strokeWeight:  0
            }));
        });

    } else {
        var groupBy  = role === 'national' ? 'state' : 'district';
        var BASE_R   = role === 'national' ? 90000  : 45000;
        var groups   = {};
        allComplaints.forEach(function(c) {
            var key = c[groupBy] || 'Unknown';
            if (!groups[key]) groups[key] = { count:0, latSum:0, lngSum:0, hasCritical:false };
            groups[key].count++;
            groups[key].latSum += c.lat;
            groups[key].lngSum += c.lng;
            if (c.urgency === 'critical') groups[key].hasCritical = true;
        });
        var maxG = Math.max.apply(null, Object.values(groups).map(function(g){ return g.count; })) || 1;
        Object.keys(groups).forEach(function(name) {
            var g     = groups[name];
            var ratio = g.count / maxG;
            var lat   = g.latSum / g.count;
            var lng   = g.lngSum / g.count;
            var col   = g.hasCritical ? '#dc2626' : ratio > 0.6 ? '#1e3a5f' : ratio > 0.3 ? '#2563eb' : '#93c5fd';

            heatCircles.push(new google.maps.Circle({
                center: { lat: lat, lng: lng },
                radius: BASE_R * (0.35 + 0.65 * ratio) * HEAT_INTENSITY_MULT * 1.4,
                map:    gMap,
                fillColor:   col,
                fillOpacity: 0.12,
                strokeColor: col,
                strokeOpacity: 0.25,
                strokeWeight: 1
            }));
            heatCircles.push(new google.maps.Circle({
                center: { lat: lat, lng: lng },
                radius: BASE_R * (0.35 + 0.65 * ratio) * HEAT_INTENSITY_MULT,
                map:    gMap,
                fillColor:   col,
                fillOpacity: Math.min(0.78, 0.30 + 0.48 * ratio),
                strokeColor: col,
                strokeOpacity: 0.5,
                strokeWeight: 1.5
            }));
        });
    }
}


function renderComplaintsMarkers() {
    markersList.forEach(function(m) { m.map = null; });
    markersList = [];

    var infoWindow = new google.maps.InfoWindow();
    var maxCritical = allComplaints.filter(function(c) { return c.urgency === 'critical'; }).length;

    allComplaints.forEach(function(c) {
        var isShown = !markersVisible || c.urgency === 'critical';
        var iconColor = c.urgency === 'critical' ? '#dc3545' : c.urgency === 'high' ? '#ff6b6b' : c.urgency === 'medium' ? '#ffc107' : '#28a745';
        var iconSize = c.urgency === 'critical' ? 14 : 10;

        var dot = document.createElement('div');
        dot.style.cssText = 'width:' + iconSize + 'px;height:' + iconSize + 'px;border-radius:50%;' +
            'background:' + iconColor + ';border:2px solid #fff;cursor:pointer;' +
            'box-shadow:0 2px 8px rgba(0,0,0,0.4)';

        var marker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: c.lat, lng: c.lng },
            map:      markersVisible ? gMap : null,
            title:    c.id + ': ' + c.subject,
            content:  dot
        });

        (function(complaint, m) {
            m.addListener('gmp-click', function() {
                infoWindow.setContent(
                    '<div style="font-family:Segoe UI,sans-serif;padding:8px 12px;min-width:200px">' +
                    '<strong style="color:#003366;font-size:12px">' + complaint.id + '</strong><br>' +
                    '<strong style="font-size:13px;color:#dc3545">' + complaint.subject + '</strong><br>' +
                    '<small style="color:#666"><strong>State:</strong> ' + complaint.state + '</small><br>' +
                    '<small style="color:#666"><strong>Urgency:</strong> ' + complaint.urgency.toUpperCase() + '</small><br>' +
                    '<small style="color:#666"><strong>Status:</strong> ' + complaint.status.toUpperCase() + '</small><br>' +
                    '<small style="color:#666"><strong>Date:</strong> ' + complaint.date + '</small><br>' +
                    '<p style="margin: 6px 0 0 0; font-size:11px; color:#555">' + complaint.description + '</p>' +
                    '</div>'
                );
                infoWindow.open(gMap, m);
            });
        })(c, marker);

        markersList.push(marker);
    });
}


function toggleComplaintsHeat() {
    heatVisible = !heatVisible;
    renderComplaintsHeat();
    document.getElementById('btnHeatmap').classList.toggle('active', heatVisible);
}

function toggleComplaintsMarkers() {
    markersVisible = !markersVisible;
    renderComplaintsMarkers();
    document.getElementById('btnMarkers').classList.toggle('active', markersVisible);
}

function resetMapView() {
    if (!gMap) return;
    var jur = window.OFFICER_JURISDICTION || {};
    if (jur.role === 'district' || jur.role === 'state') {
        gMap.setCenter(jur.mapCenter || { lat: 20.5937, lng: 78.9629 });
        gMap.setZoom(jur.mapZoom || 7);
    } else {
        gMap.setCenter({ lat: 20.5937, lng: 78.9629 });
        gMap.setZoom(5);
    }
}

function changeMapType(type) {
    if (gMap) gMap.setMapTypeId(type);
}

function applyComplaintsHeatSettings() {
    var rSlider = document.getElementById('heatRadius');
    var iSlider = document.getElementById('heatIntensity');
    if (rSlider) {
        HEAT_RADIUS = rSlider.value * 10000;
        var rLabel = document.getElementById('radiusVal');
        if (rLabel) rLabel.textContent = (rSlider.value * 10) + ' km';
    }
    if (iSlider) {
        HEAT_INTENSITY_MULT = iSlider.value / 10;
        var iLabel = document.getElementById('intensityVal');
        if (iLabel) iLabel.textContent = HEAT_INTENSITY_MULT.toFixed(1);
    }
    renderComplaintsHeat();
}

function highlightComplaint(complaint, el) {
    document.querySelectorAll('.complaint-item').forEach(function(item) {
        item.classList.remove('active');
    });
    if (el) el.classList.add('active');

    if (gMap) {
        gMap.setCenter({ lat: complaint.lat, lng: complaint.lng });
        gMap.setZoom(8);
    }

    document.getElementById('dtDcId').textContent = complaint.id;

    var urgencyBadge = document.getElementById('dtDcUrgency');
    urgencyBadge.textContent = complaint.urgency.toUpperCase();
    urgencyBadge.className = 'dt-dc-urgency-badge urgency-' + complaint.urgency;

    document.getElementById('dtDcSubject').textContent = complaint.subject;
    document.getElementById('dtDcState').textContent = '\uD83D\uDCCD ' + complaint.state;
    document.getElementById('dtDcDate').textContent = complaint.date;

    var statusEl = document.getElementById('dtDcStatus');
    var statusMap = { 'open': '\uD83D\uDD35 Open', 'in-progress': '\uD83D\uDFE1 In Progress', 'resolved': '\uD83D\uDFE2 Resolved', 'closed': '\u26AB Closed' };
    statusEl.textContent = statusMap[complaint.status] || complaint.status;
    statusEl.className = 'dt-dc-status-badge dt-sb-status-' + complaint.status;

    document.getElementById('dtDcDesc').textContent = complaint.description || 'No description provided.';

    var photoWrap = document.getElementById('dtDcPhotoWrap');
    var noPhoto   = document.getElementById('dtDcNoPhoto');
    var photoImg  = document.getElementById('dtDcPhoto');
    if (complaint.photo) {
        photoImg.src = complaint.photo;
        photoWrap.style.display = 'block';
        noPhoto.style.display = 'none';
    } else {
        photoWrap.style.display = 'none';
        noPhoto.style.display = 'flex';
    }

    var panel   = document.getElementById('dtBelowDetail');
    var section = document.getElementById('digitalTwinSection');
    panel.style.display = 'block';
    setTimeout(function() {
        var sRect = section.getBoundingClientRect();
        var pRect = panel.getBoundingClientRect();
        section.scrollBy({ top: pRect.top - sRect.top - 12, behavior: 'smooth' });
    }, 40);
}

function closeComplaintDetail() {
    document.getElementById('dtBelowDetail').style.display = 'none';
    document.querySelectorAll('.complaint-item').forEach(function(el) { el.classList.remove('active'); });
    var section = document.getElementById('digitalTwinSection');
    if (section) section.scrollTo({ top: 0, behavior: 'smooth' });
}


function renderRoleSummary() {
    var el      = document.getElementById('dtSummaryChart');
    var titleEl = document.getElementById('dtSummaryTitle');
    if (!el) return;

    var jur  = window.OFFICER_JURISDICTION || {};
    var role = jur.role || 'national';

    if (role === 'national') {
        if (titleEl) titleEl.textContent = 'State-wise Summary';
        _renderGroupSummary(el, 'state');
    } else if (role === 'state') {
        if (titleEl) titleEl.textContent = 'District-wise Summary';
        _renderGroupSummary(el, 'district');
    } else {
        if (titleEl) titleEl.textContent = 'Category Summary';
        _renderCategorySummary(el);
    }
}

function _renderGroupSummary(el, groupBy) {
    var groups  = {};
    var maxCount = 0;
    allComplaints.forEach(function(c) {
        var key = c[groupBy] || 'Unknown';
        if (!groups[key]) groups[key] = { total:0, critical:0, high:0, open:0, resolved:0, latSum:0, lngSum:0, n:0 };
        var g = groups[key];
        g.total++;
        if (c.urgency === 'critical') g.critical++;
        if (c.urgency === 'high')     g.high++;
        if (c.status === 'open' || c.status === 'pending') g.open++;
        if (c.status === 'resolved')  g.resolved++;
        if (c.lat && c.lng) { g.latSum += c.lat; g.lngSum += c.lng; g.n++; }
        if (g.total > maxCount) maxCount = g.total;
    });

    var sorted = Object.keys(groups).sort(function(a,b){ return groups[b].total - groups[a].total; });
    if (!sorted.length) {
        el.innerHTML = '<div style="text-align:center;padding:20px;color:#94a3b8;font-size:12px;">No complaints data</div>';
        return;
    }

    el.innerHTML = sorted.map(function(name) {
        var g   = groups[name];
        var pct = Math.round(g.total / maxCount * 100);
        var col = g.critical > 0 ? '#dc2626' : g.high > 0 ? '#f59e0b' : '#3b82f6';
        return '<div style="margin-bottom:11px;cursor:pointer;padding:8px 10px;border-radius:8px;transition:background 0.15s;" '
            + 'onmouseover="this.style.background=\'#f8fafc\'" onmouseout="this.style.background=\'\'" '
            + 'onclick="zoomToGroup(\'' + name.replace(/'/g,"\\'") + '\',\'' + groupBy + '\')">'
            + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">'
            + '<span style="font-size:12px;font-weight:600;color:#1e293b;">'
            + (g.critical > 0 ? '<span style="color:#dc2626;margin-right:3px;">&#9679;</span>' : '')
            + name
            + '</span>'
            + '<span style="font-size:12px;font-weight:800;color:' + col + ';">' + g.total + '</span>'
            + '</div>'
            + '<div style="height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden;margin-bottom:4px;">'
            + '<div style="height:100%;width:' + pct + '%;background:' + col + ';border-radius:3px;transition:width 0.6s ease;"></div>'
            + '</div>'
            + '<div style="display:flex;gap:8px;font-size:10px;color:#64748b;flex-wrap:wrap;">'
            + (g.critical > 0 ? '<span style="color:#dc2626;">\u26A0 ' + g.critical + ' critical</span>' : '')
            + (g.high     > 0 ? '<span style="color:#f59e0b;">\u2191 ' + g.high + ' high</span>' : '')
            + '<span>' + g.open + ' open &middot; ' + g.resolved + ' resolved</span>'
            + '</div>'
            + '</div>';
    }).join('');
}

function _renderCategorySummary(el) {
    var cats     = {};
    var maxCount = 0;
    allComplaints.forEach(function(c) {
        var key = c.category || 'Other';
        if (!cats[key]) cats[key] = { total:0, critical:0, open:0 };
        cats[key].total++;
        if (c.urgency === 'critical') cats[key].critical++;
        if (c.status === 'open' || c.status === 'pending') cats[key].open++;
        if (cats[key].total > maxCount) maxCount = cats[key].total;
    });

    var sorted = Object.keys(cats).sort(function(a,b){ return cats[b].total - cats[a].total; });
    if (!sorted.length) {
        el.innerHTML = '<div style="text-align:center;padding:20px;color:#94a3b8;font-size:12px;">No complaints data</div>';
        return;
    }

    el.innerHTML = sorted.slice(0, 12).map(function(name) {
        var g   = cats[name];
        var pct = Math.round(g.total / maxCount * 100);
        var col = g.critical > 0 ? '#dc2626' : '#6366f1';
        return '<div style="margin-bottom:9px;">'
            + '<div style="display:flex;justify-content:space-between;margin-bottom:3px;">'
            + '<span style="font-size:12px;font-weight:500;color:#1e293b;">' + name + '</span>'
            + '<span style="font-size:11px;font-weight:700;color:' + col + ';">' + g.total + '</span>'
            + '</div>'
            + '<div style="height:5px;background:#e2e8f0;border-radius:3px;overflow:hidden;">'
            + '<div style="height:100%;width:' + pct + '%;background:' + col + ';border-radius:3px;transition:width 0.6s ease;"></div>'
            + '</div>'
            + '</div>';
    }).join('');
}

function zoomToGroup(name, groupBy) {
    var group = allComplaints.filter(function(c){ return c[groupBy] === name; });
    if (group.length && gMap) {
        var avgLat = group.reduce(function(s,c){ return s + c.lat; }, 0) / group.length;
        var avgLng = group.reduce(function(s,c){ return s + c.lng; }, 0) / group.length;
        gMap.panTo({ lat: avgLat, lng: avgLng });
        gMap.setZoom(groupBy === 'state' ? 7 : 10);
    }
    if (groupBy === 'state') {
        var sel = document.getElementById('stateFilter');
        if (sel) { sel.value = name; filterComplaints(); }
    }
}


function updateStats() {
    var critical   = allComplaints.filter(function(c){ return c.urgency === 'critical'; }).length;
    var high       = allComplaints.filter(function(c){ return c.urgency === 'high'; }).length;
    var open       = allComplaints.filter(function(c){ return c.status === 'open' || c.status === 'pending'; }).length;
    var inProgress = allComplaints.filter(function(c){ return c.status === 'in-progress'; }).length;
    var resolved   = allComplaints.filter(function(c){ return c.status === 'resolved'; }).length;

    document.getElementById('totalComplaints').textContent = allComplaints.length;
    document.getElementById('criticalCount').textContent   = critical;
    var hEl = document.getElementById('highCount');       if (hEl) hEl.textContent = high;
    document.getElementById('openCount').textContent       = open;
    var ipEl = document.getElementById('inProgressCount'); if (ipEl) ipEl.textContent = inProgress;
    var rEl  = document.getElementById('resolvedCount');   if (rEl)  rEl.textContent  = resolved;
}


async function initComplaintsMap() {
    await loadComplaintsData();

    var mapsLib   = await google.maps.importLibrary('maps');
    var markerLib = await google.maps.importLibrary('marker');

    var jur    = window.OFFICER_JURISDICTION || {};
    var center = jur.mapCenter || { lat: 20.5937, lng: 78.9629 };
    var zoom   = jur.mapZoom   || 5;

    var subEl    = document.getElementById('dtCmdSub');
    var bannerEl = document.getElementById('dtJurBanner');
    if (jur.role === 'district' && jur.district) {
        if (subEl) subEl.textContent = 'Viewing: ' + jur.district + ', ' + (jur.jurisdiction || '') + '  \u2014  District-level complaints only';
        if (bannerEl) {
            bannerEl.style.display = 'flex';
            bannerEl.innerHTML =
                '<span style="background:#e8f5e9;color:#2e7d32;padding:3px 10px;border-radius:20px;font-weight:700;font-size:12px;white-space:nowrap;">\uD83C\uDF96\uFE0F District Officer</span>' +
                '<span style="font-weight:600;color:#1e293b;">' + jur.district + ', ' + (jur.jurisdiction || '') + '</span>' +
                '<span style="color:#64748b;">\u2014 You are viewing complaints within your district jurisdiction only.</span>';
        }
    } else if (jur.role === 'state' && jur.jurisdiction) {
        if (subEl) subEl.textContent = 'Viewing: ' + jur.jurisdiction + ' (State)  \u2014  State-level complaints only';
        if (bannerEl) {
            bannerEl.style.display = 'flex';
            bannerEl.innerHTML =
                '<span style="background:#e3f2fd;color:#1565c0;padding:3px 10px;border-radius:20px;font-weight:700;font-size:12px;white-space:nowrap;">\uD83C\uDFDB\uFE0F State Officer</span>' +
                '<span style="font-weight:600;color:#1e293b;">' + jur.jurisdiction + '</span>' +
                '<span style="color:#64748b;">\u2014 You are viewing complaints within your state jurisdiction only.</span>';
        }
    }
    var dtMapOpts = {
        zoom:              zoom,
        center:            center,
        mapTypeId:         'roadmap',
        mapTypeControl:    false,
        streetViewControl: false,
        fullscreenControl: true,
        styles: []
    };
    if (jur.mapBounds) {
        dtMapOpts.restriction = { latLngBounds: jur.mapBounds, strictBounds: true };
        dtMapOpts.minZoom = jur.role === 'district' ? Math.max(zoom - 1, 10)
                          : jur.role === 'state'    ? Math.max(zoom - 1, 6)
                          : 4;
    } else if (jur.role && jur.role !== 'national') {
        dtMapOpts.restriction = { latLngBounds: { north: 35.5, south: 6.7, east: 97.4, west: 68.2 }, strictBounds: true };
        dtMapOpts.minZoom = jur.role === 'district' ? 10 : 6;
    }
    gMap = new mapsLib.Map(document.getElementById('complaintsMap'), dtMapOpts);

    renderComplaintsHeat();
    renderComplaintsMarkers();

    document.querySelector('[data-urgency="all"]').classList.add('active');
}

if (!document.getElementById('ombudsmanSection')) {
    window.addEventListener('load', initComplaintsMap);
}

