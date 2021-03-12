<template>
  <nav class="navbar">
    <search-box
      class="search"
      :autocomplete-source="availableTargets"
      keyProperty="title"
      @itemSelected="onItemSelected"
      @blur="isDateVisible = true"
      @focus="hideDate"
    ></search-box>

    <date-picker
      v-if="isDateVisible"
      class="input-date"
      v-model="selectedDate"
      :date="selectedDate"
    ></date-picker>

  </nav>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { defineComponent } from "vue";
import DatePicker from "./DatePicker.vue";

export default defineComponent({
  name: "TheNavbar",
  components: { SearchBox, DatePicker },
  methods: {
    ...mapActions("schedule", ["fetchAvailableTargets", "fetchSchedule"]),
    ...mapMutations("schedule", ["selectDate", "changeTarget"]),

    hideDate() {
      if (window.innerWidth < 992) this.isDateVisible = false;
    },
    async onItemSelected(item) {
      this.changeTarget(item);
      await this.fetchSchedule();
    },
  },
  computed: {
    ...mapGetters("schedule", ["availableTargets"]),
  },
  data: () => ({
    isDateVisible: true,
    selectedDate: new Date(),
  }),
  watch: {
    async selectedDate() {
      this.selectDate(new Date(event.target.value));
      await this.fetchSchedule();
    }
  },
  async mounted() {
    await this.fetchAvailableTargets();
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  background: #433d53;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.search {
  position: relative;
  flex: 1;
  max-width: 35rem;
}

.input-date {
  margin: 0 0.2rem 0 1rem;
  max-width: 10rem;
  flex: 1;
}
</style>