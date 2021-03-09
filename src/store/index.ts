import {createStore} from 'vuex'
import {ScheduleModule} from "@/store/schedule/ScheduleModule";
import {State} from "@/store/State";

export default createStore<State>({
    modules: {
        schedule: {namespaced: true, ...ScheduleModule}
    }
})
