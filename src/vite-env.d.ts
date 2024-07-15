interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_HEADERS: string;
  readonly VITE_API_REGISTER: string;
  readonly VITE_API_LOGIN: string;
  readonly VITE_API_OUT: string;
  readonly VITE_API_USERS: string;
  readonly VITE_REDIRECT_URL: string;
  readonly VITE_CLIENT_ID: string;
  readonly VITE_LOCATION_GOOGLE: string;
  readonly VITE_API_CONTACT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
