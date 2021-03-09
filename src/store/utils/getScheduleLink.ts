import {ScheduleTarget} from "@/types/schedule/ScheduleTarget";

export function getScheduleLink(target: ScheduleTarget, date: Date) {
    switch (target.targetType) {
        case  "group":
            return getGroupScheduleLink(parseInt(target.targetValue), date);
        case "teacher":
            return getTeacherScheduleLink(parseInt(target.targetValue), date);
        case "class":
            return getClassScheduleLink(parseInt(target.targetValue), date);
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
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}