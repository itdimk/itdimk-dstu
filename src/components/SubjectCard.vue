<template>
  <div class="subject">

    <div class="time">
      <p>{{ subject.startTime }}</p>
      <p>{{ subject.endTime }}</p>
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
  padding: 0 1rem;
  font-size: 1.3rem;
  margin-top: auto;
  margin-bottom: auto;
}

.main {
  padding: 0.5rem 1rem;

  .title {
    font-size: 1.2rem;
  }

  .class-number {
    font-size: 1.05rem;
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

</style>