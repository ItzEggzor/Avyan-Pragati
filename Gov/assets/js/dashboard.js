



var JUR_STATE_BOUNDS = {
    'Maharashtra':       { south: 15.60, north: 22.10, west: 72.60, east: 80.90 },
    'Delhi':             { south: 28.39, north: 28.89, west: 76.84, east: 77.35 },
    'Karnataka':         { south: 11.50, north: 18.50, west: 74.00, east: 78.60 },
    'Uttar Pradesh':     { south: 23.90, north: 30.40, west: 77.10, east: 84.70 },
    'Telangana':         { south: 15.80, north: 19.90, west: 77.20, east: 81.30 },
    'Gujarat':           { south: 20.10, north: 24.70, west: 68.10, east: 74.50 },
    'Rajasthan':         { south: 23.10, north: 30.20, west: 69.50, east: 78.30 },
    'Madhya Pradesh':    { south: 21.10, north: 26.90, west: 74.00, east: 82.80 },
    'Punjab':            { south: 29.50, north: 32.60, west: 73.90, east: 76.90 },
    'Tamil Nadu':        { south: 8.10,  north: 13.60, west: 76.20, east: 80.40 },
    'West Bengal':       { south: 21.50, north: 27.20, west: 85.80, east: 89.90 },
    'Assam':             { south: 24.10, north: 28.20, west: 89.70, east: 96.10 },
    'Bihar':             { south: 24.30, north: 27.50, west: 83.30, east: 88.30 },
    'Odisha':            { south: 17.80, north: 22.60, west: 81.40, east: 87.50 },
    'Jharkhand':         { south: 21.90, north: 25.30, west: 83.30, east: 87.90 },
    'Chhattisgarh':      { south: 17.80, north: 24.10, west: 80.20, east: 84.40 },
    'Andhra Pradesh':    { south: 12.60, north: 19.90, west: 76.80, east: 84.80 },
    'Kerala':            { south: 8.30,  north: 12.80, west: 74.90, east: 77.40 },
    'Haryana':           { south: 27.60, north: 30.90, west: 74.50, east: 77.60 },
    'Himachal Pradesh':  { south: 30.40, north: 33.20, west: 75.60, east: 79.00 },
    'Uttarakhand':       { south: 28.90, north: 31.50, west: 77.60, east: 81.10 },
    'Jammu and Kashmir': { south: 32.30, north: 36.70, west: 73.70, east: 79.50 },
    'Tripura':           { south: 22.90, north: 24.50, west: 91.20, east: 92.30 },
    'Meghalaya':         { south: 25.00, north: 26.10, west: 89.80, east: 92.80 },
    'Manipur':           { south: 23.80, north: 25.70, west: 93.00, east: 94.80 },
    'Nagaland':          { south: 25.20, north: 27.00, west: 93.30, east: 95.30 },
    'Mizoram':           { south: 21.90, north: 24.50, west: 92.20, east: 93.50 },
    'Arunachal Pradesh': { south: 26.60, north: 29.50, west: 91.50, east: 97.40 },
    'Sikkim':            { south: 27.10, north: 28.10, west: 88.00, east: 88.90 },
    'Goa':               { south: 14.90, north: 15.80, west: 73.70, east: 74.30 }
};

var JUR_DISTRICT_BOUNDS = {
    'Mumbai Suburban': { south: 18.90, north: 19.35, west: 72.75, east: 73.05 },
    'Mumbai City':     { south: 18.87, north: 19.10, west: 72.78, east: 72.99 },
    'New Delhi':       { south: 28.44, north: 28.75, west: 76.84, east: 77.35 },
    'Bengaluru Urban': { south: 12.76, north: 13.18, west: 77.37, east: 77.78 },
    'Hyderabad':       { south: 17.19, north: 17.60, west: 78.22, east: 78.73 },
    'Pune':            { south: 18.35, north: 18.72, west: 73.65, east: 74.05 },
    'Jaisalmer':       { south: 26.25, north: 28.15, west: 69.50, east: 71.90 },
    'Bhopal':          { south: 23.10, north: 23.45, west: 77.20, east: 77.65 },
    'Chandigarh':      { south: 30.64, north: 30.82, west: 76.68, east: 76.92 },
    'Chennai':         { south: 12.90, north: 13.25, west: 79.95, east: 80.35 },
    'Kolkata':         { south: 22.45, north: 22.70, west: 88.25, east: 88.50 },
    'Patna':           { south: 25.50, north: 25.75, west: 85.00, east: 85.30 },
    'Lucknow':         { south: 26.75, north: 27.00, west: 80.85, east: 81.15 },
    'Ahmedabad':       { south: 22.95, north: 23.20, west: 72.40, east: 72.75 },
    'Jaipur':          { south: 26.75, north: 27.05, west: 75.65, east: 76.00 },
    'Surat':           { south: 21.10, north: 21.40, west: 72.70, east: 73.10 },
    'Nagpur':          { south: 20.90, north: 21.30, west: 78.90, east: 79.30 },
    'Indore':          { south: 22.60, north: 22.85, west: 75.70, east: 76.00 },
    'Varanasi':        { south: 25.20, north: 25.45, west: 82.90, east: 83.15 },
    'Agra':            { south: 27.05, north: 27.30, west: 77.90, east: 78.15 },
    'Amritsar':        { south: 31.55, north: 31.80, west: 74.75, east: 75.05 },
    'Coimbatore':      { south: 10.85, north: 11.15, west: 76.85, east: 77.20 },
    'Kochi':           { south: 9.85,  north: 10.15, west: 76.20, east: 76.50 },
    'Visakhapatnam':   { south: 17.55, north: 17.85, west: 83.10, east: 83.45 },
    'Thane':           { south: 19.05, north: 19.35, west: 72.90, east: 73.20 }
};



const PERF_STATE_DATA = [
    { name: 'Tamil Nadu',      score: 94 },
    { name: 'Karnataka',       score: 91 },
    { name: 'Delhi',           score: 89 },
    { name: 'Maharashtra',     score: 78 },
    { name: 'Gujarat',         score: 76 },
    { name: 'West Bengal',     score: 71 },
    { name: 'Uttar Pradesh',   score: 58 },
    { name: 'Rajasthan',       score: 63 },
    { name: 'Telangana',       score: 82 },
    { name: 'Madhya Pradesh',  score: 52 }
];

const PERF_DISTRICT_DATA = {
    'Maharashtra': [
        { name: 'Mumbai City',      score: 88 }, { name: 'Mumbai Suburban', score: 85 },
        { name: 'Pune',             score: 82 }, { name: 'Nashik',          score: 71 },
        { name: 'Aurangabad',       score: 67 }, { name: 'Nagpur',          score: 74 },
        { name: 'Thane',            score: 79 }, { name: 'Solapur',         score: 55 },
        { name: 'Kolhapur',         score: 68 }, { name: 'Amravati',        score: 49 }
    ],
    'Delhi': [
        { name: 'New Delhi',         score: 91 }, { name: 'North Delhi',      score: 86 },
        { name: 'South Delhi',       score: 89 }, { name: 'East Delhi',       score: 78 },
        { name: 'West Delhi',        score: 82 }, { name: 'Central Delhi',    score: 88 },
        { name: 'North-East Delhi',  score: 72 }, { name: 'South-West Delhi', score: 76 }
    ],
    'Karnataka': [
        { name: 'Bengaluru Urban',  score: 93 }, { name: 'Bengaluru Rural', score: 77 },
        { name: 'Mysuru',           score: 85 }, { name: 'Hubballi-Dharwad',score: 71 },
        { name: 'Mangaluru',        score: 80 }, { name: 'Belagavi',         score: 63 },
        { name: 'Kalaburagi',       score: 48 }, { name: 'Vijayapura',       score: 54 },
        { name: 'Shivamogga',       score: 74 }, { name: 'Tumakuru',         score: 68 }
    ],
    'Uttar Pradesh': [
        { name: 'Lucknow',     score: 75 }, { name: 'Agra',         score: 62 },
        { name: 'Kanpur',      score: 58 }, { name: 'Varanasi',     score: 67 },
        { name: 'Mathura',     score: 70 }, { name: 'Prayagraj',    score: 55 },
        { name: 'Meerut',      score: 61 }, { name: 'Ghaziabad',    score: 73 },
        { name: 'Noida',       score: 81 }, { name: 'Gorakhpur',    score: 48 }
    ],
    'Telangana': [
        { name: 'Hyderabad',    score: 88 }, { name: 'Rangareddy',   score: 82 },
        { name: 'Medchal',      score: 79 }, { name: 'Warangal',     score: 71 },
        { name: 'Karimnagar',   score: 65 }, { name: 'Nizamabad',    score: 58 },
        { name: 'Khammam',      score: 63 }, { name: 'Nalgonda',     score: 54 }
    ],
    'Gujarat': [
        { name: 'Ahmedabad',  score: 87 }, { name: 'Surat',        score: 84 },
        { name: 'Vadodara',   score: 79 }, { name: 'Rajkot',       score: 76 },
        { name: 'Gandhinagar',score: 83 }, { name: 'Bhavnagar',    score: 68 },
        { name: 'Jamnagar',   score: 72 }, { name: 'Junagadh',     score: 61 }
    ],
    'Rajasthan': [
        { name: 'Jaipur',      score: 80 }, { name: 'Jodhpur',      score: 74 },
        { name: 'Udaipur',     score: 77 }, { name: 'Kota',         score: 69 },
        { name: 'Bikaner',     score: 62 }, { name: 'Ajmer',        score: 66 },
        { name: 'Jaisalmer',   score: 58 }, { name: 'Alwar',        score: 55 }
    ],
    'Madhya Pradesh': [
        { name: 'Bhopal',      score: 72 }, { name: 'Indore',       score: 78 },
        { name: 'Jabalpur',    score: 65 }, { name: 'Gwalior',      score: 61 },
        { name: 'Ujjain',      score: 58 }, { name: 'Sagar',        score: 49 },
        { name: 'Rewa',        score: 44 }, { name: 'Satna',        score: 51 }
    ],
    'West Bengal': [
        { name: 'Kolkata',          score: 83 }, { name: 'Howrah',            score: 76 },
        { name: 'North 24 Parganas',score: 71 }, { name: 'South 24 Parganas', score: 65 },
        { name: 'Murshidabad',      score: 53 }, { name: 'Bardhaman',         score: 68 },
        { name: 'Jalpaiguri',       score: 60 }, { name: 'Darjeeling',        score: 74 }
    ],
    'Tamil Nadu': [
        { name: 'Chennai',    score: 95 }, { name: 'Coimbatore',  score: 91 },
        { name: 'Madurai',    score: 88 }, { name: 'Tiruchirappalli', score: 86 },
        { name: 'Salem',      score: 82 }, { name: 'Tirunelveli', score: 79 },
        { name: 'Erode',      score: 84 }, { name: 'Vellore',     score: 75 }
    ],
    'Punjab': [
        { name: 'Chandigarh',  score: 87 }, { name: 'Ludhiana',    score: 79 },
        { name: 'Amritsar',    score: 76 }, { name: 'Jalandhar',   score: 72 },
        { name: 'Patiala',     score: 68 }, { name: 'Bathinda',    score: 61 }
    ]
};

var _perfCurrentFilter = 'all';
var _perfCurrentItems  = [];

function perfTileClass(score) {
    if (score >= 80) return 'high-perf';
    if (score >= 60) return 'medium-perf';
    return 'at-risk';
}

const PERF_BLOCK_DATA = {
    
    'Mumbai Suburban': [
        { name: 'Andheri East',    score: 91 }, { name: 'Andheri West',  score: 88 },
        { name: 'Borivali',        score: 84 }, { name: 'Kandivali',     score: 82 },
        { name: 'Malad',           score: 79 }, { name: 'Goregaon',      score: 76 },
        { name: 'Jogeshwari',      score: 73 }, { name: 'Bandra East',   score: 86 },
        { name: 'Bandra West',     score: 90 }, { name: 'Kurla',         score: 68 },
        { name: 'Ghatkopar',       score: 72 }, { name: 'Vikhroli',      score: 65 }
    ],
    'Pune': [
        { name: 'Haveli',          score: 82 }, { name: 'Mulshi',        score: 74 },
        { name: 'Maval',           score: 71 }, { name: 'Khed',          score: 63 },
        { name: 'Junnar',          score: 57 }, { name: 'Ambegaon',      score: 61 },
        { name: 'Shirur',          score: 69 }, { name: 'Daund',         score: 55 },
        { name: 'Indapur',         score: 50 }, { name: 'Baramati',      score: 77 },
        { name: 'Purandar',        score: 67 }, { name: 'Bhor',          score: 59 }
    ],
    'Nashik': [
        { name: 'Nashik',          score: 79 }, { name: 'Niphad',        score: 64 },
        { name: 'Sinnar',          score: 70 }, { name: 'Dindori',       score: 55 },
        { name: 'Igatpuri',        score: 61 }, { name: 'Peth',          score: 44 },
        { name: 'Trimbakeshwar',   score: 58 }, { name: 'Chandwad',      score: 52 }
    ],
    
    'New Delhi': [
        { name: 'Connaught Place', score: 93 }, { name: 'Chanakyapuri',  score: 91 },
        { name: 'RK Puram',        score: 88 }, { name: 'Sarojini Nagar',score: 85 },
        { name: 'Lodhi Colony',    score: 86 }, { name: 'Kidwai Nagar',  score: 82 },
        { name: 'Safdarjung',      score: 84 }, { name: 'Patel Nagar',   score: 78 }
    ],
    'North Delhi': [
        { name: 'Civil Lines',     score: 87 }, { name: 'Model Town',    score: 83 },
        { name: 'Shalimar Bagh',   score: 79 }, { name: 'Rohini',        score: 76 },
        { name: 'Pitampura',       score: 81 }, { name: 'Sadar Bazar',   score: 72 },
        { name: 'Badli',           score: 64 }, { name: 'Adarsh Nagar',  score: 69 }
    ],
    
    'Bengaluru Urban': [
        { name: 'Anekal',          score: 86 }, { name: 'Bangalore East', score: 92 },
        { name: 'Bangalore North', score: 89 }, { name: 'Bangalore South', score: 91 },
        { name: 'Dasarahalli',     score: 79 }, { name: 'Hebbal',         score: 84 },
        { name: 'KR Puram',        score: 77 }, { name: 'Mahadevapura',   score: 85 },
        { name: 'Rajarajeshwari Nagar', score: 75 }, { name: 'Shivajinagar', score: 88 },
        { name: 'Whitefield',      score: 90 }, { name: 'Yelahanka',      score: 82 }
    ],
    'Mysuru': [
        { name: 'Mysuru North',    score: 88 }, { name: 'Mysuru South',  score: 85 },
        { name: 'Nanjangud',       score: 76 }, { name: 'Hunsur',        score: 71 },
        { name: 'K R Nagar',       score: 64 }, { name: 'Periyapatna',   score: 59 },
        { name: 'H D Kote',        score: 52 }, { name: 'T Narasipura',  score: 67 }
    ],
    
    'Hyderabad': [
        { name: 'Secunderabad',    score: 89 }, { name: 'Kukatpally',    score: 85 },
        { name: 'Madhapur',        score: 91 }, { name: 'Begumpet',      score: 87 },
        { name: 'LB Nagar',        score: 78 }, { name: 'Himayatnagar',  score: 84 },
        { name: 'Malkajgiri',      score: 73 }, { name: 'Musheerabad',   score: 79 },
        { name: 'Charminar',       score: 68 }, { name: 'Karwan',        score: 72 },
        { name: 'Nampally',        score: 76 }, { name: 'Goshamahal',    score: 70 }
    ],
    
    'Surat': [
        { name: 'Surat City',      score: 88 }, { name: 'Olpad',         score: 74 },
        { name: 'Kamrej',          score: 79 }, { name: 'Choryasi',      score: 82 },
        { name: 'Mangrol',         score: 66 }, { name: 'Mandvi',        score: 61 },
        { name: 'Bardoli',         score: 71 }, { name: 'Mahuva',        score: 55 }
    ],
    
    'Jaisalmer': [
        { name: 'Jaisalmer',       score: 64 }, { name: 'Pokaran',       score: 55 },
        { name: 'Fatehgarh',       score: 49 }, { name: 'Sam',           score: 43 },
        { name: 'Sankra',          score: 51 }, { name: 'Mohangarh',     score: 58 },
        { name: 'Ramgarh',         score: 47 }, { name: 'Nachna',        score: 44 }
    ],
    
    'Bhopal': [
        { name: 'Bhopal North',    score: 79 }, { name: 'Bhopal South',  score: 75 },
        { name: 'Berasia',         score: 61 }, { name: 'Phanda',        score: 57 },
        { name: 'Huzur',           score: 72 }, { name: 'Obedullaganj',  score: 54 },
        { name: 'Sehore',          score: 66 }, { name: 'Raisen',        score: 50 }
    ],
    
    'Chandigarh': [
        { name: 'Sector 1-17',     score: 91 }, { name: 'Sector 18-35',  score: 88 },
        { name: 'Sector 36-56',    score: 85 }, { name: 'Manimajra',     score: 78 },
        { name: 'Industrial Area', score: 74 }, { name: 'IT Park Zone',  score: 87 },
        { name: 'PGI Area',        score: 90 }, { name: 'Airport Road',  score: 82 }
    ]
};

function renderPerfDashboard() {
    var jur      = window.OFFICER_JURISDICTION || {};
    var role     = jur.role || 'national';
    var jurState = jur.jurisdiction || null;
    var jurDist  = jur.district || null;

    var titleEl = document.getElementById('perfDashTitle');
    var grid    = document.getElementById('perfDashGrid');
    if (!grid) return;

    function setTitle(en, hi) {
        if (!titleEl) return;
        titleEl.textContent = en;
        titleEl.setAttribute('data-en', en);
        titleEl.setAttribute('data-hi', hi);
    }

    if (role === 'national') {
        _perfCurrentItems = PERF_STATE_DATA;
        setTitle('State-Level Data Dashboard', 'राज्य स्तरीय डेटा डैशबोर्ड');
        _renderPerfGrid(_perfCurrentFilter, null, null);

    } else if (role === 'state') {
        _perfCurrentItems = PERF_DISTRICT_DATA[jurState] || [];
        setTitle('District-Level Data Dashboard — ' + jurState, 'जिला स्तरीय डेटा डैशबोर्ड — ' + jurState);
        _renderPerfGrid(_perfCurrentFilter, null, null);

    } else {
        _perfCurrentItems = PERF_BLOCK_DATA[jurDist] || [];
        setTitle('Block-Level Data Dashboard — ' + jurDist + ', ' + jurState, 'ब्लॉक स्तरीय डेटा डैशबोर्ड — ' + jurDist);
        _renderPerfGrid(_perfCurrentFilter, null, jurDist);
    }
}

function _renderPerfGrid(filter, highlightDistrict, highlightBlock) {
    var grid = document.getElementById('perfDashGrid');
    if (!grid) return;

    var items = _perfCurrentItems.filter(function(item) {
        if (filter === 'high') return item.score >= 80;
        if (filter === 'risk') return item.score < 60;
        return true;
    });

    if (!items.length) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:#999;padding:20px;font-size:13px;">No entries match this filter.</div>';
        return;
    }

    grid.innerHTML = items.map(function(item) {
        var cls     = perfTileClass(item.score);
        var isOwn   = (highlightDistrict && item.name === highlightDistrict) ||
                      (highlightBlock    && item.name === highlightBlock);
        var ownCls  = isOwn ? ' perf-tile-own' : '';
        var jur     = window.OFFICER_JURISDICTION || {};
        var ownLabel = jur.role === 'district' ? 'Your District' : 'Your Area';
        var ownBadge= isOwn ? '<span class="perf-own-badge">' + ownLabel + '</span>' : '';
        return '<div class="state-cluster ' + cls + ownCls + '">' +
                   '<div class="state-box">' +
                       ownBadge +
                       '<span class="state-name">' + item.name + '</span>' +
                       '<span class="state-metric">' + item.score + '%</span>' +
                   '</div>' +
               '</div>';
    }).join('');
}

function perfDashFilter(btn, filter) {
    _perfCurrentFilter = filter;
    document.querySelectorAll('.map-control-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var jur = window.OFFICER_JURISDICTION || {};
    _renderPerfGrid(filter, null, jur.role === 'district' ? jur.district : null);
}


function initSidebarToggle() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebarToggle');
    const collapseBtn = document.getElementById('sidebarCollapseBtn');

    if (localStorage.getItem('sidebarCollapsed') === 'true') {
        sidebar?.classList.add('collapsed');
        updateCollapseBtnText();
    }

    if (collapseBtn) {
        collapseBtn.addEventListener('click', () => {
            const isCollapsed = sidebar?.classList.toggle('collapsed');
            localStorage.setItem('sidebarCollapsed', isCollapsed ? 'true' : 'false');
            updateCollapseBtnText();
        });
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            sidebar?.classList.toggle('active');
        });
    }

    document.querySelectorAll('.menu-item:not(.menu-item-disabled)').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar?.classList.remove('active');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar?.classList.contains('active')) {
            if (!sidebar?.contains(e.target) && !toggle?.contains(e.target)) {
                sidebar?.classList.remove('active');
            }
        }
    });
}

function updateCollapseBtnText() {
    const collapseBtn = document.getElementById('sidebarCollapseBtn');
    const sidebar = document.getElementById('sidebar');
    if (collapseBtn && sidebar) {
        collapseBtn.textContent = sidebar.classList.contains('collapsed') ? '»' : '«';
        collapseBtn.title = sidebar.classList.contains('collapsed') ? 'Expand Sidebar' : 'Collapse Sidebar';
    }
}


const OVERLAY_SECTIONS = [
    'digitalTwinSection',
    'projectLifecycleSection',
    'ombudsmanSection',
    'schemesDeskSection'
];

function setActive(el) {
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    if (el) el.classList.add('active');
    
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    }
}

function showSection(id) {
    const content = document.querySelector('.content-area');
    if (!content) return;

    if (id !== null && OVERLAY_SECTIONS.includes(id)) {
        content.classList.add('iframe-mode');
    } else {
        content.classList.remove('iframe-mode');
    }

    content.querySelectorAll(':scope > section').forEach(s => {
        if (OVERLAY_SECTIONS.includes(s.id)) {
            s.style.display = s.id === id ? 'flex' : 'none';
        } else {
            s.style.display = id === null ? '' : 'none';
        }
        s.classList.remove('fade-out', 'fade-in');
    });

    content.querySelectorAll(':scope > div').forEach(div => {
        div.style.display = id === null ? '' : 'none';
    });

    requestAnimationFrame(() => {
        content.querySelectorAll(':scope > section, :scope > div').forEach(el => {
            if (el.style.display !== 'none') {
                el.classList.add('fade-in');
            }
        });
    });
}

function loadHome(){
    showSection(null);
    setActive(document.getElementById('menuDashboard'));
    if (typeof renderDashPolls === 'function') renderDashPolls();
}

function fastReloadAI() {
    var isHome = !document.querySelector('.content-area.iframe-mode');
    if (!isHome) { loadHome(); }
    var delay = isHome ? 0 : 350;
    setTimeout(function() {
        if (typeof runCalamityPrediction === 'function') runCalamityPrediction();
        var el = document.getElementById('calamityPredictionSection');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, delay);
}

function scrollToSection(id) {
    var isHome = !document.querySelector('.content-area.iframe-mode');
    if (!isHome) { loadHome(); }
    setTimeout(function () {
        var el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('nav-scroll-highlight');
        setTimeout(function () { el.classList.remove('nav-scroll-highlight'); }, 1500);
    }, isHome ? 0 : 300);
}
function loadDigitalTwin() {
    showSection('digitalTwinSection');
    setActive(document.getElementById('menuDigitalTwin'));
    setTimeout(function() {
        if (!window._dtMapInited && typeof initComplaintsMap === 'function') {
            window._dtMapInited = true; initComplaintsMap();
        }
    }, 350);
}
function loadProjectLifecycle() {
    showSection('projectLifecycleSection');
    setActive(document.getElementById('menuProjects'));
    setTimeout(function() {
        if (!window._plMapInited && typeof initProjectsMap === 'function') {
            window._plMapInited = true; initProjectsMap();
        }
        if (typeof plApplyFilters === 'function') plApplyFilters();
    }, 350);
}
function loadSchemes()            { showSection('schemesDeskSection');      setActive(document.getElementById('menuSchemes'));     }
function loadOmbudsman() {
    showSection('ombudsmanSection');
    setActive(document.getElementById('menuAudit'));
    setTimeout(function() {
        if (!window._obMapInited && typeof initGrievanceMap === 'function') {
            window._obMapInited = true; initGrievanceMap();
        }
    }, 350);
}


function scrollToReport() {
    document.getElementById('monthlyReportSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToNoticeSection() {
    document.getElementById('sendNoticeSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


var NOTICE_OFFICER_LIST = [
    { id: 'AGND123456',     name: 'Rajesh Kumar, IAS',    rank: 'Additional Secretary', role: 'national', jurisdiction: null,              district: null },
    { id: 'JSND654321',     name: 'Anita Desai, IAS',     rank: 'Joint Secretary',      role: 'national', jurisdiction: null,              district: null },
    { id: 'ST-MH-2024-001', name: 'Priya Sharma, IAS',    rank: 'Principal Secretary',  role: 'state',    jurisdiction: 'Maharashtra',     district: null },
    { id: 'ST-DL-2024-002', name: 'Arvind Mehta, IAS',    rank: 'Chief Secretary',      role: 'state',    jurisdiction: 'Delhi',           district: null },
    { id: 'ST-KA-2024-003', name: 'Suresh Nair, IAS',     rank: 'Principal Secretary',  role: 'state',    jurisdiction: 'Karnataka',       district: null },
    { id: 'ST-UP-2024-004', name: 'Ramesh Tiwari, IAS',   rank: 'Principal Secretary',  role: 'state',    jurisdiction: 'Uttar Pradesh',   district: null },
    { id: 'ST-TG-2024-005', name: 'Lakshmi Rao, IAS',     rank: 'Chief Secretary',      role: 'state',    jurisdiction: 'Telangana',       district: null },
    { id: 'ST-GJ-2024-006', name: 'Hardik Patel, IAS',    rank: 'Principal Secretary',  role: 'state',    jurisdiction: 'Gujarat',         district: null },
    { id: 'ST-RJ-2024-007', name: 'Mridul Sharma, IAS',   rank: 'Principal Secretary',  role: 'state',    jurisdiction: 'Rajasthan',       district: null },
    { id: 'ST-MP-2024-008', name: 'Dinesh Chauhan, IAS',  rank: 'Chief Secretary',      role: 'state',    jurisdiction: 'Madhya Pradesh',  district: null },
    { id: 'DT-MU-2024-001', name: 'Kavya Reddy, IPS',     rank: 'Deputy Commissioner',  role: 'district', jurisdiction: 'Maharashtra',     district: 'Mumbai Suburban' },
    { id: 'DT-ND-2024-002', name: 'Rohit Verma, IPS',     rank: 'Deputy Commissioner',  role: 'district', jurisdiction: 'Delhi',           district: 'New Delhi' },
    { id: 'DT-BG-2024-003', name: 'Ananya Krishnan, IAS', rank: 'Deputy Commissioner',  role: 'district', jurisdiction: 'Karnataka',       district: 'Bengaluru Urban' },
    { id: 'DT-HY-2024-004', name: 'Vikram Rao, IPS',      rank: 'Deputy Commissioner',  role: 'district', jurisdiction: 'Telangana',       district: 'Hyderabad' },
    { id: 'DT-PU-2024-005', name: 'Sneha Patil, IPS',     rank: 'Deputy Commissioner',  role: 'district', jurisdiction: 'Maharashtra',     district: 'Pune' },
    { id: 'DT-JA-2024-006', name: 'Pradeep Singh, IPS',   rank: 'Deputy Commissioner',  role: 'district', jurisdiction: 'Rajasthan',       district: 'Jaisalmer' },
    { id: 'DT-BH-2024-007', name: 'Neha Shukla, IPS',     rank: 'Asst. Commissioner',   role: 'district', jurisdiction: 'Madhya Pradesh',  district: 'Bhopal' },
    { id: 'DT-CH-2024-008', name: 'Gurpreet Kaur, IPS',   rank: 'Deputy Commissioner',  role: 'district', jurisdiction: 'Punjab',          district: 'Chandigarh' }
];


let selectedPriority = 'medium';

function setPriority(level) {
    selectedPriority = level;
    document.querySelectorAll('.priority-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.priority === level);
    });
}


function _renderNoticeHistory() {
    var container = document.getElementById('noticesListContainer');
    var countEl   = document.getElementById('noticeHistoryCount');
    if (!container) return;

    var defaultHistory = [
        { id: 'NTC-001', to: 'AGND123456',     toName: 'Rajesh Kumar, IAS',    subject: 'Application Review Status - March 2026',            priority: 'urgent', date: 'March 4, 2026 at 2:30 PM',    status: 'read' },
        { id: 'NTC-002', to: 'ST-MH-2024-001', toName: 'Priya Sharma, IAS',    subject: 'Field Verification Required - Site Inspection',     priority: 'high',   date: 'March 3, 2026 at 10:15 AM',  status: 'pending' },
        { id: 'NTC-003', to: 'DT-ND-2024-002', toName: 'Rohit Verma, IPS',     subject: 'Monthly Report Submission Reminder',                priority: 'medium', date: 'March 2, 2026 at 9:00 AM',   status: 'read' },
        { id: 'NTC-004', to: 'DT-PU-2024-005', toName: 'Sneha Patil, IPS',     subject: 'Documentation Review - Missing Files',              priority: 'high',   date: 'March 1, 2026 at 3:45 PM',   status: 'read' },
        { id: 'NTC-005', to: 'DT-BG-2024-003', toName: 'Ananya Krishnan, IAS', subject: 'System Update - New Portal Features',               priority: 'low',    date: 'Feb 28, 2026 at 11:30 AM',  status: 'read' },
        { id: 'NTC-006', to: 'ST-KA-2024-003', toName: 'Suresh Nair, IAS',     subject: 'Budget Utilisation Q4 Report - Immediate Action',   priority: 'urgent', date: 'Feb 27, 2026 at 4:00 PM',    status: 'pending' },
        { id: 'NTC-007', to: 'ST-UP-2024-004', toName: 'Ramesh Tiwari, IAS',   subject: 'Compliance Audit Scheduled - Feb 2026',             priority: 'medium', date: 'Feb 25, 2026 at 11:00 AM',  status: 'read' },
        { id: 'NTC-008', to: 'DT-HY-2024-004', toName: 'Vikram Rao, IPS',      subject: 'Pending Land Acquisition - Hyderabad Ring Road',    priority: 'high',   date: 'Feb 24, 2026 at 9:30 AM',   status: 'pending' },
        { id: 'NTC-009', to: 'ST-GJ-2024-006', toName: 'Hardik Patel, IAS',    subject: 'Smart City Phase II Kickoff - Action Required',     priority: 'medium', date: 'Feb 22, 2026 at 2:00 PM',   status: 'read' },
        { id: 'NTC-010', to: 'DT-BH-2024-007', toName: 'Neha Shukla, IPS',     subject: 'SLA Breach Alert - 12 Overdue Grievances',          priority: 'urgent', date: 'Feb 21, 2026 at 8:45 AM',   status: 'pending' },
        { id: 'NTC-011', to: 'ST-RJ-2024-007', toName: 'Mridul Sharma, IAS',   subject: 'Jalseva Yojana Progress Report Submission',         priority: 'low',    date: 'Feb 20, 2026 at 3:15 PM',   status: 'read' },
        { id: 'NTC-012', to: 'DT-CH-2024-008', toName: 'Gurpreet Kaur, IPS',   subject: 'Quarterly Officer Performance Review - March 2026', priority: 'medium', date: 'Feb 19, 2026 at 10:00 AM',  status: 'read' },
        { id: 'NTC-013', to: 'ST-TG-2024-005', toName: 'Lakshmi Rao, IAS',     subject: 'Telangana Water Grid Inspection Report Due',        priority: 'high',   date: 'Feb 18, 2026 at 1:30 PM',   status: 'pending' },
        { id: 'NTC-014', to: 'ST-DL-2024-002', toName: 'Arvind Mehta, IAS',    subject: 'Delhi Metro Phase IV - Permit Approval Pending',    priority: 'urgent', date: 'Feb 17, 2026 at 11:00 AM',  status: 'read' },
        { id: 'NTC-015', to: 'DT-JA-2024-006', toName: 'Pradeep Singh, IPS',   subject: 'Desert Development Corridor - Land Survey Request', priority: 'medium', date: 'Feb 16, 2026 at 9:00 AM',   status: 'read' },
        { id: 'NTC-016', to: 'ST-MP-2024-008', toName: 'Dinesh Chauhan, IAS',  subject: 'MP Solar Mission - Q1 Milestone Completion Report', priority: 'low',    date: 'Feb 15, 2026 at 4:45 PM',   status: 'read' },
        { id: 'NTC-017', to: 'JSND654321',     toName: 'Anita Desai, IAS',     subject: 'National Scheme Portal Audit - Compliance Due',     priority: 'high',   date: 'Feb 14, 2026 at 10:30 AM',  status: 'pending' },
        { id: 'NTC-018', to: 'DT-MU-2024-001', toName: 'Kavya Reddy, IPS',     subject: 'Mumbai Coastal Road - Environmental NOC Update',    priority: 'urgent', date: 'Feb 13, 2026 at 3:00 PM',   status: 'read' },
        { id: 'NTC-019', to: 'DT-BG-2024-003', toName: 'Ananya Krishnan, IAS', subject: 'Bengaluru Metro Green Line - Progress Escalation',  priority: 'medium', date: 'Feb 12, 2026 at 8:00 AM',   status: 'read' },
        { id: 'NTC-020', to: 'ST-MH-2024-001', toName: 'Priya Sharma, IAS',    subject: 'Farmer Relief Fund Disbursement - Pending Cases',   priority: 'high',   date: 'Feb 11, 2026 at 2:15 PM',   status: 'pending' }
    ];

    var stored  = JSON.parse(localStorage.getItem('noticeHistory') || '[]');
    var history = stored.length > 0 ? stored : defaultHistory;
    if (countEl) countEl.textContent = history.length;

    var statusLabels = { read: '✓ Read', pending: '⏳ Pending', sent: '✉ Sent' };
    var statusClass  = { read: 'status-read', pending: 'status-pending', sent: 'status-read' };

    container.innerHTML = history.map(function(n) {
        var officer = NOTICE_OFFICER_LIST.find(function(o) { return o.id === n.to; });
        var toName  = n.toName || (officer ? officer.name : n.to);
        var loc     = officer ? (officer.district || officer.jurisdiction || 'National') : '';
        return '<div class="notice-item notice-item-sent">' +
            '<div class="notice-item-header">' +
                '<span class="notice-to">To: ' + toName + (loc ? ' <span class="notice-to-loc">· ' + loc + '</span>' : '') + '</span>' +
                '<span class="notice-priority-badge priority-' + (n.priority || 'medium') + '">' + (n.priority ? n.priority.charAt(0).toUpperCase() + n.priority.slice(1) : 'Medium') + '</span>' +
            '</div>' +
            '<p class="notice-subject">' + n.subject + '</p>' +
            '<p class="notice-date">' + (n.date || '') + '</p>' +
            '<span class="notice-status ' + (statusClass[n.status] || 'status-read') + '">' + (statusLabels[n.status] || '✉ Sent') + '</span>' +
        '</div>';
    }).join('') || '<p style="color:var(--text-tertiary);text-align:center;padding:20px 0">No notices sent yet.</p>';
}


function initializeSendNoticeForm() {
    var officerInfoStr = localStorage.getItem('officerInfo');
    if (!officerInfoStr) return;
    var info = JSON.parse(officerInfoStr);
    var jur  = window.OFFICER_JURISDICTION || {};

    var roleEmoji = { national: '🇮🇳', state: '🏛️', district: '🎖️' }[jur.role] || '👤';
    var jurLabel  = jur.role === 'district' ? (jur.district + ', ' + jur.jurisdiction)
                  : jur.role === 'state'    ? jur.jurisdiction : 'All India';
    var nscName  = document.getElementById('nscName');
    var nscRank  = document.getElementById('nscRank');
    var nscId    = document.getElementById('nscId');
    var nscLoc   = document.getElementById('nscLocation');
    var nscBadge = document.getElementById('nscRoleBadge');
    if (nscName)  nscName.textContent  = info.name  || '—';
    if (nscRank)  nscRank.textContent  = info.rank  || '—';
    if (nscId)    nscId.textContent    = info.govId || '—';
    if (nscLoc)   nscLoc.textContent   = '📍 ' + (jurLabel || info.location || '');
    if (nscBadge) nscBadge.textContent = roleEmoji;

    var senderIdEl   = document.getElementById('senderOfficialId');
    var senderNameEl = document.getElementById('senderName');
    var senderRankEl = document.getElementById('senderRank');
    if (senderIdEl)   senderIdEl.value   = info.govId || '';
    if (senderNameEl) senderNameEl.value = info.name  || '';
    if (senderRankEl) senderRankEl.value = info.rank  || '';

    var recipientSelect = document.getElementById('recipientOfficer');
    if (recipientSelect) {
        var selfId   = info.govId;
        var role     = jur.role;
        var jurState = jur.jurisdiction;
        var recipients = NOTICE_OFFICER_LIST.filter(function(o) {
            if (o.id === selfId) return false;
            if (role === 'national') return true;
            if (role === 'state')    return o.jurisdiction === jurState;
            if (role === 'district') return (o.jurisdiction === jurState) || (o.role === 'national');
            return true;
        });
        recipientSelect.innerHTML = '<option value="">-- Select Officer --</option>';
        recipients.forEach(function(o) {
            var loc = o.district ? (o.district + ', ' + o.jurisdiction) : (o.jurisdiction || 'National Level');
            var opt = document.createElement('option');
            opt.value = o.id;
            opt.textContent = o.name + ' — ' + o.rank + ' · ' + loc;
            recipientSelect.appendChild(opt);
        });
        recipientSelect.addEventListener('change', function () {
            var recipientIdEl = document.getElementById('recipientOfficialId');
            if (recipientIdEl) recipientIdEl.value = this.value;
            var hint = document.getElementById('recipientInfoHint');
            if (hint) {
                var officer = NOTICE_OFFICER_LIST.find(function(o) { return o.id === recipientSelect.value; });
                if (officer) {
                    var loc = officer.district ? (officer.district + ', ' + officer.jurisdiction) : (officer.jurisdiction || 'National Level');
                    hint.innerHTML = '🆔 ' + officer.id + ' &nbsp;·&nbsp; 📍 ' + loc;
                    hint.style.display = 'block';
                } else {
                    hint.style.display = 'none';
                }
            }
        });
    }

    var subjectInput = document.getElementById('noticeSubject');
    var charCount    = document.getElementById('charCount');
    if (subjectInput && charCount) {
        subjectInput.addEventListener('input', function () {
            charCount.textContent = this.value.length + '/100 characters';
        });
    }

    _renderNoticeHistory();

    var noticeForm = document.getElementById('sendNoticeForm');
    if (noticeForm) {
        noticeForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var recipient = document.getElementById('recipientOfficer')?.value;
            var subject   = document.getElementById('noticeSubject')?.value?.trim();
            var type      = document.getElementById('noticeType')?.value;
            if (!recipient || !subject || !type) {
                showToast('⚠️ Please fill in all required fields');
                return;
            }
            var officer = NOTICE_OFFICER_LIST.find(function(o) { return o.id === recipient; });
            var notice = {
                id:       'NTC-' + Date.now(),
                to:       recipient,
                toName:   officer ? officer.name : recipient,
                subject:  subject,
                type:     type,
                priority: selectedPriority,
                date:     new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
                status:   'pending'
            };
            var history = JSON.parse(localStorage.getItem('noticeHistory') || '[]');
            history.unshift(notice);
            localStorage.setItem('noticeHistory', JSON.stringify(history.slice(0, 50)));
            _renderNoticeHistory();
            showToast('✅ Notice sent to ' + (officer ? officer.name : recipient) + ' successfully!');
            noticeForm.reset();
            var hint = document.getElementById('recipientInfoHint');
            if (hint) hint.style.display = 'none';
            selectedPriority = 'medium';
            document.querySelectorAll('.priority-btn').forEach(function(b) { b.classList.remove('active'); });
        });
    }
}


const stateData = [
    { name: 'Delhi',         lat: 28.6139, lng: 77.2090, apps: 245 },
    { name: 'Maharashtra',   lat: 19.7515, lng: 75.7139, apps: 198 },
    { name: 'Karnataka',     lat: 15.3173, lng: 75.7139, apps: 176 },
    { name: 'Tamil Nadu',    lat: 11.1271, lng: 78.6569, apps: 154 },
    { name: 'Telangana',     lat: 18.1124, lng: 79.0193, apps: 132 },
    { name: 'Gujarat',       lat: 22.2587, lng: 71.1924, apps: 118 },
    { name: 'Uttar Pradesh', lat: 26.8467, lng: 80.9462, apps: 189 },
    { name: 'West Bengal',   lat: 22.9868, lng: 87.8550, apps: 145 },
    { name: 'Rajasthan',     lat: 27.0238, lng: 74.2179, apps: 112 },
    { name: 'Madhya Pradesh',lat: 22.9734, lng: 78.6569, apps: 98  }
];

var _dashMap = null, _dashHeatCircles = [], _dashMarkVis = false, _dashHeatVis = true;

function initGoogleMap() {
    if (window._cpGMapsReady) window._cpGMapsReady();
    const mapDiv = document.getElementById('googleHeatMap');
    if (!mapDiv || typeof google === 'undefined') return;

    var jur       = window.OFFICER_JURISDICTION || {};
    var dashCenter = jur.mapCenter || { lat: 22.5937, lng: 78.9629 };
    var dashZoom   = jur.mapZoom   || 5;
    var dashMapOpts = {
        center: dashCenter,
        zoom:   dashZoom,
        mapTypeId: 'roadmap',
        styles: [{ featureType: 'poi', stylers: [{ visibility: 'off' }] }]
    };
    if (jur.mapBounds) {
        dashMapOpts.restriction = { latLngBounds: jur.mapBounds, strictBounds: true };
        dashMapOpts.minZoom = jur.role === 'district' ? Math.max(dashZoom - 1, 10)
                            : jur.role === 'state'    ? Math.max(dashZoom - 1, 6)
                            : 4;
    } else if (jur.role && jur.role !== 'national') {
        dashMapOpts.restriction = { latLngBounds: { north: 35.5, south: 6.7, east: 97.4, west: 68.2 }, strictBounds: true };
        dashMapOpts.minZoom = jur.role === 'district' ? 10 : 6;
    }
    _dashMap = new google.maps.Map(mapDiv, dashMapOpts);

    _dashHeatVis = true;
    _renderDashHeatCircles();
    applyHeatSettings();
}

function _renderDashHeatCircles() {
    _dashHeatCircles.forEach(function(c) { c.setMap(null); });
    _dashHeatCircles = [];
    if (!_dashHeatVis || !_dashMap) return;
    var maxApps   = Math.max.apply(null, stateData.map(function(s) { return s.apps; }));
    var intensity = parseFloat(document.getElementById('heatIntensity')?.value || 10) / 10;
    var radiusKm  = parseInt(document.getElementById('heatRadius')?.value || 8);
    stateData.forEach(function(s) {
        var ratio  = s.apps / maxApps;
        var circle = new google.maps.Circle({
            center:      { lat: s.lat, lng: s.lng },
            radius:      radiusKm * 1e4 * (0.4 + 0.6 * ratio),
            map:         _dashMap,
            fillColor:   ratio > 0.7 ? '#dc3545' : ratio > 0.4 ? '#fd7e14' : '#ffc107',
            fillOpacity: Math.min(0.75, (0.25 + 0.45 * ratio) * intensity),
            strokeWeight: 0
        });
        _dashHeatCircles.push(circle);
    });
}

function applyHeatSettings() {
    const intensity = parseFloat(document.getElementById('heatIntensity')?.value || 10) / 10;
    const radius    = parseInt(document.getElementById('heatRadius')?.value || 8) * 10;
    document.getElementById('intensityVal') && (document.getElementById('intensityVal').textContent = intensity.toFixed(1));
    document.getElementById('radiusVal')    && (document.getElementById('radiusVal').textContent    = (radius / 1.25).toFixed(0) + ' km');
    _renderDashHeatCircles();
}

function toggleHeatmap() {
    _dashHeatVis = !_dashHeatVis;
    _renderDashHeatCircles();
    document.getElementById('btnHeatmap')?.classList.toggle('active', _dashHeatVis);
}

function toggleMarkers() {
    _dashMarkVis = !_dashMarkVis;
    document.getElementById('btnMarkers')?.classList.toggle('active', _dashMarkVis);
    showToast(_dashMarkVis ? 'Markers shown' : 'Markers hidden');
}

function resetMapView() {
    var jur = window.OFFICER_JURISDICTION || {};
    var c   = jur.mapCenter || { lat: 22.5937, lng: 78.9629 };
    var z   = jur.mapZoom   || 5;
    _dashMap?.setCenter(c);
    _dashMap?.setZoom(z);
}

function changeMapType(type) {
    _dashMap?.setMapTypeId(type);
}


function initializeIndiaHeatMap() {
    const grid = document.getElementById('activityHeatmap');
    if (!grid) return;
    const today    = new Date();
    const daysBack = 35;

    for (let i = daysBack; i >= 0; i--) {
        const d        = new Date(today);
        d.setDate(d.getDate() - i);
        const dayOfWeek = d.getDay();
        const count     = dayOfWeek === 0 || dayOfWeek === 6
            ? Math.floor(Math.random() * 2)
            : Math.floor(Math.random() * 5);
        const cell = document.createElement('div');
        cell.className = 'hm-cell hm-' + count;
        cell.title     = d.toLocaleDateString('en-IN') + ': ' + count + ' activities';
        grid.appendChild(cell);
    }
}


function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('officerInfo');
        localStorage.removeItem('loggedInOfficer');
        window.location.href = '/gov/login';
    }
}


const ROLE_DISPLAY = {
    national: { label: 'National',  icon: '🇮🇳', cls: 'jur-national' },
    state:    { label: 'State',     icon: '🏛️',  cls: 'jur-state'    },
    district: { label: 'District',  icon: '🎖️',  cls: 'jur-district' }
};

function buildJurisdictionBanner(info) {
    var role = info.role || 'national';
    var rd   = ROLE_DISPLAY[role] || ROLE_DISPLAY.national;
    var scopeText = role === 'district'
        ? info.district + ', ' + info.jurisdiction
        : role === 'state'
            ? info.jurisdiction
            : 'All India';
    return '<div class="jur-banner ' + rd.cls + '" id="jurisdictionBanner" title="Your access is restricted to ' + scopeText + '">' +
               '<span class="jur-icon">' + rd.icon + '</span>' +
               '<div class="jur-text">' +
                   '<span class="jur-level">' + rd.label + ' Access</span>' +
                   '<span class="jur-scope">' + scopeText + '</span>' +
               '</div>' +
               '<span class="jur-pulse"></span>' +
           '</div>';
}


document.addEventListener('DOMContentLoaded', function () {
    const officerInfoStr = localStorage.getItem('officerInfo');
    if (!officerInfoStr) {
        window.location.href = '/gov/login';
        return;
    }

    const info = JSON.parse(officerInfoStr);
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('topBarLocation',  '📍 ' + (info.location || ''));
    set('officerName',     info.name);
    set('officerRank',     info.rank);
    set('officerLocation', '📍 ' + (info.location || ''));
    const badge = document.getElementById('rankBadge');
    if (badge) { badge.textContent = info.badge; badge.style.color = info.color; }

    var _jurBounds = null;
    if (info.role === 'state' && info.jurisdiction) {
        _jurBounds = JUR_STATE_BOUNDS[info.jurisdiction] || null;
    } else if (info.role === 'district' && info.district) {
        _jurBounds = JUR_DISTRICT_BOUNDS[info.district] || null;
    }
    window.OFFICER_JURISDICTION = {
        role:         info.role         || 'national',
        jurisdiction: info.jurisdiction || null,
        district:     info.district     || null,
        mapCenter:    info.mapCenter    || { lat: 22.5937, lng: 78.9629 },
        mapZoom:      info.mapZoom      || 5,
        mapBounds:    _jurBounds
    };

    var topBar = document.querySelector('.top-bar') || document.querySelector('.topbar') || document.querySelector('header');
    if (topBar) {
        var bannerHtml = buildJurisdictionBanner(info);
        var bannerEl = document.createElement('div');
        bannerEl.innerHTML = bannerHtml;
        topBar.appendChild(bannerEl.firstChild);
    }

    renderPerfDashboard();

    initPreferences('languageSelect');

    initSidebarToggle();

    document.querySelector('.logout-btn')?.addEventListener('click', handleLogout);

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.querySelectorAll('.card-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const title = this.closest('.card')?.querySelector('.card-header h3')?.textContent || '';
            showToast('Viewing: ' + title);
        });
    });

    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            showToast('Action: ' + this.textContent.trim());
        });
    });

    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') { e.preventDefault(); window.print(); }
    });

    initializeSendNoticeForm();
    function _syncNoticePanelHeight() {
        var fp = document.querySelector('#sendNoticeSection .notice-form-panel');
        var hp = document.querySelector('#sendNoticeSection .notice-history-panel');
        if (fp && hp) { hp.style.height = fp.offsetHeight + 'px'; }
    }
    setTimeout(_syncNoticePanelHeight, 50);
    window.addEventListener('resize', _syncNoticePanelHeight);
    initializeIndiaHeatMap();
    addRippleEffect();

    console.log('[Dashboard] Initialized — Officer:', info.name);
});
