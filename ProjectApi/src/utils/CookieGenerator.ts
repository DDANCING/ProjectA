function generateCookie(name: string, value: string, expires?: Date): string {
  let cookie = `${name}=${value}`;

  if (expires) {
    cookie += `; expires=${expires.toUTCString()}`;
  }

  return cookie;
}

// Example usage:
const expires = new Date();
expires.setDate(expires.getDate() + 7); // sets the cookie to expire in 7 days
const cookie = generateCookie("session", "12345", expires);
console.log(cookie); // Output: session=12345; expires=Thu, 01 Apr 2023 16:20:20 GMT


export { generateCookie };