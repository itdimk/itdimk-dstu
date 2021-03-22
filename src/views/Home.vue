<template>
  <div class="container" v-if="schedule">
  <Alert :alertData="offlineAlert" v-if="isOffline" />
    <day-card
      v-for="day in schedule.weeks[0].days"
      :day="day"
      :key="day.date"
    ></day-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DayCard from "@/components/DayCard.vue";
import { mapActions, mapGetters } from "vuex";
import Alert from "@/components/Alert.vue";

export default defineComponent({
  name: "Home",
  components: {
    DayCard,
    Alert,
  },
  data() {
    return {
      offlineAlert: {
        title: "Не удается подключиться к серверу",
        description: "Просмотр последней сохраненной копии",
        type: "warning",
      },
    };
  },
  methods: {
    ...mapActions("schedule", ["fetchSchedule"]),
  },
  computed: {
    ...mapGetters("schedule", ["schedule", "isOffline"]),
  },

  async mounted() {
    await this.fetchSchedule();
  },
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