import { formatDateToShow } from "./functions";
export const normalizeTodos = (array) => {
    return array.map((t) => {
        return normalizeTodo(t);
    });
};

export const normalizeTodo = (todo) => {
    return {
        createdAt: formatDateToShow(todo.createdAt)
    };
};