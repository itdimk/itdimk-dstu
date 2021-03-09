<template>
  <div class="container">
    <day-card :day="day"></day-card>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import SubjectCard from "@/components/SubjectCard.vue"; // @ is an alias to /src
import {ScheduleDay} from "@/types/schedule/ScheduleDay";
import DayCard from "@/components/DayCard.vue";

export default defineComponent({
  name: 'Home',
  data: (): { day: ScheduleDay } => ({

    day: {
      subjects: [{
        title: 'lorem20   feeeeeeeeeeeeeeeee eeeeeeeeeeeee fregrge eeeeeeeeeee eeeeeSample',
        classNumber: '1-434',
        teacherName: 'Пизда',
        startTime: '10.00',
        endTime: '22.00'
      },

        {
          title: 'lorem20   feeeeeeeeeeeeeeeee eeeeeeeeeeeee fregrge eeeeeeeeeee eeeeeSample',
          classNumber: '1-434',
          teacherName: 'Пизда',
          startTime: '10.00',
          endTime: '22.00'
        }], date: new Date(), title: 'Shit'
    }
  }),
  components: {
    DayCard,
    SubjectCard,
  },
  methods: {
    getWeather({date: day, weather: weatherValue}: { date: Date, weather: 'good' | 'bad' }): string {
      return 'хуй'
    }
  }
});
</script>

<style scoped>
.container {
  padding: 0 20%;
}

@media (max-width: 900px) {
  .container {
    padding: 0 4px;
  }
}
</style>