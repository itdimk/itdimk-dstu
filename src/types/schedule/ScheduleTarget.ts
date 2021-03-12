import {ScheduleTargetType} from "@/types/schedule/ScheduleTargetType";

export interface ScheduleTarget {
    targetType: ScheduleTargetType,
    targetId: number,
    title: string
}