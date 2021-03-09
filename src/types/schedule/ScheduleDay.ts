import {ScheduleSubject} from "@/types/schedule/ScheduleSubject";

export interface ScheduleDay {
    title: string,
    date: Date,
    subjects: ScheduleSubject[]
}