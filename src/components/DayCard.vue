<template>
  <div v-if="day">
    <p class="day-name">{{ day.title }}</p>
    <subject-card
      v-for="subject in day.subjects"
      :subject="subject"
      :key="subject.id"
    ></subject-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ScheduleDay } from "@/types/schedule/ScheduleDay";
import SubjectCard from "@/components/SubjectCard.vue";

export default defineComponent({
  name: "DayCard",
  components: { SubjectCard },
  props: {
    day: {
      type: Object as PropType<ScheduleDay>,
    },
  },
});
</script>

<style scoped>
.day-name {
  background: #433d53;
  font-size: 1.1rem;
  text-align: center;
  color: white;
  padding: 0.1rem 0;
  border-radius: 10px;
}
</style>