import {Schedule} from "@/types/schedule/Schedule";

export default interface ScheduleState {
    schedule: Schedule | undefined,
    selectedTarget: string,
    availableTargets: []
    selectedDate: Date,
}