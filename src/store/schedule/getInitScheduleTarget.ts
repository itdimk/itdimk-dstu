import { Schedule } from "@/types/schedule/Schedule";
import { ScheduleTarget } from "@/types/schedule/ScheduleTarget";

export function getInitScheduleTarget(localStorageScheduleKey: string): ScheduleTarget {
    const rasp = localStorage.getItem(localStorageScheduleKey);

    return rasp ? (JSON.parse(rasp) as Schedule).target : { targetType: "group", targetId: 36241, title: 'ВУТ' };
}