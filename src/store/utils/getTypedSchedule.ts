import { ScheduleDay } from "@/types/schedule/ScheduleDay";
import { ScheduleWeek } from "@/types/schedule/ScheduleWeek";
import { Schedule } from "@/types/schedule/Schedule";
import { formatDateToISO } from "./formatDateToISO";
import { ScheduleTargetType } from "@/types/schedule/ScheduleTargetType";
import { ScheduleTarget } from "@/types/schedule/ScheduleTarget";

export function getTypedSchedule(dstuResponseJson: any, target: ScheduleTarget): Schedule {
    const days: ScheduleDay[] = getTypedDays(dstuResponseJson);

    const week: ScheduleWeek = {
        days: days,
        title: 'Неделя',
        weekNumber: dstuResponseJson.data.info.curWeekNumber
    }

    return {
        weeks: [week],
        target: target,
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

        const sameSubject = days[days.length - 1].subjects.find(s => s.startTime === subject["начало"]);

            days[days.length - 1].subjects.push({
                id: subject["код"],
                title: subject["дисциплина"],
                startTime: sameSubject ? '' : subject["начало"],
                endTime: sameSubject ? '' : subject["конец"],
                teacherName: subject["преподаватель"],
                classNumber: subject["аудитория"]
            })
    }

    return days;
}

function getDayAndMonthString(date: Date) {
    return formatDateToISO(date).split('-').slice(1).reverse().join('.');
}