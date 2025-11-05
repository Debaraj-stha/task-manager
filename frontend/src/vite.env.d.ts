
/// <reference types="vite/client" />
interface ImportMetaEnv{
readonly VITE_SERVER_URL,
readonly VITE_API_URL
}
interface ImportMeta{
    readonly env:ImportMetaEnv
}