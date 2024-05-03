/**
 * an array of routes that are accessible to the public
 * these routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
  "/",
  "/auth/new-verification"
];
/**
 * an array of routes that are used for authentication
 * these routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error"
];

/**
 * the prefix for API authentication routes
 * routes that start with this prefix are user for API autentication only
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";


/**
 * the default redirect route path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
