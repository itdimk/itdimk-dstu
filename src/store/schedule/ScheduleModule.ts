import {StoreOptions} from "vuex";
import ScheduleState from "@/store/schedule/ScheduleState";
import {Schedule} from "@/types/schedule/Schedule";
import {getScheduleLink} from "@/store/utils/getScheduleLink";
import {getTypedSchedule} from "@/store/utils/getTypedSchedule";

export const ScheduleModule: StoreOptions<ScheduleState> = {
    state: () => ({
        availableTargets: [],
        schedule: undefined,
        selectedDate: new Date(),
        selectedTarget: {targetType: "group", targetId: 36241},
    }),
    getters: {
        schedule(state) {
            return state.schedule;
        }
    },
    mutations: {
        setSchedule(state, value: Schedule) {
            state.schedule = value;
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
        }
    },
}