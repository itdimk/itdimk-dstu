export function formatDateToISO(date: Date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function pad(number: number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}