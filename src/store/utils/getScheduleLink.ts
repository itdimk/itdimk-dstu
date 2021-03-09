import {ScheduleTarget} from "@/types/schedule/ScheduleTarget";

export function getScheduleLink(target: ScheduleTarget, date: Date) {
    switch (target.targetType) {
        case  "group":
            return getGroupScheduleLink(target.targetId, date);
        case "teacher":
            return getTeacherScheduleLink(target.targetId, date);
        case "class":
            return getClassScheduleLink(target.targetId, date);
    }
}

function getGroupScheduleLink(groupId: number, date: Date) {
    return `https://edu.donstu.ru/api/Rasp?idGroup=${groupId}&sdate=${formatDate(date)}`
}

function getTeacherScheduleLink(teacherId: number, date: Date) {
    return `https://edu.donstu.ru/api/Rasp?idTeacher=${teacherId}&sdate=${formatDate(date)}`
}

function getClassScheduleLink(classId: number, date: Date) {
    return `https://edu.donstu.ru/api/Rasp?idAudLine=${classId}&sdate=${formatDate(date)}`
}

function formatDate(date: Date): string {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function pad(number: number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}