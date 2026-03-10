/* ============================================================
   LOGIN.JS  —  Login form logic  (Multi-Layer Role-Based Access)
   Depends on: utils.js
   ============================================================ */

/* ══════════════════════════════════════════════════════════════
   OFFICER DATABASE  —  Three role tiers: national / state / district
   ══════════════════════════════════════════════════════════════ */
const OFFICER_DB = {

    /* ── NATIONAL LEVEL ──────────────────────────────────── */
    'AGND123456': {
        password:    'admin123',
        name:        'Rajesh Kumar, IAS',
        rank:        'Additional Secretary',
        role:        'national',
        jurisdiction: null,
        district:    null,
        location:    'New Delhi',
        badge:       '⭐⭐⭐⭐⭐',
        color:       '#D4AF37',
        mapCenter:   { lat: 22.5937, lng: 78.9629 },
        mapZoom:     5
    },
    'JSND654321': {
        password:    'admin123',
        name:        'Anita Desai, IAS',
        rank:        'Joint Secretary',
        role:        'national',
        jurisdiction: null,
        district:    null,
        location:    'New Delhi',
        badge:       '⭐⭐⭐⭐',
        color:       '#C0C0C0',
        mapCenter:   { lat: 22.5937, lng: 78.9629 },
        mapZoom:     5
    },

    /* ── STATE LEVEL ─────────────────────────────────────── */
    'ST-MH-2024-001': {
        password:     'State@123',
        name:         'Priya Sharma, IAS',
        rank:         'Principal Secretary',
        role:         'state',
        jurisdiction: 'Maharashtra',
        district:     null,
        location:     'Mumbai',
        badge:        '🏛️',
        color:        '#CD7F32',
        mapCenter:    { lat: 19.7515, lng: 75.7139 },
        mapZoom:      7
    },
    'ST-DL-2024-002': {
        password:     'State@123',
        name:         'Arvind Mehta, IAS',
        rank:         'Chief Secretary',
        role:         'state',
        jurisdiction: 'Delhi',
        district:     null,
        location:     'New Delhi',
        badge:        '🏛️',
        color:        '#FF6B6B',
        mapCenter:    { lat: 28.6139, lng: 77.2090 },
        mapZoom:      9
    },
    'ST-KA-2024-003': {
        password:     'State@123',
        name:         'Suresh Nair, IAS',
        rank:         'Principal Secretary',
        role:         'state',
        jurisdiction: 'Karnataka',
        district:     null,
        location:     'Bengaluru',
        badge:        '🏛️',
        color:        '#CD7F32',
        mapCenter:    { lat: 15.3173, lng: 75.7139 },
        mapZoom:      7
    },
    'ST-UP-2024-004': {
        password:     'State@123',
        name:         'Ramesh Tiwari, IAS',
        rank:         'Principal Secretary',
        role:         'state',
        jurisdiction: 'Uttar Pradesh',
        district:     null,
        location:     'Lucknow',
        badge:        '🏛️',
        color:        '#CD7F32',
        mapCenter:    { lat: 26.8467, lng: 80.9462 },
        mapZoom:      7
    },
    'ST-TG-2024-005': {
        password:     'State@123',
        name:         'Lakshmi Rao, IAS',
        rank:         'Chief Secretary',
        role:         'state',
        jurisdiction: 'Telangana',
        district:     null,
        location:     'Hyderabad',
        badge:        '🏛️',
        color:        '#FF6B6B',
        mapCenter:    { lat: 18.1124, lng: 79.0193 },
        mapZoom:      7
    },
    'ST-GJ-2024-006': {
        password:     'State@123',
        name:         'Hardik Patel, IAS',
        rank:         'Principal Secretary',
        role:         'state',
        jurisdiction: 'Gujarat',
        district:     null,
        location:     'Gandhinagar',
        badge:        '🏛️',
        color:        '#CD7F32',
        mapCenter:    { lat: 22.2587, lng: 71.1924 },
        mapZoom:      7
    },
    'ST-RJ-2024-007': {
        password:     'State@123',
        name:         'Mridul Sharma, IAS',
        rank:         'Principal Secretary',
        role:         'state',
        jurisdiction: 'Rajasthan',
        district:     null,
        location:     'Jaipur',
        badge:        '🏛️',
        color:        '#CD7F32',
        mapCenter:    { lat: 27.0238, lng: 74.2179 },
        mapZoom:      7
    },
    'ST-MP-2024-008': {
        password:     'State@123',
        name:         'Dinesh Chauhan, IAS',
        rank:         'Chief Secretary',
        role:         'state',
        jurisdiction: 'Madhya Pradesh',
        district:     null,
        location:     'Bhopal',
        badge:        '🏛️',
        color:        '#FF6B6B',
        mapCenter:    { lat: 22.9734, lng: 78.6569 },
        mapZoom:      7
    },

    /* ── DISTRICT LEVEL ──────────────────────────────────── */
    'DT-MU-2024-001': {
        password:     'Dist@123',
        name:         'Kavya Reddy, IPS',
        rank:         'Deputy Commissioner',
        role:         'district',
        jurisdiction: 'Maharashtra',
        district:     'Mumbai Suburban',
        location:     'Mumbai Suburban, Maharashtra',
        badge:        '🎖️',
        color:        '#4CAF50',
        mapCenter:    { lat: 19.0760, lng: 72.8777 },
        mapZoom:      11
    },
    'DT-ND-2024-002': {
        password:     'Dist@123',
        name:         'Rohit Verma, IPS',
        rank:         'Deputy Commissioner',
        role:         'district',
        jurisdiction: 'Delhi',
        district:     'New Delhi',
        location:     'New Delhi, Delhi',
        badge:        '🎖️',
        color:        '#4CAF50',
        mapCenter:    { lat: 28.6139, lng: 77.2090 },
        mapZoom:      11
    },
    'DT-BG-2024-003': {
        password:     'Dist@123',
        name:         'Ananya Krishnan, IAS',
        rank:         'Deputy Commissioner',
        role:         'district',
        jurisdiction: 'Karnataka',
        district:     'Bengaluru Urban',
        location:     'Bengaluru Urban, Karnataka',
        badge:        '🎖️',
        color:        '#4CAF50',
        mapCenter:    { lat: 12.9716, lng: 77.5946 },
        mapZoom:      11
    },
    'DT-HY-2024-004': {
        password:     'Dist@123',
        name:         'Vikram Rao, IPS',
        rank:         'Deputy Commissioner',
        role:         'district',
        jurisdiction: 'Telangana',
        district:     'Hyderabad',
        location:     'Hyderabad, Telangana',
        badge:        '🎖️',
        color:        '#4CAF50',
        mapCenter:    { lat: 17.3850, lng: 78.4867 },
        mapZoom:      11
    },
    'DT-PU-2024-005': {
        password:     'Dist@123',
        name:         'Sneha Patil, IPS',
        rank:         'Deputy Commissioner',
        role:         'district',
        jurisdiction: 'Maharashtra',
        district:     'Pune',
        location:     'Pune, Maharashtra',
        badge:        '🎖️',
        color:        '#4CAF50',
        mapCenter:    { lat: 18.5204, lng: 73.8567 },
        mapZoom:      11
    },
    'DT-JA-2024-006': {
        password:     'Dist@123',
        name:         'Pradeep Singh, IPS',
        rank:         'Deputy Commissioner',
        role:         'district',
        jurisdiction: 'Rajasthan',
        district:     'Jaisalmer',
        location:     'Jaisalmer, Rajasthan',
        badge:        '🎖️',
        color:        '#4CAF50',
        mapCenter:    { lat: 26.9124, lng: 70.9021 },
        mapZoom:      11
    },
    'DT-BH-2024-007': {
        password:     'Dist@123',
        name:         'Neha Shukla, IPS',
        rank:         'Assistant Commissioner',
        role:         'district',
        jurisdiction: 'Madhya Pradesh',
        district:     'Bhopal',
        location:     'Bhopal, Madhya Pradesh',
        badge:        '🎖️',
        color:        '#FF9800',
        mapCenter:    { lat: 23.2599, lng: 77.4126 },
        mapZoom:      11
    },
    'DT-CH-2024-008': {
        password:     'Dist@123',
        name:         'Gurpreet Kaur, IPS',
        rank:         'Deputy Commissioner',
        role:         'district',
        jurisdiction: 'Punjab',
        district:     'Chandigarh',
        location:     'Chandigarh, Punjab',
        badge:        '🎖️',
        color:        '#4CAF50',
        mapCenter:    { lat: 30.7333, lng: 76.7794 },
        mapZoom:      11
    }
};

/* ── Role Tier Labels ────────────────────────────────────── */
const ROLE_META = {
    national: { label: 'National Level', icon: '🇮🇳', scope: 'All India',          accent: '#D4AF37' },
    state:    { label: 'State Level',    icon: '🏛️', scope: 'State Jurisdiction',  accent: '#4A90D9' },
    district: { label: 'District Level', icon: '🎖️', scope: 'District Jurisdiction',accent: '#4CAF50' }
};

/* ── Helpers ─────────────────────────────────────────────── */
function getOfficerInfo(govId, password) {
    const key = govId.trim().toUpperCase().replace(/\s/g, '');
    const entry = OFFICER_DB[key] || OFFICER_DB[Object.keys(OFFICER_DB).find(k => k.toUpperCase() === key)];
    if (!entry) return { error: 'ID_NOT_FOUND' };
    if (entry.password !== password) return { error: 'WRONG_PASSWORD' };
    return {
        govId:        key,
        name:         entry.name,
        rank:         entry.rank,
        role:         entry.role,
        jurisdiction: entry.jurisdiction,
        district:     entry.district,
        location:     entry.location,
        badge:        entry.badge,
        color:        entry.color,
        mapCenter:    entry.mapCenter,
        mapZoom:      entry.mapZoom
    };
}

function showFieldError(fieldId, message) {
    const errEl = document.getElementById(fieldId + 'Error');
    const input = document.getElementById('login' + fieldId.charAt(0).toUpperCase() + fieldId.slice(1))
               || document.getElementById(fieldId);
    if (errEl) { errEl.textContent = message; errEl.classList.add('show'); }
    if (input)  { input.classList.add('invalid'); input.classList.remove('valid'); }
}

function clearFieldError(fieldId) {
    const errEl = document.getElementById(fieldId + 'Error');
    const input = document.getElementById('login' + fieldId.charAt(0).toUpperCase() + fieldId.slice(1))
               || document.getElementById(fieldId);
    if (errEl) { errEl.classList.remove('show'); errEl.textContent = ''; }
    if (input) { input.classList.remove('invalid'); input.classList.add('valid'); }
}

function autofillCredentials(govId, password) {
    const idEl  = document.getElementById('loginID');
    const pwEl  = document.getElementById('loginPassword');
    if (idEl)  { idEl.value = govId;    idEl.classList.add('valid');  idEl.classList.remove('invalid'); }
    if (pwEl)  { pwEl.value = password; pwEl.classList.add('valid'); pwEl.classList.remove('invalid'); }
    clearFieldError('govId');
    clearFieldError('password');
    // Visual flash on inputs
    [idEl, pwEl].forEach(el => {
        if (!el) return;
        el.style.transition = 'background 0.3s';
        el.style.background = 'rgba(74,144,217,0.15)';
        setTimeout(() => { el.style.background = ''; }, 600);
    });
}

function validateLoginForm() {
    const govId    = document.getElementById('loginID')?.value.trim() || '';
    const password = document.getElementById('loginPassword')?.value || '';
    let valid = true;

    document.querySelectorAll('.error-message').forEach(e => {
        e.classList.remove('show');
        e.textContent = '';
    });

    if (!govId) {
        showFieldError('govId', 'Government ID is required'); valid = false;
    } else {
        clearFieldError('govId');
    }

    if (!password) {
        showFieldError('password', 'Password is required'); valid = false;
    } else if (password.length < 4) {
        showFieldError('password', 'Password must be at least 4 characters'); valid = false;
    } else {
        clearFieldError('password');
    }

    return valid;
}

/* ── ID Preview (real-time role indicator) ───────────────── */
function updateIdPreview(govId) {
    const preview = document.getElementById('idRolePreview');
    if (!preview) return;
    const key = govId.trim().toUpperCase();
    const entry = OFFICER_DB[key] || OFFICER_DB[Object.keys(OFFICER_DB).find(k => k.toUpperCase() === key)];
    if (!entry) { preview.style.display = 'none'; return; }
    const meta = ROLE_META[entry.role];
    preview.style.display = 'flex';
    preview.innerHTML = `<span class="id-preview-icon">${meta.icon}</span>
        <span class="id-preview-text">
            <strong>${entry.name}</strong>
            <span class="id-preview-role" style="color:${meta.accent}">${meta.label} • ${entry.jurisdiction || 'All India'}${entry.district ? ' › ' + entry.district : ''}</span>
        </span>`;
}

/* ── Form Submission ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
    initPreferences('languageToggle');

    const form = document.getElementById('loginFormElement');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validateLoginForm()) return;

        const btn  = this.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<span class="btn-spinner"></span> Authenticating…';

        setTimeout(function () {
            const govId    = document.getElementById('loginID').value.trim();
            const password = document.getElementById('loginPassword').value;
            const result   = getOfficerInfo(govId, password);

            if (result.error === 'ID_NOT_FOUND') {
                showFieldError('govId', '❌ Government ID not found in system');
                btn.disabled = false; btn.innerHTML = orig;
                shakeField('loginID'); return;
            }
            if (result.error === 'WRONG_PASSWORD') {
                showFieldError('password', '❌ Incorrect password');
                btn.disabled = false; btn.innerHTML = orig;
                shakeField('loginPassword'); return;
            }

            localStorage.setItem('officerInfo',     JSON.stringify(result));
            localStorage.setItem('loggedInOfficer', result.govId);

            // Success animation
            btn.innerHTML = '✅ Verified — Signing in with Firebase…';
            btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';

            // Sign in with Firebase Auth (demo account for all government officers)
            signInWithFirebase(result, btn, orig);
        }, 1400);
    });

    // Real-time ID role preview
    document.getElementById('loginID')?.addEventListener('input', function () {
        updateIdPreview(this.value);
    });

    // Forgot password
    document.querySelector('.forgot-password')?.addEventListener('click', function (e) {
        e.preventDefault();
        const id = document.getElementById('loginID')?.value || 'your Government ID';
        showToast('Password reset link sent to registered email for: ' + id);
    });

    // Demo panel toggle
    document.getElementById('demoPanelToggle')?.addEventListener('click', function () {
        const panel = document.getElementById('demoCredentialsPanel');
        const arrow = document.getElementById('demoPanelArrow');
        if (!panel) return;
        const isOpen = panel.classList.toggle('open');
        if (arrow) arrow.textContent = isOpen ? '▲' : '▼';
        this.setAttribute('aria-expanded', isOpen);
    });
});

/* ── Firebase Authentication Helper ───────────────────────── */
async function signInWithFirebase(officerData, btn, originalBtnText) {
    try {
        if (!window.govFirebaseAuth) {
            console.error('Firebase Auth not initialized');
            throw new Error('Firebase Auth not available');
        }

        // Import signInWithEmailAndPassword dynamically
        const { signInWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js');
        
        // Demo credentials for all government officers
        const demoEmail = 'demo.mumbai@avyanpragati.gov.in';
        const demoPassword = 'demo123';
        
        console.log('%c🔐 Signing in government officer with Firebase...', 'color:#3b82f6;font-weight:bold');
        
        const userCredential = await signInWithEmailAndPassword(
            window.govFirebaseAuth,
            demoEmail,
            demoPassword
        );
        
        console.log('%c✅ Firebase Auth: Signed in successfully', 'color:#22c55e;font-weight:bold', userCredential.user);
        
        // Store Firebase UID
        localStorage.setItem('govFirebaseUid', userCredential.user.uid);
        
        btn.innerHTML = '✅ Authenticated — Redirecting…';
        
        setTimeout(function () {
            window.location.href = '/gov/dashboard';
        }, 600);
        
    } catch (error) {
        console.error('Firebase Auth Error:', error);
        
        // If demo account doesn't exist, continue anyway (backward compatibility)
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
            console.warn('%c⚠️ Demo Firebase account not found. Continuing with local auth only.', 'color:#f59e0b;font-weight:bold');
            console.warn('%c💡 To fix: Create Firebase user with email: demo@gov.in, password: demo@123', 'color:#3b82f6');
            
            btn.innerHTML = '✅ Verified (Local) — Redirecting…';
            
            setTimeout(function () {
                window.location.href = '/gov/dashboard';
            }, 600);
        } else {
            // Other errors - show to user
            btn.disabled = false;
            btn.innerHTML = originalBtnText;
            showFieldError('password', '❌ Authentication error. Please try again.');
            console.error('Unexpected auth error:', error);
        }
    }
}

function shakeField(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('field-shake');
    setTimeout(() => el.classList.remove('field-shake'), 600);
}
