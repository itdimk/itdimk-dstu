import {Schedule} from "@/types/schedule/Schedule";
import {ScheduleTarget} from "@/types/schedule/ScheduleTarget";

export default interface ScheduleState {
    schedule: Schedule | undefined,
    selectedTarget: ScheduleTarget,
    availableTargets: []
    selectedDate: Date,
}