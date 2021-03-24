<template>
  <div class="subject">

    <div class="time">
      <p>{{ subject.startTime }}</p>
      <p>{{ subject.endTime }}</p>
      <img class='arrow' v-if="!subject.startTime" src="../assets/arrow_upward.svg">
    </div>

    <span class="splitter"></span>

    <div class="main">
      <p class="title">{{ subject.title }} </p>
      <p class="class-number"> {{ subject.classNumber }}</p>
      <p class="teacher">{{ subject.teacherName }}</p>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {ScheduleSubject} from "@/types/schedule/ScheduleSubject";

export default defineComponent({
  name: 'SubjectCard',
  props: {
    subject: {
      type: Object as PropType<ScheduleSubject>,
      required: true,
      validator(value: unknown): value is ScheduleSubject {
        return !!(value as ScheduleSubject).title;
      }
    }
  },
});
</script>

<style lang="scss" scoped>

.subject {
  border: 1px solid #DFDFDF;
  box-shadow: 1px 1px 3px lightgray;
  display: flex;
  flex-direction: row;
  margin: 0.3rem 0;
}

.time {
  padding: 0 0.8rem;
  font-size: 1.07rem;
  margin-top: auto;
  margin-bottom: auto;
}

.main {
  padding: 0.4rem 0.4rem 0.4rem 0.7rem;

  .title {
    font-size: 1em;
  }

  .class-number {
    font-size: 1rem;
  }

  .teacher {
    font-size: 0.9rem;
    color: dimgray;
  }
}

.splitter {
  width: 1px;
  background: #DFDFDF;
}

.arrow {
  min-width:1.5rem;
}

</style>