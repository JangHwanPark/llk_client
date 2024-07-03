interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_HEADERS: string;
  readonly VITE_API_REGISTER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}