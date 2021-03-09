import {ScheduleDay} from "@/types/schedule/ScheduleDay";

export interface ScheduleWeek {
    title: string,
    weekNumber: number,
    days: ScheduleDay[]
}