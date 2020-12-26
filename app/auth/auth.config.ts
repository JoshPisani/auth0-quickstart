interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: "15VoL1zQOUAVZdFhC4cOIUSfJDUYLdTZ",
  CLIENT_DOMAIN: "shithead.au.auth0.com",
  AUDIENCE: "https://shithead.au.auth0.com/userinfo",
  REDIRECT: "https://auth0-shithead.stackblitz.io/callback",
  SCOPE: "openid profile email"
};
