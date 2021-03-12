import {ScheduleTargetType} from "@/types/schedule/ScheduleTargetType";

export function getScheduleTargetLink(type: ScheduleTargetType, years: [number, number]) : string {
    switch (type) {
        case "group":
            return `https://edu.donstu.ru/api/raspGrouplist?year=${years[0]}-${years[1]}`
        case "class":
            return `https://edu.donstu.ru/api/raspAudlist?year=${years[0]}-${years[1]}`
        case "teacher":
            return `https://edu.donstu.ru/api/raspTeacherlist?year=${years[0]}-${years[1]}`
    }
}