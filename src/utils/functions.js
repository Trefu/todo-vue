import { format, parse } from "date-fns";
export const formatDateToShow = (fecha, withHour = false) => {
    if (!fecha) return null;
    let parseString = "yyyy-MM-dd";
    if (withHour) {
        parseString += " HH:mm:SS";
    }
    return format(parse(fecha, parseString, new Date()), "dd/MM/yyyy");
};