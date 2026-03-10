'use strict';





var PHOTO_LABELS = ['Site Overview', 'Foundation Work', 'Steel Framework', 'Material Stock',
                    'Progress Shot', 'Inspection View', 'Safety Setup', 'Night Work'];
var PHOTO_GRADIENTS = [
    'linear-gradient(135deg,#667eea,#764ba2)',
    'linear-gradient(135deg,#f093fb,#f5576c)',
    'linear-gradient(135deg,#4facfe,#00f2fe)',
    'linear-gradient(135deg,#43e97b,#38f9d7)',
    'linear-gradient(135deg,#fa709a,#fee140)',
    'linear-gradient(135deg,#30cfd0,#330867)',
    'linear-gradient(135deg,#a18cd1,#fbc2eb)',
    'linear-gradient(135deg,#fda085,#f6d365)'
];

var ALL_PROJECTS = [
    {
        id: 'PRJ-2024-001', name: 'NH-44 Road Widening Phase II',
        contractor: 'Larsen & Toubro Ltd.', state: 'Delhi', district: 'New Delhi',
        category: 'Road', progress: 65, status: 'pending_approval',
        lat: 28.6139, lng: 77.2090, budget: '\u20B945.2 Cr', deadline: '2026-09-30', startDate: '2024-04-01',
        description: 'Widening of NH-44 corridor from 4 lanes to 6 lanes with flyover at 3 major junctions including Azadpur, Mukarba Chowk and Shalimar Bagh.',
        updates: [
            {
                id: 'UPD-001-1', date: '2026-01-15', submittedBy: 'Larsen & Toubro Ltd.',
                description: 'Foundation piling completed for all 3 junction flyovers. Aggregate base course laid on 8\u00a0km stretch. Safety barriers installed on 4.2\u00a0km. Night-time column concreting in progress at Junction-1.',
                progress: 40, photos: [0, 1],
                citizenApproval: { status: 'approved', comment: 'Work quality is satisfactory. Safety protocols being followed visibly at site.', by: 'Citizen Review Panel', date: '2026-01-17' },
                govtApproval:    { status: 'approved', comment: 'Phase\u00a01 on-site verification completed. Structural integrity confirmed by independent auditor.', by: 'Rajesh Kumar, IAS', date: '2026-01-15' }
            },
            {
                id: 'UPD-001-2', date: '2026-03-04', submittedBy: 'Larsen & Toubro Ltd.',
                description: 'Foundation work complete for Junction-3 flyover. 85% of steel reinforcement placed. Concrete pouring scheduled for next week. Traffic diversions are in place and operational.',
                progress: 68, photos: [0, 1, 2],
                citizenApproval: { status: 'pending', comment: '', by: '', date: '' },
                govtApproval:    { status: 'pending', comment: '', by: '', date: '' }
            }
        ]
    },
    {
        id: 'PRJ-2024-002', name: 'Yamuna Bridge Structural Repair',
        contractor: 'AFCONS Infrastructure Ltd.', state: 'Uttar Pradesh', district: 'Mathura',
        category: 'Bridge', progress: 40, status: 'active',
        lat: 27.4924, lng: 77.6737, budget: '\u20B918.7 Cr', deadline: '2026-11-30', startDate: '2025-01-15',
        description: 'Structural rehabilitation of the Yamuna river crossing bridge including deck replacement, expansion joint repair, and re-waterproofing of all bearings.',
        updates: [
            {
                id: 'UPD-002-1', date: '2025-12-10', submittedBy: 'AFCONS Infrastructure Ltd.',
                description: 'Initial scaffolding erected on downstream face. Safety harness systems installed. Dehumidification equipment deployed for deck work. Reinforcement steel and waterproofing membrane received and quality-checked.',
                progress: 30, photos: [6],
                citizenApproval: { status: 'approved', comment: 'Safety arrangements visible from road. No obstruction to pedestrian movement.', by: 'Citizen Review Panel', date: '2025-12-12' },
                govtApproval:    { status: 'approved', comment: 'Initial scaffolding and safety measures verified.', by: 'Rajesh Kumar, IAS', date: '2025-12-10' }
            }
        ]
    },
    {
        id: 'PRJ-2024-003', name: 'Mumbai Metro Line 7 Extension',
        contractor: 'HCC-Samsung JV', state: 'Maharashtra', district: 'Mumbai Suburban',
        category: 'Metro', progress: 78, status: 'active',
        lat: 19.0760, lng: 72.8777, budget: '\u20B9320 Cr', deadline: '2026-12-31', startDate: '2023-06-01',
        description: 'Extension of Metro Line 7 from Andheri to Dahisar East, 8.8 km with 6 elevated stations. Includes automated fare collection and integrated parking.',
        updates: [
            {
                id: 'UPD-003-1', date: '2025-11-05', submittedBy: 'HCC-Samsung JV',
                description: 'All 72 foundation piles completed and load-tested. Pier construction at 18 of 24 locations finished. Precast girder segments being cast at site yard. Station box excavation at S1 and S2 complete.',
                progress: 55, photos: [1, 4],
                citizenApproval: { status: 'approved', comment: 'Daily commuters report minimal disruption. Construction hoarding maintained properly.', by: 'Citizen Review Panel', date: '2025-11-07' },
                govtApproval:    { status: 'approved', comment: 'Piling work clearance given. All 72 piles verified.', by: 'Rajesh Kumar, IAS', date: '2025-11-05' }
            },
            {
                id: 'UPD-003-2', date: '2026-02-20', submittedBy: 'HCC-Samsung JV',
                description: 'Viaduct spans 4\u20139 completed and load-tested. Girder erection 72% done. Station S3 roof slab poured. Trackwork laying started on completed viaduct. AFC equipment procurement underway.',
                progress: 78, photos: [2, 4, 5],
                citizenApproval: { status: 'approved', comment: 'Visible progress is impressive. No reported safety incidents in community.', by: 'Citizen Review Panel', date: '2026-02-22' },
                govtApproval:    { status: 'approved', comment: 'Viaduct spans 4\u20139 completed and load-tested successfully.', by: 'Rajesh Kumar, IAS', date: '2026-02-20' }
            }
        ]
    },
    {
        id: 'PRJ-2024-004', name: 'Chennai Port Water Supply Pipeline',
        contractor: 'Tata Projects Ltd.', state: 'Tamil Nadu', district: 'Chennai',
        category: 'Water', progress: 100, status: 'completed',
        lat: 13.0827, lng: 80.2707, budget: '\u20B928.4 Cr', deadline: '2026-02-28', startDate: '2024-08-01',
        description: '42 km water supply pipeline from Chembarambakkam reservoir to Chennai Port area with 5 pumping stations and smart flow meters.',
        updates: [
            {
                id: 'UPD-004-1', date: '2025-10-12', submittedBy: 'Tata Projects Ltd.',
                description: 'Pipeline laying complete on 34\u00a0km. 4 of 5 pumping station civil structures ready. Smart flow meters installed at 18 of 22 locations. Testing of first section commenced.',
                progress: 80, photos: [3, 4],
                citizenApproval: { status: 'approved', comment: 'Water pressure improvement noticed in trial areas. Residents are satisfied.', by: 'Citizen Review Panel', date: '2025-10-14' },
                govtApproval:    { status: 'approved', comment: '80% pipeline laying complete. Quality checks passed.', by: 'Rajesh Kumar, IAS', date: '2025-10-12' }
            },
            {
                id: 'UPD-004-2', date: '2026-02-27', submittedBy: 'Tata Projects Ltd.',
                description: 'All 42\u00a0km pipeline installed and pressure-tested. All 5 pumping stations commissioned. 22 smart flow meters active. Final hydraulic test passed at 1.5\u00d7 operating pressure.',
                progress: 100, photos: [4, 7],
                citizenApproval: { status: 'approved', comment: '24x7 water supply achieved. Residents are deeply satisfied.', by: 'Citizen Review Panel', date: '2026-02-28' },
                govtApproval:    { status: 'approved', comment: 'Final inspection completed. All 5 pumping stations operational. Flow tests passed.', by: 'Rajesh Kumar, IAS', date: '2026-02-27' }
            }
        ]
    },
    {
        id: 'PRJ-2024-005', name: 'Bengaluru Outer Ring Road Expansion',
        contractor: 'KMC Constructions Ltd.', state: 'Karnataka', district: 'Bengaluru Urban',
        category: 'Road', progress: 52, status: 'pending_approval',
        lat: 12.9716, lng: 77.5946, budget: '\u20B9156 Cr', deadline: '2027-03-31', startDate: '2024-09-01',
        description: '28 km expansion of Bengaluru Outer Ring Road to 8 lanes from Hebbal to Electronic City including 4 grade separators and 12 signal-free junctions.',
        updates: [
            {
                id: 'UPD-005-1', date: '2025-12-20', submittedBy: 'KMC Constructions Ltd.',
                description: 'Grade separator civil work 40% done. Drainage design at km\u00a014.5 submitted. Surface milling complete on first 8\u00a0km.',
                progress: 35, photos: [3],
                citizenApproval: { status: 'approved', comment: 'Overall work appears on track. Some dust issues noted near km\u00a08.', by: 'Citizen Review Panel', date: '2025-12-22' },
                govtApproval:    { status: 'revision', comment: 'Water drainage design needs review at km\u00a014.5. Re-submit with corrected drawing.', by: 'Rajesh Kumar, IAS', date: '2025-12-20' }
            },
            {
                id: 'UPD-005-2', date: '2026-01-28', submittedBy: 'KMC Constructions Ltd.',
                description: 'Revised drainage design at km\u00a014.5 implemented. Grade separator at Silk Board 45% complete. Surface milling done on 12\u00a0km stretch.',
                progress: 45, photos: [3, 5],
                citizenApproval: { status: 'approved', comment: 'Drainage correction visible and effective. Good recovery seen.', by: 'Citizen Review Panel', date: '2026-01-30' },
                govtApproval:    { status: 'approved', comment: 'Revised drainage plan accepted. Good recovery by contractor team.', by: 'Rajesh Kumar, IAS', date: '2026-01-28' }
            },
            {
                id: 'UPD-005-3', date: '2026-03-05', submittedBy: 'KMC Constructions Ltd.',
                description: 'Grade separator at Silk Board junction 60% complete. Temporary traffic diversions in place. Night-time concrete pouring ongoing for flyover deck. All drainage corrections at km\u00a014.5 verified complete.',
                progress: 55, photos: [3, 4, 5],
                citizenApproval: { status: 'pending', comment: '', by: '', date: '' },
                govtApproval:    { status: 'pending', comment: '', by: '', date: '' }
            }
        ]
    },
    {
        id: 'PRJ-2024-006', name: 'Kolkata Salt Lake Elevated Corridor',
        contractor: 'Simplex Infrastructures Ltd.', state: 'West Bengal', district: 'North 24 Parganas',
        category: 'Bridge', progress: 30, status: 'active',
        lat: 22.5726, lng: 88.3639, budget: '\u20B967 Cr', deadline: '2027-06-30', startDate: '2025-03-01',
        description: '2.4 km elevated corridor at Salt Lake IT hub intersection to decongest peak-hour traffic. 6-lane design with dedicated lane for emergency vehicles.',
        updates: []
    },
    {
        id: 'PRJ-2024-007', name: 'Rajasthan Border Solar Micro-grid',
        contractor: 'Adani Green Energy Ltd.', state: 'Rajasthan', district: 'Jaisalmer',
        category: 'Power', progress: 100, status: 'completed',
        lat: 26.9124, lng: 70.9021, budget: '\u20B989.5 Cr', deadline: '2025-12-31', startDate: '2024-02-01',
        description: '500 MW solar farm with micro-grid connectivity to 45 border villages in Jaisalmer district. Includes battery storage and 24x7 monitoring centre.',
        updates: [
            {
                id: 'UPD-007-1', date: '2025-08-14', submittedBy: 'Adani Green Energy Ltd.',
                description: '280 MW of solar panels installed and tested. Battery storage units for 22 villages commissioned. Monitoring centre infrastructure operational. Grid integration at 18 villages complete.',
                progress: 60, photos: [4, 7],
                citizenApproval: { status: 'approved', comment: '18 villages now have evening electricity for the first time. Community sentiment very positive.', by: 'Citizen Review Panel', date: '2025-08-16' },
                govtApproval:    { status: 'approved', comment: 'Mid-project site inspection passed. Panel installation quality verified.', by: 'Rajesh Kumar, IAS', date: '2025-08-14' }
            },
            {
                id: 'UPD-007-2', date: '2025-12-28', submittedBy: 'Adani Green Energy Ltd.',
                description: 'All 500 MW panels installed and commissioned. Grid integration to all 45 villages complete. 24x7 monitoring centre fully operational. Final load testing and safety checks passed.',
                progress: 100, photos: [4, 7, 3],
                citizenApproval: { status: 'approved', comment: 'All 45 villages now have 24x7 power. Life quality transformation is remarkable.', by: 'Citizen Review Panel', date: '2025-12-29' },
                govtApproval:    { status: 'approved', comment: 'All panels commissioned. Grid integration tests passed. Villages now have 24x7 power.', by: 'Rajesh Kumar, IAS', date: '2025-12-28' }
            }
        ]
    },
    {
        id: 'PRJ-2024-008', name: 'Gujarat Coastal Economic Corridor',
        contractor: 'IRB Infrastructure Developers', state: 'Gujarat', district: 'Surat',
        category: 'Coastal', progress: 22, status: 'active',
        lat: 21.1702, lng: 72.8311, budget: '\u20B9425 Cr', deadline: '2028-03-31', startDate: '2025-07-01',
        description: '48 km coastal road from Surat to Daman with sea-view infrastructure, port connectivity, and designated logistics zones for MSME units.',
        updates: []
    },
    {
        id: 'PRJ-2024-009', name: 'Hyderabad IT Corridor Smart Infra Phase III',
        contractor: 'Nagarjuna Construction Co.', state: 'Telangana', district: 'Hyderabad',
        category: 'Smart City', progress: 48, status: 'pending_approval',
        lat: 17.3850, lng: 78.4867, budget: '\u20B9112 Cr', deadline: '2026-12-31', startDate: '2024-10-01',
        description: 'Smart infrastructure upgrade on ORR corridor: 120 km fiber optic network, adaptive traffic signals at 48 junctions, 200 EV charging stations, and AI surveillance grid.',
        updates: [
            {
                id: 'UPD-009-1', date: '2026-01-10', submittedBy: 'Nagarjuna Construction Co.',
                description: 'First 5\u00a0km smart signal deployment complete with AI-adaptive controllers. Fiber optic laying done on initial 8\u00a0km. EV charging station civil work started at 12 locations.',
                progress: 38, photos: [6, 0],
                citizenApproval: { status: 'approved', comment: 'Traffic signal improvement clearly noticeable. Congestion reduced during peak hours.', by: 'Citizen Review Panel', date: '2026-01-12' },
                govtApproval:    { status: 'approved', comment: 'First 5\u00a0km smart signal deployment verified. Response times improved by 34%.', by: 'Rajesh Kumar, IAS', date: '2026-01-10' }
            },
            {
                id: 'UPD-009-2', date: '2026-03-03', submittedBy: 'Nagarjuna Construction Co.',
                description: 'Fiber optic cable laying complete on 18\u00a0km stretch. Smart signal controllers installed at 24 junctions. EV charging station civil work 40% done. Surveillance poles erected at 60 locations.',
                progress: 51, photos: [6, 7, 0, 1],
                citizenApproval: { status: 'pending', comment: '', by: '', date: '' },
                govtApproval:    { status: 'pending', comment: '', by: '', date: '' }
            }
        ]
    },
    {
        id: 'PRJ-2024-010', name: 'MP NH-86 Complete Reconstruction',
        contractor: 'Dilip Buildcon Ltd.', state: 'Madhya Pradesh', district: 'Bhopal',
        category: 'Road', progress: 55, status: 'active',
        lat: 23.2599, lng: 77.4126, budget: '\u20B978 Cr', deadline: '2026-10-31', startDate: '2025-02-01',
        description: 'Complete reconstruction of 65 km NH-86 stretch with new bituminous surface, underground drainage, crash barriers, cat-eyes, and roadside amenities every 15 km.',
        updates: [
            {
                id: 'UPD-010-1', date: '2025-11-15', submittedBy: 'Dilip Buildcon Ltd.',
                description: 'First 25\u00a0km completely reconstructed: sub-base, base course and bituminous layers all complete. Crash barriers installed for 22\u00a0km. Three amenity stops constructed. Underground drainage at 8 of 12 locations done.',
                progress: 45, photos: [0, 5, 3],
                citizenApproval: { status: 'approved', comment: 'Road quality on completed stretch is excellent. Night visibility greatly improved with cat-eyes.', by: 'Citizen Review Panel', date: '2025-11-17' },
                govtApproval:    { status: 'approved', comment: 'First 25 km completed to specification. Excellent surface finish quality.', by: 'Rajesh Kumar, IAS', date: '2025-11-15' }
            }
        ]
    },
    {
        id: 'PRJ-2024-011', name: 'Chandigarh Smart City Utility Corridor',
        contractor: 'Sterlite Power Grid Ventures', state: 'Punjab', district: 'Chandigarh',
        category: 'Smart City', progress: 35, status: 'rejected',
        lat: 30.7333, lng: 76.7794, budget: '\u20B934.5 Cr', deadline: '2026-08-31', startDate: '2025-05-01',
        description: 'Underground utility corridor for power, telecom, and water lines with IoT monitoring across Sector 17-22. Includes smart metering and fault-detection sensors.',
        updates: [
            {
                id: 'UPD-011-1', date: '2026-02-14', submittedBy: 'Sterlite Power Grid Ventures',
                description: 'Underground corridor excavation complete in Sectors 17, 18, and 19. Conduit laying 70% done in Sector 17\u201318. Sector 19 block completed up to finishing stage with concrete casting done.',
                progress: 35, photos: [1, 6],
                citizenApproval: { status: 'approved', comment: 'Minimal disruption noticed. Site cleanliness maintained well in Sectors 17\u201318.', by: 'Citizen Review Panel', date: '2026-02-15' },
                govtApproval:    { status: 'rejected', comment: 'Work quality at Sector 19 block does not meet IS 1200 standard. Mandatory third-party re-inspection required before next update submission.', by: 'Rajesh Kumar, IAS', date: '2026-02-14' }
            }
        ]
    },
    {
        id: 'PRJ-2024-012', name: 'Pune Mula-Mutha River Front Development',
        contractor: 'L&T Construction', state: 'Maharashtra', district: 'Pune',
        category: 'Building', progress: 88, status: 'approved',
        lat: 18.5204, lng: 73.8567, budget: '\u20B9198 Cr', deadline: '2026-05-31', startDate: '2023-10-01',
        description: 'Beautification and flood control along 44 km Mula-Mutha riverfront: walkways, parks, 6 amphitheatres, retention walls, cycling tracks and heritage lighting.',
        updates: [
            {
                id: 'UPD-012-1', date: '2025-09-12', submittedBy: 'L&T Construction',
                description: 'North bank retention wall (8.2\u00a0km) complete and structurally verified. Walkway paving on 6\u00a0km done. Heritage lighting poles erected for 3\u00a0km. Park landscaping at 2 of 6 amphitheatre zones complete.',
                progress: 70, photos: [0, 7],
                citizenApproval: { status: 'approved', comment: 'Beautiful transformation of the riverfront. Citizens enjoying the evening walkways.', by: 'Citizen Review Panel', date: '2025-09-14' },
                govtApproval:    { status: 'approved', comment: 'Retention wall structural report reviewed. All parameters satisfactory.', by: 'Rajesh Kumar, IAS', date: '2025-09-12' }
            },
            {
                id: 'UPD-012-2', date: '2026-03-01', submittedBy: 'L&T Construction',
                description: 'North bank Phase A fully completed \u2014 all 6 amphitheatres ready, cycling track (12\u00a0km) operational, heritage lighting functional. South bank is 60% complete.',
                progress: 88, photos: [0, 4, 7],
                citizenApproval: { status: 'approved', comment: 'North bank transformation is outstanding. Thousands of residents using the space daily.', by: 'Citizen Review Panel', date: '2026-03-02' },
                govtApproval:    { status: 'approved', comment: 'North bank Phase A fully completed. Quality of landscaping and lighting is excellent. Appreciated.', by: 'Rajesh Kumar, IAS', date: '2026-03-01' }
            }
        ]
    }
];

var _plMap = null;
var _plMarkers = [];
var filteredProjects = ALL_PROJECTS.slice();
var selectedProjectId = null;
var currentStatusFilter = 'all';
var _plPendingAction = null;
var uploadedPhotos = [];
var uploadingForProject = null;
var updateCounter = 0;
var _newProjMap = null;
var _newProjMarker = null;

function initProjectsMap() {
    var jur = window.OFFICER_JURISDICTION || {};
    var center = jur.mapCenter || { lat: 22.5, lng: 80.0 };
    var zoom   = jur.mapZoom   || 5;
    var plMapOpts = {
        center: center,
        zoom: zoom,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true
    };
    if (jur.mapBounds) {
        plMapOpts.restriction = { latLngBounds: jur.mapBounds, strictBounds: true };
        plMapOpts.minZoom = Math.max(zoom - 2, 6);
    }
    _plMap = new google.maps.Map(document.getElementById('projectsMap'), plMapOpts);
    plRenderMapMarkers();
}

function getMarkerColor(status) {
    var colors = { active: '#28a745', pending_approval: '#fd7e14', approved: '#007bff', completed: '#6c757d', rejected: '#dc3545' };
    return colors[status] || '#003366';
}

function getMarkerSVG(color) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="38" viewBox="0 0 30 38">' +
              '<path d="M15 0C6.716 0 0 6.716 0 15C0 23 15 38 15 38C15 38 30 23 30 15C30 6.716 23.284 0 15 0Z" fill="' + color + '"/>' +
              '<circle cx="15" cy="15" r="6" fill="white" opacity="0.9"/>' +
              '</svg>';
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function plRenderMapMarkers() {
    _plMarkers.forEach(function(m) { m.setMap(null); });
    _plMarkers = [];
    filteredProjects.forEach(function(p) {
        var marker = new google.maps.Marker({
            position: { lat: p.lat, lng: p.lng },
            map: _plMap,
            title: p.name,
            icon: {
                url: getMarkerSVG(getMarkerColor(p.status)),
                scaledSize: new google.maps.Size(30, 38)
            }
        });
        var infoContent = '<div style="padding:8px;min-width:190px;font-family:Segoe UI,sans-serif;">' +
            '<strong style="color:#003366;font-size:13px;">' + p.name + '</strong><br>' +
            '<span style="font-size:11px;color:#666;">' + p.district + ', ' + p.state + '</span><br>' +
            '<span style="font-size:11px;color:#666;">Progress: <strong>' + p.progress + '%</strong></span>' +
            '</div>';
        var infoWindow = new google.maps.InfoWindow({ content: infoContent });
        marker.addListener('click', function() {
            infoWindow.open(_plMap, marker);
            selectProject(p.id);
        });
        _plMarkers.push(marker);
    });
}

function plChangeMapType(val) {
    if (_plMap) _plMap.setMapTypeId(val);
}

function setStatusFilter(btn, status) {
    currentStatusFilter = status;
    document.querySelectorAll('.status-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    plApplyFilters();
}

function plApplyFilters() {
    var search   = (document.getElementById('plSearch').value || '').toLowerCase();
    var category = document.getElementById('plCategoryFilter').value;
    var state    = document.getElementById('plStateFilter').value;
    var minProg  = parseInt(document.getElementById('plProgressFilter').value) || 0;

    var jur     = window.OFFICER_JURISDICTION || {};
    var jurRole = jur.role || 'national';
    var jurState = jur.jurisdiction || null;
    var jurDist  = jur.district || null;

    filteredProjects = ALL_PROJECTS.filter(function(p) {
        if (jurRole === 'state'    && p.state    !== jurState) return false;
        if (jurRole === 'district' && p.district !== jurDist)  return false;

        if (currentStatusFilter !== 'all' && p.status !== currentStatusFilter) return false;
        if (category && p.category !== category) return false;
        if (state && p.state !== state) return false;
        if (p.progress < minProg) return false;
        if (search && p.id.toLowerCase().indexOf(search) === -1 && p.name.toLowerCase().indexOf(search) === -1) return false;
        return true;
    });
    renderProjectList();
    if (_plMap) plRenderMapMarkers();
}

function plResetFilters() {
    document.getElementById('plSearch').value = '';
    document.getElementById('plCategoryFilter').value = '';
    document.getElementById('plStateFilter').value = '';
    document.getElementById('plProgressFilter').value = 0;
    document.getElementById('plProgressVal').textContent = '0%';
    currentStatusFilter = 'all';
    document.querySelectorAll('.status-btn').forEach(function(b) { b.classList.remove('active'); });
    document.querySelector('.status-btn[data-status="all"]').classList.add('active');
    plApplyFilters();
}

function renderProjectList() {
    var container = document.getElementById('plProjectsContainer');
    document.getElementById('plCount').textContent = filteredProjects.length + ' / ' + ALL_PROJECTS.length;
    if (!filteredProjects.length) {
        container.innerHTML = '<div class="pl-empty">No projects match the current filters.</div>';
        return;
    }
    container.innerHTML = filteredProjects.map(function(p) {
        var updates = p.updates || [];
        var pendingCount = updates.filter(function(u) {
            return u.citizenApproval.status === 'pending' || u.govtApproval.status === 'pending';
        }).length;
        var footer = '';
        if (pendingCount > 0) {
            footer += '<div class="plc-footer-row"><span class="plc-pending-badge">&#9203; ' + pendingCount + ' update' + (pendingCount > 1 ? 's' : '') + ' awaiting approval</span>';
        } else {
            footer += '<div class="plc-footer-row">';
        }
        if (updates.length > 0) {
            footer += '<span class="plc-upd-count">&#128203; ' + updates.length + ' update' + (updates.length > 1 ? 's' : '') + '</span>';
        }
        footer += '</div>';
        return '<div class="pl-project-card' + (p.id === selectedProjectId ? ' active' : '') + '" onclick="selectProject(\'' + p.id + '\')">' +
            '<div class="plc-header"><span class="plc-id">' + p.id + '</span><span class="plc-badge badge-' + p.status.replace('_', '-') + '">' + getStatusLabel(p.status) + '</span></div>' +
            '<div class="plc-name">' + p.name + '</div>' +
            '<div class="plc-meta"><span class="plc-contractor">&#128064; ' + p.contractor + '</span></div>' +
            '<div class="plc-meta"><span>&#128205; ' + p.district + ', ' + p.state + '</span><span class="plc-category">&#127744; ' + p.category + '</span></div>' +
            '<div class="plc-progress-row"><div class="plc-progress-bar"><div class="plc-progress-fill" style="width:' + p.progress + '%;background:' + getProgressColor(p.progress) + ';"></div></div><span class="plc-progress-val">' + p.progress + '%</span></div>' +
            footer +
            '</div>';
    }).join('');
}

function getStatusLabel(status) {
    var labels = { active: 'Active', pending_approval: 'Pending Review', approved: 'Approved', completed: 'Completed', rejected: 'Rejected' };
    return labels[status] || status;
}

function getProgressColor(p) {
    if (p >= 90) return '#28a745';
    if (p >= 70) return '#17a2b8';
    if (p >= 40) return '#007bff';
    return '#fd7e14';
}

function selectProject(id) {
    selectedProjectId = id;
    var project = ALL_PROJECTS.find(function(p) { return p.id === id; });
    if (!project) return;

    document.querySelectorAll('.pl-project-card').forEach(function(c) { c.classList.remove('active'); });
    var cards = document.querySelectorAll('.pl-project-card');
    cards.forEach(function(c) { if (c.getAttribute('onclick') && c.getAttribute('onclick').indexOf(id) > -1) c.classList.add('active'); });

    document.getElementById('plDetailPlaceholder').style.display = 'none';
    var el = document.getElementById('plProjectDetail');
    el.style.display = 'block';
    el.innerHTML = buildProjectDetail(project);

    if (_plMap) { _plMap.panTo({ lat: project.lat, lng: project.lng }); _plMap.setZoom(9); }
}

function buildProjectDetail(p) {
    var html = '';
    var updates = p.updates || [];

    html += '<div class="pd-header">';
    html += '<div class="pd-title-row">';
    html += '<div><div class="pd-id">' + p.id + ' &nbsp;&bull;&nbsp; ' + p.category + '</div><h3 class="pd-name">' + p.name + '</h3></div>';
    html += '<span class="plc-badge pd-status-badge badge-' + p.status.replace('_','-') + '">' + getStatusLabel(p.status) + '</span>';
    html += '</div></div>';

    html += '<div class="pd-info-grid">';
    html += '<div class="pd-info-item"><span class="pd-info-label">Contractor</span><span class="pd-info-val">' + p.contractor + '</span></div>';
    html += '<div class="pd-info-item"><span class="pd-info-label">Location</span><span class="pd-info-val">&#128205; ' + p.district + ', ' + p.state + '</span></div>';
    html += '<div class="pd-info-item"><span class="pd-info-label">Total Budget</span><span class="pd-info-val">' + p.budget + '</span></div>';
    html += '<div class="pd-info-item"><span class="pd-info-label">Deadline</span><span class="pd-info-val">&#128197; ' + p.deadline + '</span></div>';
    html += '<div class="pd-info-item pd-info-full"><span class="pd-info-label">Scope of Work</span><span class="pd-info-val">' + p.description + '</span></div>';
    html += '</div>';

    html += '<div class="pd-progress-section">';
    html += '<div class="pd-progress-label"><span>Overall Completion</span><strong>' + p.progress + '%</strong></div>';
    html += '<div class="pd-progress-track"><div class="pd-progress-fill" style="width:' + p.progress + '%;background:' + getProgressColor(p.progress) + ';"></div></div>';
    html += '<div class="pd-dates"><span>Started: ' + p.startDate + '</span><span>Due: ' + p.deadline + '</span></div>';
    html += '</div>';

    if (p.status === 'active' || p.status === 'rejected') {
        html += '<div class="pd-contractor-section">';
        html += '<h4>&#128247; ' + (p.status === 'rejected' ? 'Resubmit' : 'Submit') + ' Work Update</h4>';
        html += '<p class="pd-sub-label">Upload site photos and progress report for dual review by Citizen Panel &amp; Govt Official.</p>';
        html += '<button class="pd-btn pd-upload-btn" onclick="openUploadModal(\'' + p.id + '\')">&#128247; ' + (p.status === 'rejected' ? 'Resubmit Work Update' : 'Upload Work Update') + '</button>';
        html += '</div>';
    }

    html += '<div class="pd-updates-section">';
    html += '<div class="pd-updates-header"><h4>&#128203; Contractor Updates</h4>';
    if (updates.length > 0) {
        html += '<span class="pd-upd-count">' + updates.length + ' update' + (updates.length > 1 ? 's' : '') + '</span>';
    }
    html += '</div>';

    if (updates.length === 0) {
        html += '<div class="pd-no-updates">No updates submitted yet. The contractor will upload work progress reports here.</div>';
    } else {
        updates.slice().reverse().forEach(function(u, revIdx) {
            var origIdx = updates.length - 1 - revIdx;
            var cSt = u.citizenApproval.status;
            var gSt = u.govtApproval.status;
            var bothApproved = cSt === 'approved' && gSt === 'approved';
            var anyRejected  = cSt === 'rejected'  || gSt === 'rejected';
            var hasRevision  = gSt === 'revision';
            var cardCls = 'pd-update-card';
            if (bothApproved)   cardCls += ' upd-fully-approved';
            else if (anyRejected)   cardCls += ' upd-rejected-card';
            else if (hasRevision)   cardCls += ' upd-revision-card';
            else if (cSt === 'pending' || gSt === 'pending') cardCls += ' upd-needs-review';

            html += '<div class="' + cardCls + '">';
            html += '<div class="upd-card-header">';
            html += '<span class="upd-num">Update #' + (origIdx + 1) + '</span>';
            html += '<div class="upd-card-meta">';
            html += '<span class="upd-date">&#128197; ' + u.date + '</span>';
            html += '<span class="upd-by">&#128100; ' + u.submittedBy + '</span>';
            html += '<span class="upd-progress-pill">' + u.progress + '%</span>';
            html += '</div></div>';

            html += '<p class="upd-desc">' + u.description + '</p>';

            if (u.photos && u.photos.length > 0) {
                html += '<div class="pd-photos-grid">';
                u.photos.forEach(function(idx) {
                    html += '<div class="pd-photo" style="background:' + PHOTO_GRADIENTS[idx % PHOTO_GRADIENTS.length] + ';"><span class="pd-photo-label">' + PHOTO_LABELS[idx % PHOTO_LABELS.length] + '</span></div>';
                });
                html += '</div>';
            }

            html += '<div class="upd-dual-approval">';

            html += '<div class="upd-approval-box upd-aprv-citizen">';
            html += '<div class="upd-aprv-title">&#128101; Citizen Review Panel</div>';
            if (cSt === 'approved') {
                html += '<span class="aprv-badge aprv-ok">&#10003; Approved</span>';
                if (u.citizenApproval.comment) html += '<div class="aprv-comment">' + u.citizenApproval.comment + '</div>';
                if (u.citizenApproval.date) html += '<div class="aprv-comment" style="color:#888;font-size:11px;">' + u.citizenApproval.by + ' &bull; ' + u.citizenApproval.date + '</div>';
            } else if (cSt === 'rejected') {
                html += '<span class="aprv-badge aprv-no">&#10007; Rejected</span>';
                if (u.citizenApproval.comment) html += '<div class="aprv-comment">' + u.citizenApproval.comment + '</div>';
            } else {
                html += '<span class="aprv-badge aprv-wait">&#9203; Pending</span>';
                if (p.status !== 'rejected') {
                    html += '<div class="upd-aprv-btns">';
                    html += '<button class="pd-btn pd-approve" onclick="openApprovalModal(\'' + p.id + '\',\'' + u.id + '\',\'citizen\',\'approve\')">&#10003; Approve</button>';
                    html += '<button class="pd-btn pd-reject"  onclick="openApprovalModal(\'' + p.id + '\',\'' + u.id + '\',\'citizen\',\'reject\')">&#10007; Reject</button>';
                    html += '</div>';
                }
            }
            html += '</div>';

            html += '<div class="upd-approval-box upd-aprv-govt">';
            html += '<div class="upd-aprv-title">&#127963; Govt Official</div>';
            if (gSt === 'approved') {
                html += '<span class="aprv-badge aprv-ok">&#10003; Approved</span>';
                if (u.govtApproval.comment) html += '<div class="aprv-comment">' + u.govtApproval.comment + '</div>';
                if (u.govtApproval.date) html += '<div class="aprv-comment" style="color:#888;font-size:11px;">' + u.govtApproval.by + ' &bull; ' + u.govtApproval.date + '</div>';
            } else if (gSt === 'revision') {
                html += '<span class="aprv-badge aprv-rev">&#8635; Revision Requested</span>';
                if (u.govtApproval.comment) html += '<div class="aprv-comment">' + u.govtApproval.comment + '</div>';
            } else if (gSt === 'rejected') {
                html += '<span class="aprv-badge aprv-no">&#10007; Rejected</span>';
                if (u.govtApproval.comment) html += '<div class="aprv-comment">' + u.govtApproval.comment + '</div>';
            } else {
                html += '<span class="aprv-badge aprv-wait">&#9203; Pending</span>';
                if (p.status !== 'rejected') {
                    html += '<div class="upd-aprv-btns">';
                    html += '<button class="pd-btn pd-approve"  onclick="openApprovalModal(\'' + p.id + '\',\'' + u.id + '\',\'govt\',\'approve\')">&#10003; Approve</button>';
                    html += '<button class="pd-btn pd-revision" onclick="openApprovalModal(\'' + p.id + '\',\'' + u.id + '\',\'govt\',\'revision\')">&#8635; Revision</button>';
                    html += '<button class="pd-btn pd-reject"   onclick="openApprovalModal(\'' + p.id + '\',\'' + u.id + '\',\'govt\',\'reject\')">&#10007; Reject</button>';
                    html += '</div>';
                }
            }
            html += '</div>';

            html += '</div>';
            html += '</div>';
        });
    }

    html += '</div>';
    return html;
}

function openApprovalModal(projectId, updateId, approverType, action) {
    var labels = {
        citizen: { approve: 'Citizen Panel â€” Approve Update', reject: 'Citizen Panel â€” Reject Update' },
        govt:    { approve: 'Govt Official â€” Approve Update', revision: 'Govt Official â€” Request Revision', reject: 'Govt Official â€” Reject Update' }
    };
    var descs = {
        approve:  'You are approving this contractor update on behalf of the ' + (approverType === 'citizen' ? 'Citizen Review Panel' : 'Government Official') + '. Progress will advance once both parties approve.',
        revision: 'You are requesting the contractor to revise their submission. Please provide specific remarks below.',
        reject:   'You are rejecting this update. The contractor must address the issues raised before resubmitting.'
    };
    var btnCls = { approve: 'confirm-approve', revision: 'confirm-revision', reject: 'confirm-reject' };
    var btnTxt = { approve: 'Confirm Approval', revision: 'Send Revision Request', reject: 'Confirm Rejection' };
    var reviewerCls = { citizen: 'pl-modal-reviewer-citizen', govt: 'pl-modal-reviewer-govt' };
    var reviewerLabel = { citizen: '&#128101; Reviewing as: Citizen Review Panel', govt: '&#127963; Reviewing as: Government Official (Rajesh Kumar, IAS)' };

    _plPendingAction = { projectId: projectId, updateId: updateId, approverType: approverType, action: action };
    document.getElementById('plModalTitle').textContent = labels[approverType][action];
    document.getElementById('plModalDesc').textContent  = descs[action];
    var rev = document.getElementById('plModalReviewer');
    rev.className = 'pl-modal-reviewer ' + reviewerCls[approverType];
    rev.innerHTML = reviewerLabel[approverType];
    document.getElementById('plModalComment').value = '';
    var btn = document.getElementById('plModalConfirmBtn');
    btn.className = 'pl-modal-confirm ' + btnCls[action];
    btn.textContent = btnTxt[action];
    document.getElementById('plApprovalModal').style.display = 'flex';
}

function closePLModal() {
    document.getElementById('plApprovalModal').style.display = 'none';
    _plPendingAction = null;
}

function confirmApproval() {
    if (!_plPendingAction) return;
    var comment      = document.getElementById('plModalComment').value.trim() || 'Review completed.';
    var projectId    = _plPendingAction.projectId;
    var updateId     = _plPendingAction.updateId;
    var approverType = _plPendingAction.approverType;
    var action       = _plPendingAction.action;
    var project      = ALL_PROJECTS.find(function(p) { return p.id === projectId; });

    if (project) {
        var update = (project.updates || []).find(function(u) { return u.id === updateId; });
        if (update) {
            var today = new Date().toISOString().slice(0, 10);
            if (approverType === 'citizen') {
                update.citizenApproval = { status: action === 'approve' ? 'approved' : 'rejected', comment: comment, by: 'Citizen Review Panel', date: today };
            } else {
                update.govtApproval = { status: action, comment: comment, by: 'Rajesh Kumar, IAS', date: today };
            }
            var cSt = update.citizenApproval.status;
            var gSt = update.govtApproval.status;
            if (cSt === 'approved' && gSt === 'approved') {
                if (update.progress > project.progress) project.progress = update.progress;
                project.status = project.progress >= 100 ? 'completed' : 'approved';
            } else if (cSt === 'rejected' || gSt === 'rejected') {
                project.status = 'rejected';
            } else if (gSt === 'revision') {
                project.status = 'active';
            } else {
                project.status = 'pending_approval';
            }
        }
    }

    closePLModal();
    var toastMsgs = {
        approve:  approverType === 'citizen' ? 'Citizen panel approved!' : 'Govt official approved!',
        revision: 'Revision requested. Contractor notified.',
        reject:   'Update rejected. Contractor notified.'
    };
    showPLToast(toastMsgs[action] || 'Review submitted.');
    plApplyFilters();
    if (selectedProjectId === projectId) selectProject(projectId);
}

function openUploadModal(projectId) {
    uploadingForProject = projectId;
    uploadedPhotos = [];
    document.getElementById('plUploadDesc').value = '';
    document.getElementById('plUploadProgress').value = 50;
    document.getElementById('plUploadProgressVal').textContent = '50%';
    document.getElementById('plUploadPreview').innerHTML = '';
    document.getElementById('plUploadModal').style.display = 'flex';
}

function closePLUploadModal() {
    document.getElementById('plUploadModal').style.display = 'none';
    uploadingForProject = null;
    uploadedPhotos = [];
}

function simulatePhotoAdd(type) {
    var labels = { site: 'Site Overview', foundation: 'Foundation Work', material: 'Material Stock', progress: 'Progress Shot' };
    var gradIdx = uploadedPhotos.length % PHOTO_GRADIENTS.length;
    uploadedPhotos.push({ gradIdx: gradIdx, label: labels[type] });
    var el = document.createElement('div');
    el.className = 'upload-photo-thumb';
    el.style.background = PHOTO_GRADIENTS[gradIdx];
    el.textContent = labels[type];
    document.getElementById('plUploadPreview').appendChild(el);
}

function submitWorkUpdate() {
    var desc = (document.getElementById('plUploadDesc').value || '').trim();
    if (!desc) { showPLToast('Please add a description of the work done.'); return; }
    var project = ALL_PROJECTS.find(function(p) { return p.id === uploadingForProject; });
    if (!project) return;
    if (!project.updates) project.updates = [];
    updateCounter++;
    var num = project.updates.length + 1;
    var shortId = project.id.replace('PRJ-2024-', '');
    project.updates.push({
        id: 'UPD-' + shortId + '-' + num,
        date: new Date().toISOString().slice(0, 10),
        submittedBy: project.contractor,
        description: desc,
        progress: parseInt(document.getElementById('plUploadProgress').value),
        photos: uploadedPhotos.map(function(ph) { return ph.gradIdx; }),
        citizenApproval: { status: 'pending', comment: '', by: '', date: '' },
        govtApproval:    { status: 'pending', comment: '', by: '', date: '' }
    });
    project.status = 'pending_approval';
    closePLUploadModal();
    showPLToast('Work update submitted! Awaiting dual review by Citizen Panel & Govt Official.');
    plApplyFilters();
    selectProject(uploadingForProject);
}

function showPLToast(msg) {
    var t = document.getElementById('plToast');
    t.textContent = msg;
    t.classList.add('pl-toast-show');
    setTimeout(function() { t.classList.remove('pl-toast-show'); }, 3500);
}

function togglePLTheme() {
    document.body.classList.toggle('dark-theme');
}

function _plInit() {
    var states = ALL_PROJECTS.map(function(p) { return p.state; })
        .filter(function(s, i, arr) { return arr.indexOf(s) === i; }).sort();
    var sel = document.getElementById('plStateFilter');
    if (sel && sel.options.length <= 1) {
        states.forEach(function(s) {
            var opt = document.createElement('option');
            opt.value = s; opt.textContent = s;
            sel.appendChild(opt);
        });
    }

    var confirmBtn = document.getElementById('plModalConfirmBtn');
    if (confirmBtn && !confirmBtn._plWired) {
        confirmBtn.addEventListener('click', confirmApproval);
        confirmBtn._plWired = true;
    }

    var apModal = document.getElementById('plApprovalModal');
    if (apModal && !apModal._plWired) {
        apModal.addEventListener('click', function(e) { if (e.target === this) closePLModal(); });
        apModal._plWired = true;
    }
    var upModal = document.getElementById('plUploadModal');
    if (upModal && !upModal._plWired) {
        upModal.addEventListener('click', function(e) { if (e.target === this) closePLUploadModal(); });
        upModal._plWired = true;
    }
    var newProjModal = document.getElementById('plNewProjectModal');
    if (newProjModal && !newProjModal._plWired) {
        newProjModal.addEventListener('click', function(e) { if (e.target === this) closeNewProjectModal(); });
        newProjModal._plWired = true;
    }

    populateStateDropdown();

    loadProjectsFromFirestore();

    plApplyFilters();
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _plInit);
} else {
    _plInit();
}

function openNewProjectModal() {
    document.getElementById('plNewProjectModal').style.display = 'flex';
    setTimeout(initNewProjectMap, 500);
}

function initNewProjectMap() {
    if (_newProjMap) return;
    
    var mapCanvas = document.getElementById('newProjMapCanvas');
    if (!mapCanvas) return;
    
    var center = { lat: 22.5, lng: 80.0 };
    var mapOpts = {
        center: center,
        zoom: 5,
        mapTypeId: 'roadmap',
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        styles: []
    };
    
    _newProjMap = new google.maps.Map(mapCanvas, mapOpts);
    
    _newProjMap.addListener('click', function(e) {
        var lat = e.latLng.lat();
        var lng = e.latLng.lng();
        
        document.getElementById('newProjLat').value = lat.toFixed(4);
        document.getElementById('newProjLng').value = lng.toFixed(4);
        
        if (_newProjMarker) {
            _newProjMarker.setPosition(e.latLng);
        } else {
            _newProjMarker = new google.maps.Marker({
                position: e.latLng,
                map: _newProjMap,
                icon: {
                    url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                    scaledSize: new google.maps.Size(40, 40)
                },
                title: 'Project Location',
                animation: google.maps.Animation.DROP
            });
        }
    });
}

function updateMapMarkerFromInputs() {
    var lat = parseFloat(document.getElementById('newProjLat').value);
    var lng = parseFloat(document.getElementById('newProjLng').value);
    
    if (!isNaN(lat) && !isNaN(lng) && _newProjMap) {
        var position = new google.maps.LatLng(lat, lng);
        
        if (_newProjMarker) {
            _newProjMarker.setPosition(position);
        } else {
            _newProjMarker = new google.maps.Marker({
                position: position,
                map: _newProjMap,
                icon: {
                    url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                    scaledSize: new google.maps.Size(40, 40)
                },
                title: 'Project Location'
            });
        }
        
        _newProjMap.panTo(position);
        if (_newProjMap.getZoom() < 10) {
            _newProjMap.setZoom(10);
        }
    }
}

function closeNewProjectModal() {
    document.getElementById('plNewProjectModal').style.display = 'none';
    document.getElementById('newProjName').value = '';
    document.getElementById('newProjDesc').value = '';
    document.getElementById('newProjCategory').value = '';
    document.getElementById('newProjScope').value = '';
    document.getElementById('newProjState').value = '';
    document.getElementById('newProjDistrict').value = '';
    document.getElementById('newProjBudget').value = '';
    document.getElementById('newProjDeadline').value = '';
    document.getElementById('newProjContractor').value = '';
    document.getElementById('newProjLat').value = '';
    document.getElementById('newProjLng').value = '';
    document.getElementById('newProjLocationFields').style.display = 'none';
    document.getElementById('newProjDistrictWrapper').style.display = 'none';
    
    if (_newProjMarker) {
        _newProjMarker.setMap(null);
        _newProjMarker = null;
    }
}

function handleScopeChange() {
    var scope = document.getElementById('newProjScope').value;
    var locFields = document.getElementById('newProjLocationFields');
    var distWrapper = document.getElementById('newProjDistrictWrapper');
    
    if (scope === 'national') {
        locFields.style.display = 'none';
        distWrapper.style.display = 'none';
    } else if (scope === 'state') {
        locFields.style.display = 'grid';
        distWrapper.style.display = 'none';
    } else if (scope === 'district') {
        locFields.style.display = 'grid';
        distWrapper.style.display = 'block';
    }
}

function populateStateDropdown() {
    var states = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
        'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
        'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
        'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
        'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir',
        'Ladakh', 'Puducherry', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
        'Lakshadweep', 'Andaman and Nicobar Islands'
    ];
    
    var sel = document.getElementById('newProjState');
    if (sel && sel.options.length <= 1) {
        states.forEach(function(state) {
            var opt = document.createElement('option');
            opt.value = state;
            opt.textContent = state;
            sel.appendChild(opt);
        });
    }
}

async function submitNewProject() {
    var name = document.getElementById('newProjName').value.trim();
    var desc = document.getElementById('newProjDesc').value.trim();
    var category = document.getElementById('newProjCategory').value;
    var scope = document.getElementById('newProjScope').value;
    var budget = parseFloat(document.getElementById('newProjBudget').value);
    var deadline = document.getElementById('newProjDeadline').value;
    
    if (!name || !desc || !category || !scope || !budget || !deadline) {
        showPLToast('❌ Please fill all required fields');
        return;
    }
    
    var state = document.getElementById('newProjState').value;
    var district = document.getElementById('newProjDistrict').value.trim();
    
    if (scope === 'state' && !state) {
        showPLToast('❌ Please select a state for state-level project');
        return;
    }
    if (scope === 'district' && (!state || !district)) {
        showPLToast('❌ Please select state and enter district for district-level project');
        return;
    }
    
    var officerInfo = JSON.parse(localStorage.getItem('officerInfo') || '{}');
    
    var year = new Date().getFullYear();
    var randomId = Math.floor(Math.random() * 900) + 100;
    var projectId = 'PRJ-' + year + '-' + randomId;
    
    var projectData = {
        id: projectId,
        name: name,
        description: desc,
        category: category,
        scope: scope,
        state: state || null,
        district: district || null,
        budget: budget,
        deadline: deadline,
        contractor: document.getElementById('newProjContractor').value.trim() || 'To be assigned',
        lat: parseFloat(document.getElementById('newProjLat').value) || null,
        lng: parseFloat(document.getElementById('newProjLng').value) || null,
        status: 'active',
        progress: 0,
        startDate: new Date().toISOString().slice(0, 10),
        createdBy: officerInfo.name || 'Government Official',
        createdAt: Date.now(),
        updates: []
    };
    
    try {
        if (window.govFirestore && window.govFirestoreAddDoc && window.govFirestoreCollection) {
            var projectsRef = window.govFirestoreCollection(window.govFirestore, 'projects');
            await window.govFirestoreAddDoc(projectsRef, projectData);
            
            ALL_PROJECTS.push(projectData);
            
            closeNewProjectModal();
            showPLToast('✅ Project created successfully!');
            
            plApplyFilters();
        } else {
            showPLToast('❌ Firestore not available. Project not saved.');
        }
    } catch (err) {
        console.error('Error saving project:', err);
        showPLToast('❌ Error saving project: ' + err.message);
    }
}

async function loadProjectsFromFirestore() {
    if (!window.govFirestore || !window.govFirestoreCollection || !window.govFirestoreGetDocs) {
        console.log('[Projects] Firestore not available, using static data');
        return;
    }
    
    try {
        var projectsRef = window.govFirestoreCollection(window.govFirestore, 'projects');
        var q = window.govFirestoreQuery(projectsRef, window.govFirestoreOrderBy('createdAt', 'desc'));
        var snapshot = await window.govFirestoreGetDocs(q);
        
        if (!snapshot.empty) {
            var firestoreProjects = [];
            snapshot.docs.forEach(function(docSnap) {
                var p = docSnap.data();
                p.firestoreId = docSnap.id;
                firestoreProjects.push(p);
            });
            
            var staticProjectIds = ALL_PROJECTS.map(function(p) { return p.id; });
            var newFirestoreProjects = firestoreProjects.filter(function(p) {
                return staticProjectIds.indexOf(p.id) === -1;
            });
            
            ALL_PROJECTS = ALL_PROJECTS.concat(newFirestoreProjects);
            
            console.log('[Projects] ✅ Loaded ' + firestoreProjects.length + ' projects from Firestore');
            
            var states = ALL_PROJECTS.map(function(p) { return p.state; })
                .filter(function(s, i, arr) { return s && arr.indexOf(s) === i; }).sort();
            var sel = document.getElementById('plStateFilter');
            if (sel) {
                sel.innerHTML = '<option value="">All States</option>';
                states.forEach(function(s) {
                    var opt = document.createElement('option');
                    opt.value = s; opt.textContent = s;
                    sel.appendChild(opt);
                });
            }
        }
    } catch (err) {
        console.error('[Projects] Error loading from Firestore:', err);
    }
}
