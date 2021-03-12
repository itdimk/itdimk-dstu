<template>
  <input type="date" :value="currDateString" @change="onDateChanged" />
</template>

<script>
import { defineComponent } from "vue";
import { formatDateToISO } from "@/store/utils/formatDateToISO";

export default defineComponent({
  emits: ["update:modelValue"],
  props: ["date"],

  data: () => ({
    currDateString: formatDateToISO(new Date())
  }),

  methods: {
    onDateChanged(event) {
      this.currDateString = event.target.value;

      this.$emit("update:modelValue", this.currDate);
    },
  },

  computed: {
    currDate() {
      return formatDateToISO(new Date(this.currDateString));
    },
  },
});
</script>

<style>
</style>