interface CookieOptions {
  expires?: Date;
  maxAge?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}

const generateCookie = (name: string, value: string, options: CookieOptions = {}): string => {
  const { expires, maxAge = 30 * 24 * 60 * 60, path = '/', domain = '', secure = false, httpOnly = true, sameSite = 'Lax' } = options;

  // Converter maxAge em uma data
  let expirationDate: Date | undefined;
  if (maxAge) {
    const currentDate = new Date();
    expirationDate = new Date(currentDate.getTime() + maxAge * 1000); // Converte segundos para milissegundos
  }

  // Construir a string do cookie
  let cookieString = `${name}=${value}`;
  if (expires) cookieString += `; Expires=${expires.toUTCString()}`;
  if (expirationDate) cookieString += `; Expires=${expirationDate.toUTCString()}`;
  if (path) cookieString += `; Path=${path}`;
  if (domain) cookieString += `; Domain=${domain}`;
  if (secure) cookieString += '; Secure';
  if (httpOnly) cookieString += '; HttpOnly';
  if (sameSite) cookieString += `; SameSite=${sameSite}`;

  return cookieString;
};

export { generateCookie };
