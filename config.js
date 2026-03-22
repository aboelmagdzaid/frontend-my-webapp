/**
 * Frontend Configuration
 * API URLs and settings for the web application
 */

const CONFIG = {
    // API Configuration
    API: {
        BASE_URL: process.env.API_BASE_URL || 'https://your-railway-backend.railway.app/api',
        TIMEOUT: 30000, // 30 seconds
        HEADERS: {
            'Content-Type': 'application/json',
        }
    },

    // Auth Configuration
    AUTH: {
        TOKEN_KEY: 'access_token',
        USER_KEY: 'user',
        ACCOUNT_TYPE_KEY: 'accountType',
        TOKEN_EXPIRY: 30 * 60 * 1000, // 30 minutes
    },

    // App Configuration
    APP: {
        NAME: 'مكتب ابوالمجد عبدالشافى',
        VERSION: '1.0.0',
        LANG: 'ar',
        DIR: 'rtl',
    },

    // Feature Flags
    FEATURES: {
        ENABLE_ANALYTICS: true,
        ENABLE_NOTIFICATIONS: true,
        ENABLE_DARK_MODE: false,
    },

    // Endpoints
    ENDPOINTS: {
        LOGIN: '/login',
        REGISTER: '/register',
        HEALTH: '/health',
        CONTACT: '/contact',
        USERS: '/users',
        CLIENTS: '/clients',
        TASKS: '/tasks',
        REPORTS: '/reports',
    },

    // Error Messages
    ERRORS: {
        NETWORK: 'حدث خطأ في الاتصال بالخادم',
        UNAUTHORIZED: 'غير مصرح بالدخول. يرجى تسجيل الدخول',
        FORBIDDEN: 'ليس لديك صلاحيات للوصول لهذا المورد',
        NOT_FOUND: 'المورد المطلوب غير موجود',
        SERVER_ERROR: 'حدث خطأ في الخادم',
        VALIDATION: 'يرجى التحقق من البيانات المدخلة',
    },

    // Success Messages
    SUCCESS: {
        LOGIN: 'تم تسجيل الدخول بنجاح',
        LOGOUT: 'تم تسجيل الخروج بنجاح',
        REGISTER: 'تم إنشاء الحساب بنجاح',
        CONTACT_SUBMITTED: 'تم إرسال رسالتك بنجاح',
        SAVE: 'تم الحفظ بنجاح',
        DELETE: 'تم الحذف بنجاح',
    },

    // Validation Rules
    VALIDATION: {
        EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        PHONE_REGEX: /^(\+201|01)[0-9]{9}$/,
        PASSWORD_MIN_LENGTH: 6,
        NAME_MIN_LENGTH: 2,
        MESSAGE_MIN_LENGTH: 10,
    },

    // Timeouts
    TIMEOUTS: {
        TOAST: 3000, // 3 seconds
        MODAL: 300, // 300ms
        API: 30000, // 30 seconds
    },
};

/**
 * Utility function to get full API URL
 */
CONFIG.getApiUrl = function(endpoint) {
    return `${this.API.BASE_URL}${endpoint}`;
};

/**
 * Utility function to get auth token from localStorage
 */
CONFIG.getAuthToken = function() {
    return localStorage.getItem(this.AUTH.TOKEN_KEY);
};

/**
 * Utility function to set auth token in localStorage
 */
CONFIG.setAuthToken = function(token) {
    localStorage.setItem(this.AUTH.TOKEN_KEY, token);
};

/**
 * Utility function to clear auth data
 */
CONFIG.clearAuth = function() {
    localStorage.removeItem(this.AUTH.TOKEN_KEY);
    localStorage.removeItem(this.AUTH.USER_KEY);
    localStorage.removeItem(this.AUTH.ACCOUNT_TYPE_KEY);
};

/**
 * Utility function to check if user is authenticated
 */
CONFIG.isAuthenticated = function() {
    return !!this.getAuthToken();
};

/**
 * Utility function to get headers with auth token
 */
CONFIG.getHeaders = function() {
    const headers = { ...this.API.HEADERS };
    const token = this.getAuthToken();
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
