import {StoreOptions} from "vuex";
import ScheduleState from "@/store/schedule/ScheduleState";

export const ScheduleModule : StoreOptions<ScheduleState> = {
    state: () => ({
        availableTargets: [],
        schedule: undefined,
        selectedDate: new Date(),
        selectedTarget: '',
    }),
}