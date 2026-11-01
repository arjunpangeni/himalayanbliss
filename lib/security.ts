import crypto from 'crypto';

export function hashToken(token: string) {
  const pepper = process.env.TOKEN_PEPPER ?? 'local-dev-pepper';
  return crypto.createHash('sha256').update(`${pepper}:${token}`).digest('hex');
}

export function hashCode(code: string) {
  const pepper = process.env.TOKEN_PEPPER ?? 'local-dev-pepper';
  return crypto.createHash('sha256').update(`${pepper}:${code}`).digest('hex');
}
