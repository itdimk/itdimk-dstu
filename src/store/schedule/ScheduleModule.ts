import {StoreOptions} from "vuex";
import ScheduleState from "@/store/schedule/ScheduleState";
import {Schedule} from "@/types/schedule/Schedule";
import {getScheduleLink} from "@/store/utils/getScheduleLink";
import {getTypedSchedule} from "@/store/utils/getTypedSchedule";
import {ScheduleTarget} from "@/types/schedule/ScheduleTarget";
import {getScheduleTargetLink} from "@/store/utils/getScheduleTargetLink";
import {getTypedScheduleTargets} from "@/store/utils/getTypedScheduleTargets";

export const ScheduleModule: StoreOptions<ScheduleState> = {
    state: () => ({
        availableTargets: [],
        schedule: undefined,
        selectedDate: new Date(),
        selectedTarget: {targetType: "group", targetId: 36241, title: 'Some shit'},
    }),
    getters: {
        schedule(state) {
            return state.schedule;
        },
        availableTargets(state) {
            return state.availableTargets
        }
    },
    mutations: {
        setSchedule(state, value: Schedule) {
            state.schedule = value;
        },
        addAvailableTargets(state, value: ScheduleTarget[]) {
            value.forEach(v => state.availableTargets.push(v))
        },
        changeTarget(state, value: ScheduleTarget) {
            state.selectedTarget = value;
        },
        selectDate(state, value: Date) {
            state.selectedDate = value;
        }
    },
    actions: {
        async fetchSchedule({state, commit}) {
            const link = getScheduleLink(state.selectedTarget, state.selectedDate);

            try {
                const response = await fetch(link);
                const json = await response.json();
                commit('setSchedule', getTypedSchedule(json));
            } catch (e) {
                console.log('fetch error');
            }
        },

        async fetchAvailableTargets({state, commit}) {
            const linkGroups = getScheduleTargetLink("group", [2020, 2021]);
            const linkClasses = getScheduleTargetLink("class", [2020, 2021]);
            const linkTeachers = getScheduleTargetLink("teacher", [2020, 2021]);

            const responseGroups = await (await fetch(linkGroups)).json();
            const responseClasses = await (await fetch(linkClasses)).json();
            const responseTeachers = await (await fetch(linkTeachers)).json();

            const targets = getTypedScheduleTargets(responseGroups, "group")
                .concat(getTypedScheduleTargets(responseClasses, "class")
                    .concat(getTypedScheduleTargets(responseTeachers, "teacher")));

            commit('addAvailableTargets', targets);
        }
    },
}