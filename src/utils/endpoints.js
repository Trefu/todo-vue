const URL_API = import.meta.env.VITE_APP_API_URL;

export function apiGetTodos(userId) {
    return URL_API + `users/${userId}/todos`;
}

export function apiPatchTodo(userId,todoId) {
    return URL_API + `users/${userId}/todos/${todoId}`;
}