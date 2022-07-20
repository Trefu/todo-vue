const URL_API = import.meta.env.VITE_APP_API_URL;

export function apiGetTodos() {
    return URL_API + `todos`;
}