
export function deleteSessionCookie() {
  document.cookie = `session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
export function cookieExists(name: string): boolean {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, value] = cookie.trim().split('=');
    if (cookieName === name) {
      return true;
    }
  }
  return false;
}

export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === name) {
      return value;
    }
  }
  return null;
}
