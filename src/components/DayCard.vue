<template>
  <div v-if="day">
    <p class="day-name" :class="{ highlighted: isHighlighted }">
      {{ day.title }}
    </p>
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
import { mapGetters } from "vuex";

export default defineComponent({
  name: "DayCard",
  components: { SubjectCard },
  props: {
    day: {
      type: Object as PropType<ScheduleDay>,
    },
  },
  computed: {
    ...mapGetters("schedule", ["selectedDate"]),

    isHighlighted(): boolean {
      return this.day?.date.getDate() === this.selectedDate.getDate();
    },
  },
});
</script>

<style scoped>
.day-name {
  background: #433d53;
  font-size: 1.12rem;
  text-align: center;
  color: white;
  padding: 0.3rem 0;
  border-radius: 10px;
}

.highlighted {
  background: coral;
}
</style>