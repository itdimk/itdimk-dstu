import {ScheduleWeek} from "@/types/schedule/ScheduleWeek";
import {ScheduleTarget} from "@/types/schedule/ScheduleTarget";

export interface Schedule {
    target: ScheduleTarget,
    updatedAt: Date,
    uploadedAt: Date,
    weeks: ScheduleWeek[]
}