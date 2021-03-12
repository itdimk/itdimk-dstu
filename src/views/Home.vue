<template>
  <div class="container" v-if="schedule">
    <day-card v-for="day in schedule.weeks[0].days" :day="day" :key="day.date"></day-card>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import DayCard from "@/components/DayCard.vue";
import {mapActions, mapGetters} from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    DayCard,
  },
  methods: {
    ...mapActions('schedule', ['fetchSchedule']),
  },
  computed: {
    ...mapGetters('schedule', ['schedule'])
  },

  async mounted() {
    await this.fetchSchedule();
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