import {ScheduleTarget} from "@/types/schedule/ScheduleTarget";
import {ScheduleTargetType} from "@/types/schedule/ScheduleTargetType";


export function getTypedScheduleTargets(dstuJson: any, type: ScheduleTargetType): ScheduleTarget[] {
    const result: ScheduleTarget[] = [];

    for (let target of dstuJson.data) {
        result.push({
            targetId: target['id'] ,
            targetType: type,
            title: target["name"]
        })
    }
    return result;
}