import { ScheduleDay } from "@/types/schedule/ScheduleDay";
import { ScheduleWeek } from "@/types/schedule/ScheduleWeek";
import { Schedule } from "@/types/schedule/Schedule";
import { formatDateToISO } from "./formatDateToISO";

export function getTypedSchedule(dstuResponseJson: any): Schedule {
    const days: ScheduleDay[] = getTypedDays(dstuResponseJson);

    const week: ScheduleWeek = {
        days: days,
        title: 'Неделя',
        weekNumber: dstuResponseJson.data.info.curWeekNumber
    }

    return {
        weeks: [week],
        target: {
            targetType: "group", // TODO: FIX THIS
            targetId: parseInt(dstuResponseJson.data.info.group.groupID),
            title: dstuResponseJson.data.info.group.name
        },
        updatedAt: new Date(),
        uploadedAt: new Date()
    }
}

function getTypedDays(dstuResponseJson: any): ScheduleDay[] {
    const rasp: any[] = dstuResponseJson.data.rasp;
    const days: ScheduleDay[] = [];

    for (let subject of rasp) {
        const date = new Date(subject["дата"]);

        if (days.length === 0 || days[days.length - 1].date.getTime() !== date.getTime()) {

            days.push({
                date: date,
                title: `${subject['день_недели']}, ${getDayAndMonthString(date)}`,
                subjects: []
            })

        }

        days[days.length - 1].subjects.push({
            id: subject["код"],
            title: subject["дисциплина"],
            startTime: subject["начало"],
            endTime: subject["конец"],
            teacherName: subject["преподаватель"],
            classNumber: subject["аудитория"]
        })
    }

    return days;
}

function getDayAndMonthString(date: Date) {
    return formatDateToISO(date).split('-').slice(1).reverse().join('.');
}