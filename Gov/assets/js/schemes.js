'use strict';







var SCHEMES = [
  {
    id: 'SCH-2024-001',
    title: 'PM Kisan Samman Nidhi',
    category: 'Agriculture',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    status: 'active',
    budget: '₹60,000 Cr (FY 2025-26)',
    launch: '2019-02-24',
    deadline: '2027-03-31',
    beneficiaries: '11.8 Crore Farmers',
    description: 'Provides income support of ₹6,000 per year in three equal installments to all land-holding farmer families.  Funds are transferred directly to the bank accounts of the beneficiaries.',
    eligibility: [
      'Small and marginal farmers with cultivable land up to 2 hectares',
      'Both self-cultivating and tenant farmers are eligible',
      'Farmer family means husband, wife, and minor children',
      'All land-holding farmers irrespective of the size of their land holdings'
    ],
    benefits: ['₹6,000/year cash support', 'Direct Bank Transfer', 'No intermediaries', 'Twice-yearly installments'],
    documents: [
      { name: 'PM Kisan Official Guidelines 2025.pdf', type: 'PDF', size: '2.1 MB' },
      { name: 'State-wise Beneficiary List Q4.xlsx',   type: 'Excel', size: '18.4 MB' },
      { name: 'Application Process Manual.pdf',        type: 'PDF', size: '1.4 MB' },
      { name: 'Audit Report FY2024-25.pdf',             type: 'PDF', size: '3.8 MB' }
    ],
    states: 'All India', tags: ['DBT', 'Agriculture', 'Farmer Welfare']
  },
  {
    id: 'SCH-2024-002',
    title: 'Ayushman Bharat – PM-JAY',
    category: 'Health',
    ministry: 'Ministry of Health & Family Welfare',
    status: 'active',
    budget: '₹7,200 Cr (FY 2025-26)',
    launch: '2018-09-23',
    deadline: '2028-03-31',
    beneficiaries: '55 Crore Beneficiaries',
    description: 'Provides health cover of ₹5 lakh per family per year for secondary and tertiary care hospitalisation to the bottom 40% of India\'s vulnerable and deprived rural families.',
    eligibility: [
      'Bottom 40% of population based on SECC 2011 data',
      'Deprivation and occupation criteria for urban workers',
      'No cap on family size, gender, or age',
      'Pre-existing conditions covered from day one'
    ],
    benefits: ['₹5 Lakh health cover/family/year', '1,929+ treatment packages', '25,000+ empanelled hospitals', 'Cashless & paperless treatment'],
    documents: [
      { name: 'PM-JAY Policy Compendium 2025.pdf',     type: 'PDF', size: '4.2 MB' },
      { name: 'Empanelled Hospitals National List.pdf', type: 'PDF', size: '6.1 MB' },
      { name: 'Beneficiary Verification Manual.pdf',   type: 'PDF', size: '1.9 MB' }
    ],
    states: 'All India', tags: ['Health', 'Insurance', 'DBT']
  },
  {
    id: 'SCH-2024-003',
    title: 'Pradhan Mantri Awas Yojana – Gramin',
    category: 'Housing',
    ministry: 'Ministry of Rural Development',
    status: 'active',
    budget: '₹54,500 Cr (FY 2025-26)',
    launch: '2016-11-20',
    deadline: '2026-03-31',
    beneficiaries: '2.95 Crore Houses',
    description: 'Provides financial assistance to rural households to construct pucca houses with basic amenities. Target: 2.95 crore houses by March 2026.',
    eligibility: [
      'Houseless families and those having kutcha/dilapidated houses',
      'Scheduled Castes, Scheduled Tribes, minorities, and Other BPL households',
      'Widows, ex-servicemen, those affected by natural calamities',
      'Identified through Socio Economic and Caste Census 2011'
    ],
    benefits: ['₹1.20 Lakh (plains), ₹1.30 Lakh (hilly/NE)', 'MGNREGS 90/95 days unskilled wage', 'Toilet assistance under SBM-G', 'LPG under PM Ujjwala Yojana'],
    documents: [
      { name: 'PMAY-G Guidelines 2024-26.pdf',     type: 'PDF', size: '3.5 MB' },
      { name: 'Beneficiary Selection Criteria.pdf', type: 'PDF', size: '1.2 MB' },
      { name: 'Progress Report Q3 2025-26.pdf',     type: 'PDF', size: '2.8 MB' },
      { name: 'Cost Norms State-wise 2025.xlsx',     type: 'Excel', size: '0.8 MB' }
    ],
    states: 'All India', tags: ['Housing', 'Rural', 'DBT']
  },
  {
    id: 'SCH-2024-004',
    title: 'PM Vishwakarma Yojana',
    category: 'Finance & Livelihood',
    ministry: 'Ministry of Micro, Small & Medium Enterprises',
    status: 'active',
    budget: '₹13,000 Cr (5 years)',
    launch: '2023-09-17',
    deadline: '2028-09-17',
    beneficiaries: '30 Lakh Artisans',
    description: 'Provides end-to-end support to artisans and craftspersons working with their hands and tools across 18 traditional trades. Includes skill training, toolkit support, and collateral-free loans.',
    eligibility: [
      'Artisans and craftspersons working in 18 designated traditional trades',
      'Must work with hands and tools without using power-driven equipment',
      'Age 18 years or above on the date of registration',
      'One member per family eligible; MSME/PMEGP/PM SVANidhi beneficiaries excluded'
    ],
    benefits: ['₹15,000 toolkit incentive', '₹1 Lakh (Tier 1) and ₹2 Lakh (Tier 2) collateral-free loans at 5% interest', 'Skill training stipend ₹500/day', 'PM Vishwakarma Certificate & ID'],
    documents: [
      { name: 'PM Vishwakarma Scheme Guidelines.pdf', type: 'PDF', size: '2.6 MB' },
      { name: '18 Trades Notification.pdf',           type: 'PDF', size: '0.9 MB' },
      { name: 'Registration Portal Manual.pdf',       type: 'PDF', size: '1.7 MB' }
    ],
    states: 'All India', tags: ['Artisans', 'MSME', 'Skill', 'Loans']
  },
  {
    id: 'SCH-2024-005',
    title: 'National Education Policy – PM SHRI Schools',
    category: 'Education',
    ministry: 'Ministry of Education',
    status: 'active',
    budget: '₹27,360 Cr (FY 2022-27)',
    launch: '2022-09-07',
    deadline: '2027-03-31',
    beneficiaries: '14,500 PM SHRI Schools',
    description: 'Upgrades selected government schools as model PM-SHRI (PM Schools for Rising India) implementing the National Education Policy 2020 in its true spirit with focus on high-quality teaching and learning.',
    eligibility: [
      'Government and government-aided schools managed by State/UT Govts',
      'Schools with adequate infrastructure and performance track record',
      'Selection through challenge mode competition',
      'Must sign MOU for implementation of NEP 2020 components'
    ],
    benefits: ['₹2 Crore per school over 5 years', 'Teacher training support', 'Smart classroom infrastructure', 'Annual performance incentive'],
    documents: [
      { name: 'PM SHRI Scheme Guidelines.pdf',        type: 'PDF', size: '3.1 MB' },
      { name: 'NEP 2020 Implementation Manual.pdf',   type: 'PDF', size: '5.4 MB' },
      { name: 'Selected Schools Final List 2025.pdf', type: 'PDF', size: '4.0 MB' }
    ],
    states: 'All India', tags: ['Education', 'NEP 2020', 'Schools']
  },
  {
    id: 'SCH-2024-006',
    title: 'PM Mudra Yojana',
    category: 'Finance & Livelihood',
    ministry: 'Ministry of Finance',
    status: 'active',
    budget: '₹3.5 Lakh Cr loans sanctioned (cumulative)',
    launch: '2015-04-08',
    deadline: 'Ongoing',
    beneficiaries: '45 Crore Loan Accounts',
    description: 'Provides financial support to non-corporate, non-farm small/micro enterprises through three categories: Shishu (loans up to ₹50,000), Kishore (₹50,001 – ₹5 Lakh), and Tarun (₹5 – ₹10 Lakh).',
    eligibility: [
      'Non-corporate, non-farm income generating micro and small enterprises',
      'Individuals, proprietary concerns, partnership firms, companies',
      'SC/ST and minority communities given priority',
      'No minimum income requirement for Shishu category'
    ],
    benefits: ['Shishu: up to ₹50,000', 'Kishore: ₹50K to ₹5 Lakh', 'Tarun: ₹5 to ₹10 Lakh', 'Mudra Debit Card', 'No collateral required'],
    documents: [
      { name: 'Mudra Yojana Operational Guidelines.pdf', type: 'PDF', size: '2.2 MB' },
      { name: 'Eligible Lender List 2025.pdf',           type: 'PDF', size: '1.1 MB' },
      { name: 'Annual Report Mudra 2024-25.pdf',          type: 'PDF', size: '6.3 MB' }
    ],
    states: 'All India', tags: ['Loans', 'MSME', 'Entrepreneur', 'Micro Finance']
  },
  {
    id: 'SCH-2024-007',
    title: 'Beti Bachao Beti Padhao',
    category: 'Women & Child',
    ministry: 'Ministry of Women & Child Development',
    status: 'active',
    budget: '₹848 Cr (FY 2025-26)',
    launch: '2015-01-22',
    deadline: '2027-03-31',
    beneficiaries: 'Girls (0-18 years)',
    description: 'Addresses declining Child Sex Ratio (CSR) and promotes education and welfare of the girl child. Implemented by Ministry of WCD, Health & Education jointly across all districts of India.',
    eligibility: [
      'All districts of India, with focus on 246 low CSR districts',
      'Pregnant women and infants',
      'Girl children up to class 12',
      'Parents and communities in target districts'
    ],
    benefits: ['Awareness campaigns against female foeticide', 'Education support & scholarships', 'Conditional Cash Transfer linked to education milestones', 'Sukanya Samriddhi Yojana linkage'],
    documents: [
      { name: 'BBBP Guidelines and Operational Framework.pdf', type: 'PDF', size: '2.9 MB' },
      { name: 'District-wise CSR Report 2025.pdf',             type: 'PDF', size: '3.7 MB' }
    ],
    states: 'All India', tags: ["Women's Welfare", 'Girl Child', 'Education']
  },
  {
    id: 'SCH-2024-008',
    title: 'Digital India – BharatNet Phase III',
    category: 'Digital Infrastructure',
    ministry: 'Ministry of Communications',
    status: 'upcoming',
    budget: '₹1,39,579 Cr',
    launch: '2026-04-01',
    deadline: '2030-03-31',
    beneficiaries: '6.4 Lakh Villages',
    description: 'BharatNet Phase III aims to provide broadband connectivity to all 6.4 lakh villages of India through a Public Private Partnership (PPP) model, moving beyond the 2.5 lakh gram panchayats covered in Phase I and II.',
    eligibility: [
      'All uncovered and underserved villages',
      'State governments for WiFi hotspot deployment',
      'Designated PPP partners for O&M',
      'CSC operators for last-mile service delivery'
    ],
    benefits: ['Optical fibre to every village', 'Min 100 Mbps per GP connectivity', 'Wi-Fi hotspots at public locations', 'Satellite backup for remote areas'],
    documents: [
      { name: 'BharatNet Phase III DPR Summary.pdf', type: 'PDF', size: '5.1 MB' },
      { name: 'PPP Model Framework.pdf',             type: 'PDF', size: '2.0 MB' }
    ],
    states: 'All India', tags: ['Digital', 'Connectivity', 'Rural Broadband']
  }
];

var POLLS = [
  {
    id: 'POLL-2026-001',
    question: 'Which central scheme has benefited your household the most in the last 2 years?',
    category: 'Scheme Feedback',
    status: 'active',
    createdBy: 'Planning Division, MoF',
    createdDate: '2026-02-01',
    deadline: '2026-03-31',
    totalVotes: 54872,
    votedOption: null,
    options: [
      { text: 'PM Kisan Samman Nidhi',       votes: 18430 },
      { text: 'Ayushman Bharat – PM-JAY',    votes: 14220 },
      { text: 'PM Awas Yojana (Gramin)',      votes: 11650 },
      { text: 'PM Mudra Yojana',             votes:  6200 },
      { text: 'PM Vishwakarma Yojana',       votes:  4372 }
    ]
  },
  {
    id: 'POLL-2026-002',
    question: 'What is the primary barrier you face in accessing government scheme benefits?',
    category: 'Accessibility',
    status: 'active',
    createdBy: 'Digital Services Wing, MeitY',
    createdDate: '2026-02-10',
    deadline: '2026-04-15',
    totalVotes: 38210,
    votedOption: null,
    options: [
      { text: 'Lack of awareness about eligibility',     votes: 14820 },
      { text: 'Complex documentation requirements',     votes: 12340 },
      { text: 'Distance to service centre / CSC',       votes:  5440 },
      { text: 'Language barrier in portal / forms',     votes:  3780 },
      { text: 'Delayed fund disbursement',              votes:  1830 }
    ]
  },
  {
    id: 'POLL-2026-003',
    question: 'Should the PM Awas Yojana deadline be extended by 2 more years beyond March 2026?',
    category: 'Policy Feedback',
    status: 'active',
    createdBy: 'Ministry of Rural Development',
    createdDate: '2026-01-20',
    deadline: '2026-03-15',
    totalVotes: 61440,
    votedOption: null,
    options: [
      { text: 'Yes – extend and increase allocation', votes: 38200 },
      { text: 'Yes – extend but same allocation',     votes: 14100 },
      { text: 'No – current timeline is sufficient',  votes:  5840 },
      { text: 'Not aware of scheme details',          votes:  3300 }
    ]
  },
  {
    id: 'POLL-2026-004',
    question: 'Which digital platform do you find most convenient for government services?',
    category: 'Digital Services',
    status: 'active',
    createdBy: 'MeitY – Digital India Division',
    createdDate: '2026-02-20',
    deadline: '2026-04-30',
    totalVotes: 29856,
    votedOption: null,
    options: [
      { text: 'Umang App',               votes:  9420 },
      { text: 'DigiLocker',              votes:  8840 },
      { text: 'Common Service Centres',  votes:  6782 },
      { text: 'State Govt Portal',       votes:  3216 },
      { text: 'Direct Department Portal', votes: 1598 }
    ]
  },
  {
    id: 'POLL-2026-005',
    question: 'Rate the overall quality of infrastructure projects in your district (roads, bridges, drainage)',
    category: 'Infrastructure',
    status: 'closed',
    createdBy: 'NITI Aayog Quality Assessment Cell',
    createdDate: '2025-10-01',
    deadline: '2025-12-31',
    totalVotes: 84200,
    votedOption: 2,
    options: [
      { text: 'Excellent – highly satisfied',     votes: 12840 },
      { text: 'Good – mostly satisfied',          votes: 28450 },
      { text: 'Average – some issues persist',    votes: 26300 },
      { text: 'Poor – significant problems',      votes: 12810 },
      { text: 'Very poor – no improvement seen',  votes:  3800 }
    ]
  },
  {
    id: 'POLL-2026-006',
    question: 'Should government schemes have a mandatory mobile app-based progress tracking for beneficiaries?',
    category: 'Policy Feedback',
    status: 'closed',
    createdBy: 'MeitY – Governance Cell',
    createdDate: '2025-11-01',
    deadline: '2026-01-31',
    totalVotes: 47320,
    votedOption: 0,
    options: [
      { text: 'Yes – strongly in favour',          votes: 31200 },
      { text: 'Yes – but optional',                votes:  9880 },
      { text: 'No – prefer in-person / helpline',  votes:  4120 },
      { text: 'No opinion',                        votes:  2120 }
    ]
  },
  {
    id: 'POLL-2026-007',
    question: 'Which sector should receive highest budget priority in Union Budget 2027-28?',
    category: 'Upcoming Survey',
    status: 'upcoming',
    createdBy: 'Ministry of Finance – Budget Division',
    createdDate: '2026-03-05',
    deadline: '2026-04-01',
    totalVotes: 0,
    votedOption: null,
    options: [
      { text: 'Healthcare & Public Health', votes: 0 },
      { text: 'Education & Skill Development', votes: 0 },
      { text: 'Rural Infrastructure', votes: 0 },
      { text: 'Urban Smart Cities', votes: 0 },
      { text: 'Defence & Security', votes: 0 }
    ]
  }
];




var selectedSchemeId = null;
var schemeFilter     = 'all';
var pollSearchVal    = '';
var pollStatusFilter = 'all';
var pollCatFilter    = 'all';




function switchTab(tab) {
    document.querySelectorAll('.sk-tab').forEach(function(t) { t.classList.remove('active'); });
    document.querySelectorAll('.sk-pane').forEach(function(p) { p.classList.remove('active'); });
    document.querySelector('.sk-tab[data-tab="' + tab + '"]').classList.add('active');
    document.getElementById('pane-' + tab).classList.add('active');
}




function refreshStats() {
    var jurSchemes = getJurisdictionFilteredSchemes();
    document.getElementById('skStatTotal').textContent    = jurSchemes.length;
    document.getElementById('skStatActive').textContent   = jurSchemes.filter(function(s){ return s.status==='active'; }).length;
    document.getElementById('skStatUpcoming').textContent = jurSchemes.filter(function(s){ return s.status==='upcoming'; }).length;
    document.getElementById('skStatPolls').textContent    = POLLS.filter(function(p){ return p.status==='active'; }).length;
}




var CAT_ICONS = {
    'Agriculture':'🌾','Health':'🏥','Housing':'🏠','Finance & Livelihood':'💰',
    'Education':'📚','Women & Child':'👩‍👧','Digital Infrastructure':'📡','All':'📋'
};

function setSchemeFilter(btn, cat) {
    schemeFilter = cat;
    document.querySelectorAll('.sk-pill[data-cat]').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    renderSchemeList();
}

function applySchemeFilters() { renderSchemeList(); }

function resetSchemeFilters() {
    document.getElementById('skSchemeSearch').value = '';
    document.getElementById('skSchemeStatus').value = '';
    schemeFilter = 'all';
    document.querySelectorAll('.sk-pill[data-cat]').forEach(function(b){ b.classList.remove('active'); });
    document.querySelector('.sk-pill[data-cat="all"]').classList.add('active');
    renderSchemeList();
}

function catStyle(cat) {
    var map = {
        'Agriculture':          'background:var(--cat-agri-bg);    color:var(--cat-agri);',
        'Health':               'background:var(--cat-health-bg);  color:var(--cat-health);',
        'Housing':              'background:var(--cat-housing-bg); color:var(--cat-housing);',
        'Finance & Livelihood': 'background:var(--cat-finance-bg); color:var(--cat-finance);',
        'Education':            'background:var(--cat-edu-bg);     color:var(--cat-edu);',
        'Women & Child':        'background:var(--cat-women-bg);   color:var(--cat-women);',
        'Digital Infrastructure':'background:var(--cat-digital-bg);color:var(--cat-digital);'
    };
    return map[cat] || 'background:#eee;color:#333;';
}

var STATUS_MAP = { active:'Active', upcoming:'Upcoming', closed:'Closed' };
var STATUS_CLS = { active:'ss-active', upcoming:'ss-upcoming', closed:'ss-closed' };




function getJurisdictionFilteredSchemes() {
    var jur  = window.OFFICER_JURISDICTION || {};
    var role = jur.role || 'national';
    if (role === 'national') return SCHEMES;

    var jurState = jur.jurisdiction || null;
    var jurDist  = jur.district     || null;

    return SCHEMES.filter(function(s) {
        if (!s.states || s.states === 'All India') return true;

        if (s.targetAudience) {
            var ta      = s.targetAudience;
            var states  = ta.states    || ['All'];
            var dists   = ta.districts || [];
            if (states.indexOf('All') > -1 || states.indexOf('All India') > -1) return true;
            if (jurState && states.indexOf(jurState) > -1) return true;
            if (role === 'district' && jurDist && dists.indexOf(jurDist) > -1) return true;
            return false;
        }

        if (typeof s.states === 'string') {
            return jurState ? s.states.indexOf(jurState) > -1 : false;
        }
        if (Array.isArray(s.states)) {
            if (s.states.indexOf('All India') > -1 || s.states.indexOf('All') > -1) return true;
            if (jurState && s.states.indexOf(jurState) > -1) return true;
            if (role === 'district' && jurDist && s.states.indexOf(jurDist) > -1) return true;
        }
        return false;
    });
}

function renderSkJurisdictionBanner() {
    var el   = document.getElementById('skJurBanner');
    if (!el) return;
    var jur  = window.OFFICER_JURISDICTION || {};
    var role = jur.role || 'national';
    if (role === 'national') { el.style.display = 'none'; return; }

    var color, bg, icon, scope, note;
    if (role === 'district') {
        bg    = '#e8f5e9'; color = '#2e7d32'; icon = '\uD83C\uDF96\uFE0F District Officer';
        scope = (jur.district || '') + ', ' + (jur.jurisdiction || '');
        note  = 'Showing national schemes + schemes applicable to your district';
    } else {
        bg    = '#e3f2fd'; color = '#1565c0'; icon = '\uD83C\uDFDB\uFE0F State Officer';
        scope = jur.jurisdiction || '';
        note  = 'Showing national schemes + schemes applicable to your state';
    }
    el.style.display = 'flex';
    el.innerHTML =
        '<span style="background:' + bg + ';color:' + color + ';padding:3px 12px;border-radius:20px;font-weight:700;font-size:12px;white-space:nowrap;">' + icon + '</span>' +
        '<span style="font-weight:600;color:#1e293b;font-size:13px;">' + scope + '</span>' +
        '<span style="color:#64748b;font-size:12px;">\u2014 ' + note + '</span>';
}

function renderSchemeList() {
    var search     = (document.getElementById('skSchemeSearch').value || '').toLowerCase();
    var status     = document.getElementById('skSchemeStatus').value;
    var jurSchemes = getJurisdictionFilteredSchemes();
    var list       = jurSchemes.filter(function(s) {
        if (schemeFilter !== 'all' && s.category !== schemeFilter) return false;
        if (status && s.status !== status) return false;
        if (search && s.title.toLowerCase().indexOf(search) === -1 &&
            s.ministry.toLowerCase().indexOf(search) === -1 &&
            s.id.toLowerCase().indexOf(search) === -1) return false;
        return true;
    });
    document.getElementById('skSchemeCount').textContent = list.length + ' / ' + jurSchemes.length;
    var container = document.getElementById('skSchemeList');
    if (!list.length) {
        container.innerHTML = '<div style="text-align:center;padding:24px;color:var(--text-muted);font-size:12px;">No schemes match the filters.</div>';
        return;
    }
    container.innerHTML = list.map(function(s) {
        return '<div class="sc-card' + (s.id === selectedSchemeId ? ' active' : '') + '" onclick="selectScheme(\'' + s.id + '\')">' +
            '<div class="sc-card-top">' +
            '<span class="sc-cat-badge" style="' + catStyle(s.category) + '">' + (CAT_ICONS[s.category] || '📋') + ' ' + s.category + '</span>' +
            '<div class="sc-badges"><span class="sc-status-badge ' + STATUS_CLS[s.status] + '">' + STATUS_MAP[s.status] + '</span>' +
            '<button class="sc-delete-btn" onclick="event.stopPropagation();deleteScheme(\'' + s.id + '\')" title="Delete scheme">🗑</button></div>' +
            '</div>' +
            '<div class="sc-title">' + s.title + '</div>' +
            '<div class="sc-meta"><span class="sc-ministry">🏛 ' + s.ministry.replace('Ministry of ','Min. of ') + '</span>' +
            '<span>👥 ' + s.beneficiaries + '</span></div>' +
            '<span class="sc-budget-tag">💰 ' + s.budget + '</span>' +
            '</div>';
    }).join('');
}




function selectScheme(id) {
    selectedSchemeId = id;
    var s = SCHEMES.find(function(x){ return x.id === id; });
    if (!s) return;
    document.querySelectorAll('.sc-card').forEach(function(c){
        var active = c.getAttribute('onclick') && c.getAttribute('onclick').indexOf(id) > -1;
        c.classList.toggle('active', active);
    });
    document.getElementById('skPlaceholder').style.display = 'none';
    var el = document.getElementById('skDetail');
    el.style.display = 'block';
    el.innerHTML = buildSchemeDetail(s);
}

var DOC_ICONS = { 'PDF':'📄', 'Excel':'📊', 'Word':'📝', 'PPT':'📊', 'Image':'🖼' };

function buildSchemeDetail(s) {
    var html = '';
    html += '<div class="sd-card">';
    html += '<div class="sd-header">';
    html += '<div><div class="sd-id">' + s.id + '</div>';
    html += '<div class="sd-title">' + s.title + '</div></div>';
    html += '<div class="sd-badges"><span class="sc-cat-badge" style="' + catStyle(s.category) + '">' + s.category + '</span>' +
            '<span class="sc-status-badge ' + STATUS_CLS[s.status] + '">' + STATUS_MAP[s.status] + '</span></div>';
    html += '</div>';
    html += '<div class="sd-desc">' + s.description + '</div>';
    html += '<div class="sd-grid" style="margin-top:12px;">';
    html += '<div class="sd-item"><span class="sd-lbl">Ministry</span><span class="sd-val">🏛 ' + s.ministry + '</span></div>';
    html += '<div class="sd-item"><span class="sd-lbl">Budget Allocation</span><span class="sd-val">💰 ' + s.budget + '</span></div>';
    html += '<div class="sd-item"><span class="sd-lbl">Launch Date</span><span class="sd-val">📅 ' + s.launch + '</span></div>';
    html += '<div class="sd-item"><span class="sd-lbl">Target Deadline</span><span class="sd-val">🏁 ' + s.deadline + '</span></div>';
    html += '<div class="sd-item sd-grid-full"><span class="sd-lbl">Estimated Beneficiaries</span><span class="sd-val">👥 ' + s.beneficiaries + '</span></div>';
    html += '</div></div>';

    html += '<div class="sd-card">';
    html += '<div class="sd-lbl" style="margin-bottom:8px;">🎁 KEY BENEFITS</div>';
    html += '<div class="sd-benefits">';
    s.benefits.forEach(function(b){ html += '<span class="sd-benefit-chip">' + b + '</span>'; });
    html += '</div></div>';

    html += '<div class="sd-card">';
    html += '<div class="sd-lbl" style="margin-bottom:8px;">✅ ELIGIBILITY CRITERIA</div>';
    html += '<div class="sd-eligibility">';
    s.eligibility.forEach(function(e){
        html += '<div class="sd-elig-item"><div class="sd-elig-dot"></div><div>' + e + '</div></div>';
    });
    html += '</div></div>';

    html += '<div class="sd-card">';
    html += '<div class="sd-lbl" style="margin-bottom:8px;">📁 SCHEME DOCUMENTS</div>';
    html += '<div class="sd-doc-list">';
    s.documents.forEach(function(d){
        html += '<div class="sd-doc-item" onclick="downloadDoc(\'' + d.name + '\')">' +
            '<span class="sd-doc-icon">' + (DOC_ICONS[d.type]||'📄') + '</span>' +
            '<span class="sd-doc-name">' + d.name + '</span>' +
            '<span class="sd-doc-type">' + d.type + ' &bull; ' + d.size + '</span>' +
            '<span class="sd-doc-dl">⬇ Download</span>' +
            '</div>';
    });
    html += '</div>';
    html += '<div class="sd-upload-zone" onclick="triggerUpload(\'' + s.id + '\')" ondragover="event.preventDefault();this.classList.add(\'dragover\')" ondragleave="this.classList.remove(\'dragover\')" ondrop="handleDrop(event,\'' + s.id + '\')">';
    html += '<span class="sd-upload-icon">☁</span>';
    html += '<div class="sd-upload-text"><strong>Click or drag & drop</strong> to upload new scheme document</div>';
    html += '<div class="sd-upload-text" style="margin-top:4px;font-size:10px;">Accepted: PDF, Excel, Word, PPT, Images (max 50 MB)</div>';
    html += '</div>';
    html += '<input type="file" id="schemeFileInput_' + s.id + '" class="sd-upload-input" multiple accept=".pdf,.xlsx,.xls,.docx,.pptx,.jpg,.png" onchange="handleFileSelect(event,\'' + s.id + '\')">';
    html += '</div>';

    html += '<div class="sd-card">';
    html += '<div class="sd-action-row">';
    html += '<button class="sd-btn sd-btn-primary" onclick="openShareModal(\'' + s.id + '\')">📤 Share Scheme</button>';
    html += '<button class="sd-btn sd-btn-orange"  onclick="openCreatePollForScheme(\'' + s.id + '\')">📊 Create Poll</button>';
    if (s.status === 'active') {
        html += '<button class="sd-btn sd-btn-outline" onclick="applyScheme(\'' + s.id + '\')">📝 Apply / Register</button>';
    }
    html += '<button class="sd-btn sd-btn-danger" onclick="deleteScheme(\'' + s.id + '\')">🗑 Delete Scheme</button>';
    html += '</div></div>';
    return html;
}

function downloadDoc(name) { showToast('Downloading: ' + name + '…'); }
function applyScheme(id) {
    var s = SCHEMES.find(function(x){ return x.id === id; });
    showToast('Redirecting to official portal for: ' + (s ? s.title : '') + '…');
}
function openShareModal(id) {
    var s = SCHEMES.find(function(x){ return x.id === id; });
    showToast('Share link copied: portal.gov.in/schemes/' + id);
}
function openCreatePollForScheme(id) {
    var s = SCHEMES.find(function(x){ return x.id === id; });
    document.getElementById('pollSchemeName').value = s ? s.title : '';
    openCreatePollModal();
}




function triggerUpload(schemeId) {
    document.getElementById('schemeFileInput_' + schemeId).click();
}
function handleFileSelect(event, schemeId) {
    var files = Array.from(event.target.files);
    if (!files.length) return;
    var s = SCHEMES.find(function(x){ return x.id === schemeId; });
    files.forEach(function(f){
        var ext = f.name.split('.').pop().toUpperCase();
        var typeMap = { PDF:'PDF', XLSX:'Excel', XLS:'Excel', DOCX:'Word', PPTX:'PPT', JPG:'Image', PNG:'Image' };
        var size = f.size > 1024*1024 ? (f.size/1024/1024).toFixed(1)+' MB' : Math.round(f.size/1024)+' KB';
        s.documents.push({ name: f.name, type: typeMap[ext] || ext, size: size });
    });
    showToast(files.length + ' file(s) uploaded successfully!');
    selectScheme(schemeId);
}
function handleDrop(event, schemeId) {
    event.preventDefault();
    event.currentTarget.classList.remove('dragover');
    var dt = event.dataTransfer;
    if (dt && dt.files.length) {
        var fakeEvt = { target: { files: dt.files } };
        handleFileSelect(fakeEvt, schemeId);
    }
}




function openAddSchemeModal() {
    document.getElementById('addSchemeForm').reset();
    var wrap = document.getElementById('nsStateFieldWrap');
    if (wrap) wrap.style.display = 'none';
    var dw = document.getElementById('nsDistrictFieldWrap');
    if (dw) dw.style.display = 'none';

    var jur  = window.OFFICER_JURISDICTION || {};
    var role = jur.role || 'national';
    if (role === 'state' || role === 'district') {
        var scopeSel = document.getElementById('nsStateScope');
        var stateEl  = document.getElementById('nsTargetState');
        var distEl   = document.getElementById('nsTargetDistrict');
        if (scopeSel) { scopeSel.value = role; toggleNsStateField(); }
        if (stateEl && jur.jurisdiction) stateEl.value = jur.jurisdiction;
        if (role === 'district' && distEl && jur.district) distEl.value = jur.district;
    }

    document.getElementById('addSchemeModal').style.display = 'flex';
}
function closeAddSchemeModal() { document.getElementById('addSchemeModal').style.display = 'none'; }
function toggleNsStateField() {
    var scope = (document.getElementById('nsStateScope').value || 'all');
    var wrap = document.getElementById('nsStateFieldWrap');
    var dw   = document.getElementById('nsDistrictFieldWrap');
    if (!wrap) return;
    if (scope === 'all') {
        wrap.style.display = 'none';
        if (dw) dw.style.display = 'none';
    } else {
        wrap.style.display = 'grid';
        if (dw) dw.style.display = scope === 'district' ? 'block' : 'none';
    }
}
function submitAddScheme() {
    var title    = (document.getElementById('nsMiniTitle').value||'').trim();
    var ministry = (document.getElementById('nsMinistry').value||'').trim();
    var category = document.getElementById('nsCategory').value;
    var budget   = (document.getElementById('nsBudget').value||'').trim();
    var bene     = (document.getElementById('nsBene').value||'').trim();
    var desc     = (document.getElementById('nsDesc').value||'').trim();
    var launch   = document.getElementById('nsLaunch').value;
    var deadline = document.getElementById('nsDeadline').value;
    
    if (!title || !ministry || !category || !desc) { 
        showToast('Please fill required fields.'); 
        return; 
    }
    
    var scope = document.getElementById('nsStateScope') ? document.getElementById('nsStateScope').value : 'all';
    var targetStates = ['All'];
    var targetDistricts = [];
    if (scope === 'state' || scope === 'district') {
        var st = document.getElementById('nsTargetState') ? document.getElementById('nsTargetState').value : '';
        if (st) targetStates = [st];
    }
    if (scope === 'district') {
        var dist = document.getElementById('nsTargetDistrict') ? (document.getElementById('nsTargetDistrict').value||'').trim() : '';
        if (dist) targetDistricts = [dist];
    }

    var targetOccupations = [];
    document.querySelectorAll('input[name="targetOccupation"]:checked').forEach(function(cb) {
        targetOccupations.push(cb.value);
    });
    
    var targetAgeGroups = [];
    document.querySelectorAll('input[name="targetAgeGroup"]:checked').forEach(function(cb) {
        targetAgeGroups.push(cb.value);
    });
    
    var targetIncome = [];
    document.querySelectorAll('input[name="targetIncome"]:checked').forEach(function(cb) {
        targetIncome.push(cb.value);
    });
    
    var targetEducation = [];
    document.querySelectorAll('input[name="targetEducation"]:checked').forEach(function(cb) {
        targetEducation.push(cb.value);
    });
    
    var requiresDisability = document.getElementById('requiresDisability').checked;
    var requiresSeniorCitizen = document.getElementById('requiresSeniorCitizen').checked;
    var requiresMinority = document.getElementById('requiresMinority').checked;
    
    if (targetOccupations.length === 0) targetOccupations.push('All');
    if (targetAgeGroups.length === 0) targetAgeGroups.push('All');
    if (targetIncome.length === 0) targetIncome.push('All');
    if (targetEducation.length === 0) targetEducation.push('All');
    
    var newId = 'SCH-2026-' + String(SCHEMES.length + 1).padStart(3,'0');
    
    var schemeData = {
        id: newId, 
        name: title,
        title: title, 
        category: category, 
        ministry: ministry,
        status: 'upcoming', 
        budget: budget || 'To be announced',
        launch: launch || 'TBD', 
        deadline: deadline || 'TBD',
        beneficiaries: bene || 'To be determined', 
        description: desc,
        eligibility: ['To be notified'], 
        benefits: ['To be announced'],
        documents: [], 
        states: 'All India', 
        tags: [category],
        link: '',
        targetAudience: {
            occupations: targetOccupations,
            ageGroups: targetAgeGroups,
            incomeCategories: targetIncome,
            education: targetEducation,
            requiresDisability: requiresDisability,
            requiresSeniorCitizen: requiresSeniorCitizen,
            requiresMinority: requiresMinority,
            states: targetStates,
            districts: targetDistricts
        },
        createdAt: new Date().toISOString(),
        createdBy: localStorage.getItem('officerName') || 'Unknown'
    };
    
    SCHEMES.unshift(schemeData);
    
    if (typeof db !== 'undefined' && typeof addDoc !== 'undefined') {
        addDoc(collection(db, 'schemes'), schemeData)
            .then(function() {
                console.log('Scheme saved to Firestore');
            })
            .catch(function(error) {
                console.error('Error saving to Firestore:', error);
                showToast('Warning: Scheme added locally but not saved to cloud');
            });
    }
    
    closeAddSchemeModal();
    refreshStats();
    renderSchemeList();
    showToast('Scheme "' + title + '" added successfully with personalized targeting! 🎯');
}




var BAR_COLORS = ['pbc-1','pbc-2','pbc-3','pbc-4','pbc-5'];

function applyPollFilters() {
    pollSearchVal    = (document.getElementById('pollSearch').value||'').toLowerCase();
    pollStatusFilter = document.getElementById('pollStatusFilter').value;
    pollCatFilter    = document.getElementById('pollCatFilter').value;
    renderPolls();
}


function renderDashPolls() {
    var grid = document.getElementById('dashPollsGrid');
    var badge = document.getElementById('dashPollsBadge');
    if (!grid) return;

    var search = (document.getElementById('dashPollSearch') ? document.getElementById('dashPollSearch').value : '').toLowerCase();
    var filter = document.getElementById('dashPollFilter') ? document.getElementById('dashPollFilter').value : '';

    var list = POLLS.filter(function(p) {
        if (filter && p.status !== filter) return false;
        if (search && p.question.toLowerCase().indexOf(search) === -1 &&
            p.category.toLowerCase().indexOf(search) === -1) return false;
        return true;
    });

    var active = POLLS.filter(function(p){ return p.status==='active'; }).length;
    if (badge) badge.textContent = active + ' Active';

    if (!list.length) {
        grid.innerHTML = '<div style="text-align:center;padding:32px;color:var(--text-muted);">No polls match the filters.</div>';
        return;
    }
    grid.innerHTML = list.map(buildPollCard).join('');
}

function updatePollsSummary() {
    var total    = POLLS.length;
    var active   = POLLS.filter(function(p){return p.status==='active';}).length;
    var upcoming = POLLS.filter(function(p){return p.status==='upcoming';}).length;
    var closed   = POLLS.filter(function(p){return p.status==='closed';}).length;
    var votes    = POLLS.reduce(function(a,p){
        return a + (p.totalVotes || p.options.reduce(function(b,o){return b+o.votes;},0));
    }, 0);
    var fmt = function(n){ return n >= 1000 ? (n/1000).toFixed(1)+'K' : String(n); };
    function setEl(id,v){var el=document.getElementById(id);if(el)el.textContent=v;}
    setEl('psSumTotal',    total);
    setEl('psSumActive',   active);
    setEl('psSumVotes',    fmt(votes));
    setEl('psSumUpcoming', upcoming);
    setEl('psSumClosed',   closed);
}

function renderPolls() {
    updatePollsSummary();
    var list = POLLS.filter(function(p){
        if (pollStatusFilter && p.status !== pollStatusFilter) return false;
        if (pollCatFilter    && p.category !== pollCatFilter) return false;
        if (pollSearchVal    && p.question.toLowerCase().indexOf(pollSearchVal)===-1 &&
            p.category.toLowerCase().indexOf(pollSearchVal)===-1) return false;
        return true;
    });
    var grid = document.getElementById('pollsGrid');
    if (!list.length) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted);">No polls match the filters.</div>';
        return;
    }
    grid.innerHTML = list.map(buildPollCard).join('');
}

var PS_CLS = { active:'ps-active', closed:'ps-closed', draft:'ps-draft', upcoming:'ps-upcoming' };
var PS_LBL = { active:'🟢 Active', closed:'🔒 Closed', draft:'📝 Draft', upcoming:'🔵 Upcoming' };

function buildPollCard(p) {
    var total  = p.totalVotes || p.options.reduce(function(a,o){ return a+o.votes; },0);
    var isActive  = p.status === 'active';
    var isUpcoming = p.status === 'upcoming';
    var daysLeft = Math.ceil((new Date(p.deadline) - new Date()) / 86400000);
    var dlCls = daysLeft <= 7 && isActive ? 'poll-deadline near' : 'poll-deadline';
    var dlTxt = isActive
        ? (daysLeft > 0 ? daysLeft + ' days left' : 'Closing today!')
        : (daysLeft > 0 ? 'Opens in ' + daysLeft + ' days' : 'Closed ' + Math.abs(daysLeft) + ' days ago');

    var optHtml = '';
    if (isUpcoming) {
        optHtml = '<div class="poll-upcoming-msg">&#128197; This poll opens on ' + p.deadline + '</div>';
    } else {
        optHtml = p.options.map(function(opt, i) {
            var pct   = total > 0 ? Math.round(opt.votes / total * 100) : 0;
            var voted = p.votedOption === i;
            var barW  = Math.max(pct, 2);
            var cls   = BAR_COLORS[i % BAR_COLORS.length];
            var clickAttr = (isActive && p.votedOption === null)
                ? 'onclick="castVote(\'' + p.id + '\',' + i + ')"'
                : '';
            return '<div class="poll-opt">' +
                '<div class="poll-opt-lbl">' +
                '<span class="poll-opt-text">' + (voted ? '✔ ' : '') + opt.text + '</span>' +
                '<span class="poll-opt-pct">' + pct + '%</span>' +
                '</div>' +
                '<div class="poll-bar-bg' + (p.votedOption !== null ? ' voted' : '') + '" ' + clickAttr + ' title="' + (isActive && p.votedOption===null ? 'Click to vote' : opt.votes.toLocaleString() + ' votes') + '">' +
                '<div class="poll-bar-fill ' + cls + '" style="width:' + barW + '%"><span>' + opt.votes.toLocaleString() + '</span></div>' +
                '</div></div>';
        }).join('');
        if (p.votedOption !== null) {
            optHtml += '<div class="poll-voted-label">✅ You have voted in this poll</div>';
        } else if (isActive) {
            optHtml += '<div class="poll-vote-hint">&#9998; Click a bar to vote</div>';
        }
    }

    return '<div class="poll-card s-' + p.status + (p.featured ? ' poll-card-featured' : '') + '">' +
        '<div class="poll-card-head">' +
        '<div class="poll-card-top">' +
        '<span class="poll-card-id">' + p.id + ' &bull; ' + p.category + '</span>' +
        '<div class="poll-card-badges">' +
        (p.featured ? '<span class="poll-featured-badge">&#11088; Featured</span>' : '') +
        '<span class="poll-status-badge ' + PS_CLS[p.status] + '">' + PS_LBL[p.status] + '</span>' +
        '</div>' +
        '</div>' +
        '<div class="poll-question">' + p.question + '</div>' +
        (p.description ? '<p class="poll-description">' + p.description + '</p>' : '') +
        '<div class="poll-meta">' +
        '<span>&#127963; ' + p.createdBy + '</span>' +
        '<span>&#128197; ' + p.createdDate + '</span>' +
        (p.audience ? '<span class="poll-audience-tag">&#128101; ' + p.audience + '</span>' : '') +
        '</div></div>' +
        '<div class="poll-options">' + optHtml + '</div>' +
        '<div class="poll-card-foot">' +
        '<span class="poll-total-votes">&#128499; ' + total.toLocaleString() + ' votes</span>' +
        '<span class="' + dlCls + '">&#9201; ' + dlTxt + '</span>' +
        '<button class="poll-share-btn" onclick="sharePoll(\'' + p.id + '\')">Share</button>' +
        '</div>' +
        '<div class="poll-mgmt-row">' +
        '<button class="poll-mgmt-btn pm-analytics" onclick="openPollAnalytics(\'' + p.id + '\')">&#128202; Analytics</button>' +
        (p.status !== 'closed' ? '<button class="poll-mgmt-btn pm-close" onclick="closePoll(\'' + p.id + '\')">&#128274; Close Poll</button>' : '') +
        '<button class="poll-mgmt-btn pm-delete" onclick="deletePoll(\'' + p.id + '\')">&#128465; Delete</button>' +
        '</div>' +
        '</div>';
}

function castVote(pollId, optionIdx) {
    var p = POLLS.find(function(x){ return x.id === pollId; });
    if (!p || p.status !== 'active' || p.votedOption !== null) return;
    p.options[optionIdx].votes++;
    p.votedOption = optionIdx;
    p.totalVotes = p.options.reduce(function(a,o){ return a+o.votes; },0);
    renderPolls();
    showToast('Vote cast for: "' + p.options[optionIdx].text + '"');
}

function sharePoll(id) { showToast('Poll link copied: portal.gov.in/polls/' + id); }





function closePoll(id) {
    var p = POLLS.find(function(x){ return x.id === id; });
    if (!p || p.status === 'closed') return;
    p.status = 'closed';
    refreshStats();
    renderPolls();
    showToast('Poll "' + p.id + '" has been closed.');
}

function deleteScheme(id) {
    var s = SCHEMES.find(function(x){ return x.id === id; });
    if (!s) return;
    if (!window.confirm('Delete scheme "' + s.title + '"? This cannot be undone.')) return;
    SCHEMES.splice(SCHEMES.indexOf(s), 1);
    if (selectedSchemeId === id) {
        selectedSchemeId = null;
        document.getElementById('skPlaceholder').style.display = '';
        var el = document.getElementById('skDetail');
        if (el) el.style.display = 'none';
    }
    refreshStats();
    renderSchemeList();
    showToast('Scheme deleted successfully.');
}

function deletePoll(id) {
    var p = POLLS.find(function(x){ return x.id === id; });
    if (!p) return;
    if (!window.confirm('Delete poll "' + p.id + '"? This cannot be undone.')) return;
    POLLS.splice(POLLS.indexOf(p), 1);
    refreshStats();
    renderPolls();
    showToast('Poll deleted successfully.');
}

function openPollAnalytics(id) {
    var p     = POLLS.find(function(x){ return x.id === id; });
    if (!p) return;
    var total = p.totalVotes || p.options.reduce(function(a,o){ return a + o.votes; }, 0);
    var body  = document.getElementById('pollAnalyticsBody');
    var html  = '';
    html += '<div class="pa-question">' + p.question + '</div>';
    html += '<div class="pa-meta">';
    html += '<span class="poll-status-badge ' + PS_CLS[p.status] + '">' + PS_LBL[p.status] + '</span>';
    html += '<span>&#127963; ' + p.createdBy + '</span>';
    html += '<span>&#128203; ' + p.category + '</span>';
    if (p.audience) html += '<span class="poll-audience-tag">&#128101; ' + p.audience + '</span>';
    html += '<span style="margin-left:auto;font-weight:700;color:var(--text-primary);">&#128499; ' + total.toLocaleString() + ' total votes</span>';
    html += '</div>';
    html += '<div class="pa-chart">';
    p.options.forEach(function(opt, i) {
        var pct = total > 0 ? Math.round(opt.votes / total * 100) : 0;
        var cls = BAR_COLORS[i % BAR_COLORS.length];
        html += '<div class="pa-opt-row">';
        html += '<div class="pa-opt-label"><span class="pa-opt-text">' + opt.text + '</span>' +
                '<span class="pa-opt-val">' + pct + '% &bull; ' + opt.votes.toLocaleString() + ' votes</span></div>';
        html += '<div class="pa-bar-track"><div class="pa-bar ' + cls + '" style="width:' + Math.max(pct, 2) + '%"></div></div>';
        html += '</div>';
    });
    html += '</div>';
    html += '<div class="pa-footer-info">' +
            '<span>&#128197; Created: ' + p.createdDate + '</span>' +
            '<span>&#9201; Deadline: ' + p.deadline + '</span>' +
            '</div>';
    body.innerHTML = html;
    document.getElementById('pollAnalyticsModal').style.display = 'flex';
}

function closePollAnalytics() {
    document.getElementById('pollAnalyticsModal').style.display = 'none';
}

function exportPollResults() {
    showToast('Exporting poll results as CSV\u2026');
    closePollAnalytics();
}




var pollOptionCount = 4;
function selectPollChip(el, fieldId, groupId) {
    document.getElementById(groupId).querySelectorAll('.sk-chip').forEach(function(c) { c.classList.remove('active'); });
    el.classList.add('active');
    var h = document.getElementById(fieldId);
    if (h) h.value = el.dataset.value;
}
function openCreatePollModal() {
    document.getElementById('createPollForm').reset();
    var qc = document.getElementById('pollQChar');
    if (qc) qc.textContent = '0/200';
    var catChips = document.getElementById('pollCategoryChips');
    if (catChips) catChips.querySelectorAll('.sk-chip').forEach(function(c) { c.classList.remove('active'); });
    var catH = document.getElementById('pollCategory');
    if (catH) catH.value = '';
    var audChips = document.getElementById('pollAudienceChips');
    if (audChips) {
        audChips.querySelectorAll('.sk-chip').forEach(function(c) { c.classList.remove('active'); });
        var first = audChips.querySelector('.sk-chip');
        if (first) { first.classList.add('active'); }
    }
    var audH = document.getElementById('pollAudience');
    if (audH) audH.value = '';
    pollOptionCount = 4;
    rebuildPollOptsUI();
    document.getElementById('createPollModal').style.display = 'flex';
}
function closeCreatePollModal() { document.getElementById('createPollModal').style.display = 'none'; }

function rebuildPollOptsUI() {
    var container = document.getElementById('pollOptsContainer');
    var html = '';
    for (var i = 0; i < pollOptionCount; i++) {
        html += '<div class="poll-opt-row" id="pollOptRow_' + i + '">' +
            '<div class="poll-opt-num">' + (i+1) + '</div>' +
            '<input type="text" placeholder="Option ' + (i+1) + '…" id="pollOpt_' + i + '">' +
            (i >= 2 ? '<button class="poll-opt-del" onclick="removePollOpt(' + i + ')" title="Remove">✕</button>' : '<span style="width:32px;display:inline-block;flex-shrink:0;"></span>') +
            '</div>';
    }
    container.innerHTML = html;
}
function addPollOpt() {
    if (pollOptionCount >= 5) { showToast('Maximum 5 options allowed.'); return; }
    pollOptionCount++;
    rebuildPollOptsUI();
}
function removePollOpt(idx) {
    if (pollOptionCount <= 2) { showToast('Minimum 2 options required.'); return; }
    pollOptionCount--;
    rebuildPollOptsUI();
}

function submitCreatePoll() {
    var question = (document.getElementById('pollQuestion').value||'').trim();
    var category = document.getElementById('pollCategory').value;
    var deadline = document.getElementById('pollDeadline').value;
    var creator     = (document.getElementById('pollCreator').value||'').trim() || 'Admin';
    var audience    = document.getElementById('pollAudience')  ? document.getElementById('pollAudience').value  : '';
    var featured    = document.getElementById('pollFeatured')  ? document.getElementById('pollFeatured').checked : false;
    var pollDesc    = document.getElementById('pollDesc')      ? (document.getElementById('pollDesc').value||'').trim() : '';
    if (!question || !category || !deadline) { showToast('Please fill all required fields.'); return; }
    var opts = [];
    for (var i = 0; i < pollOptionCount; i++) {
        var v = (document.getElementById('pollOpt_' + i) ? document.getElementById('pollOpt_' + i).value : '').trim();
        if (v) opts.push({ text: v, votes: 0 });
    }
    if (opts.length < 2) { showToast('Please enter at least 2 options.'); return; }
    var today   = new Date().toISOString().slice(0,10);
    var isUpcoming = deadline > today;
    var newId = 'POLL-2026-' + String(POLLS.length + 1).padStart(3,'0');
    POLLS.unshift({
        id: newId, question: question, category: category,
        status: isUpcoming ? 'upcoming' : 'active',
        createdBy: creator, createdDate: today,
        deadline: deadline, totalVotes: 0, votedOption: null,
        options: opts,
        audience:    audience    || undefined,
        featured:    featured    || undefined,
        description: pollDesc    || undefined
    });
    closeCreatePollModal();
    refreshStats();
    renderPolls();
    showToast('Poll "' + newId + '" created successfully!');
}




function showToast(msg) {
    var t = document.getElementById('skToast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(function(){ t.classList.remove('show'); }, 3500);
}
function toggleSKTheme() { document.body.classList.toggle('dark-theme'); }




(function _skInit() {
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', _skInit); return; }
    document.getElementById('addSchemeModal').addEventListener('click', function(e){ if(e.target===this)closeAddSchemeModal(); });
    document.getElementById('createPollModal').addEventListener('click', function(e){ if(e.target===this)closeCreatePollModal(); });
    var paModal = document.getElementById('pollAnalyticsModal');
    if (paModal) paModal.addEventListener('click', function(e){ if(e.target===this)closePollAnalytics(); });
    var annModal = document.getElementById('announcementModal');
    if (annModal) annModal.addEventListener('click', function(e){ if(e.target===this)closeAnnouncementModal(); });
    refreshStats();
    renderSchemeList();
    renderPolls();
    renderSkJurisdictionBanner();
})();


function openAnnouncementModal() {
    var el = document.getElementById('announcementModal');
    if (!el) return;
    document.getElementById('annTitle').value = '';
    document.getElementById('annBody').value = '';
    document.getElementById('annCategory').value = 'General';
    document.getElementById('annPriority').value = 'normal';
    document.getElementById('annScope').value = 'all';
    document.getElementById('annGeoWrap').style.display = 'none';
    el.style.display = 'flex';
}
function closeAnnouncementModal() {
    var el = document.getElementById('announcementModal');
    if (el) el.style.display = 'none';
}
function toggleAnnGeoFields() {
    var scope = document.getElementById('annScope').value;
    var wrap = document.getElementById('annGeoWrap');
    var dw   = document.getElementById('annDistrictWrap');
    if (!wrap) return;
    wrap.style.display = (scope === 'all') ? 'none' : 'grid';
    if (dw) dw.style.display = (scope === 'district') ? 'block' : 'none';
}
function submitAnnouncement() {
    var title    = (document.getElementById('annTitle').value||'').trim();
    var body     = (document.getElementById('annBody').value||'').trim();
    var category = document.getElementById('annCategory').value;
    var priority = document.getElementById('annPriority').value;
    var scope    = document.getElementById('annScope').value;

    if (!title || !body) { showToast('Please fill Title and Message.'); return; }

    var targetStates = ['All'];
    var targetDistricts = [];
    if (scope === 'state' || scope === 'district') {
        var st = (document.getElementById('annState').value||'').trim();
        if (st) targetStates = [st];
    }
    if (scope === 'district') {
        var dist = (document.getElementById('annDistrict').value||'').trim();
        if (dist) targetDistricts = [dist];
    }

    var annData = {
        title: title,
        body: body,
        category: category,
        priority: priority,
        targetStates: targetStates,
        targetDistricts: targetDistricts,
        createdAt: new Date().toISOString(),
        createdBy: localStorage.getItem('officerName') || 'Government Official',
        type: 'gov_announcement'
    };

    if (typeof db !== 'undefined' && typeof addDoc !== 'undefined') {
        addDoc(collection(db, 'gov_announcements'), annData)
            .then(function() {
                showToast('📢 Announcement broadcast to citizens!');
                closeAnnouncementModal();
            })
            .catch(function(err) {
                console.error('Error broadcasting:', err);
                showToast('Error: ' + err.message);
            });
    } else {
        showToast('Firestore not available.');
    }
}
