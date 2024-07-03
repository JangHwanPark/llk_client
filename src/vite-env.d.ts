interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_HEADERS: string;
  readonly VITE_API_REGISTER: string;
  readonly VITE_API_LOGIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}