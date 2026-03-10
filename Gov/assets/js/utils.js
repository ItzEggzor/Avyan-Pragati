


const translations = {
    en: {
        bharatMandapam: 'Avyan Pragati',
        governmentPortal: 'Government Portal',
        services: 'Services',
        myTasks: 'My Tasks',
        reports: 'Reports',
        settings: 'Settings',
        logout: 'Logout',
        home: 'Home',
        digitalTwin: 'Digital Twin',
        projectLifecycle: 'Project Lifecycle',
        ombudsmanDesk: 'Ombudsman Desk',
        schemesDesk: 'Schemes Desk',
        main: 'Main',
        switchboard: 'Switchboard',
        pending: 'Pending',
        approved: 'Approved',
        total: 'Total',
        viewAll: 'View All',
        language: 'Language',
        signIn: 'Sign In',
        forgotPassword: 'Forgot Password?',
        rememberMe: 'Remember me',
    },
    hi: {
        bharatMandapam: 'भारत मंडपम',
        governmentPortal: 'सरकारी पोर्टल',
        services: 'सेवाएं',
        myTasks: 'मेरे कार्य',
        reports: 'रिपोर्ट',
        settings: 'सेटिंग्स',
        logout: 'लॉगआउट',
        home: 'होम',
        digitalTwin: 'डिजिटल ट्विन',
        projectLifecycle: 'प्रोजेक्ट जीवनचक्र',
        ombudsmanDesk: 'लोकपाल कार्यालय',
        schemesDesk: 'योजना कार्यालय',
        main: 'मुख्य',
        switchboard: 'स्विचबोर्ड',
        pending: 'लंबित',
        approved: 'मंजूर',
        total: 'कुल',
        viewAll: 'सभी देखें',
        language: 'भाषा',
        signIn: 'साइन इन करें',
        forgotPassword: 'पासवर्ड भूल गए?',
        rememberMe: 'मुझे याद रखें',
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';


function toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark);

    const icon = document.querySelector('.theme-icon');
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
}


function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    document.querySelectorAll('.translatable').forEach(el => {
        const val = el.getAttribute('data-' + lang);
        if (val) el.textContent = val;
    });

    document.querySelectorAll('.translatable-placeholder').forEach(el => {
        const ph = el.getAttribute('data-placeholder-' + lang);
        if (ph) el.placeholder = ph;
    });
}


function togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.type = field.type === 'password' ? 'text' : 'password';
}


function showToast(message, duration) {
    duration = duration || 3000;

    if (!document.getElementById('__toast-style__')) {
        const s = document.createElement('style');
        s.id = '__toast-style__';
        s.textContent = `
            @keyframes __slideOut__ {
                to { transform: translateX(400px); opacity: 0; }
            }`;
        document.head.appendChild(s);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = '__slideOut__ 0.3s ease-in-out forwards';
        setTimeout(() => toast.remove(), 320);
    }, duration);
}

var showNotification = showToast;


function addRippleEffect() {
    if (!document.getElementById('__ripple-style__')) {
        const s = document.createElement('style');
        s.id = '__ripple-style__';
        s.textContent = `
            @keyframes __ripple__ {
                to { transform: scale(4); opacity: 0; }
            }
            .ripple-target { position: relative; overflow: hidden; }`;
        document.head.appendChild(s);
    }

    document.querySelectorAll('button').forEach(btn => {
        if (btn.dataset.rippleInit) return;
        btn.dataset.rippleInit = '1';
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position:absolute;
                width:${size}px;height:${size}px;
                left:${e.clientX - rect.left - size / 2}px;
                top:${e.clientY - rect.top - size / 2}px;
                border-radius:50%;
                background:rgba(255,255,255,0.45);
                pointer-events:none;
                animation:__ripple__ 0.6s ease-out forwards;`;
            if (!this.style.position || this.style.position === 'static') {
                this.style.position = 'relative';
            }
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 640);
        });
    });
}


function toggleMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (!sidebar) return;

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        sidebar.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
    } else {
        sidebar.classList.toggle('collapsed');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) {
        overlay.addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    }
});


function initPreferences(langSelectId) {
    if (localStorage.getItem('darkTheme') === 'true') {
        document.body.classList.add('dark-theme');
        const icon = document.querySelector('.theme-icon');
        if (icon) icon.textContent = '☀️';
    }

    const saved = localStorage.getItem('language') || 'en';
    if (langSelectId) {
        const sel = document.getElementById(langSelectId);
        if (sel) sel.value = saved;
    }
    changeLanguage(saved);
}


var GOV_JUR_STATE_BOUNDS = {
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
var GOV_JUR_DISTRICT_BOUNDS = {
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


(function initJurisdiction() {
    if (window.OFFICER_JURISDICTION) return;
    var raw = localStorage.getItem('officerInfo');
    if (!raw) return;
    try {
        var info = JSON.parse(raw);
        var bounds = null;
        if (info.role === 'state' && info.jurisdiction) {
            bounds = GOV_JUR_STATE_BOUNDS[info.jurisdiction] || null;
        } else if (info.role === 'district' && info.district) {
            bounds = GOV_JUR_DISTRICT_BOUNDS[info.district] || null;
        }
        window.OFFICER_JURISDICTION = {
            role:         info.role         || 'national',
            jurisdiction: info.jurisdiction || null,
            district:     info.district     || null,
            mapCenter:    info.mapCenter    || { lat: 22.5937, lng: 78.9629 },
            mapZoom:      info.mapZoom      || 5,
            mapBounds:    bounds
        };
    } catch (e) {}
}());
