<template>
  <input
    class="date-picker"
    type="date"
    :value="currDateString"
    @change="onDateChanged"
  />
</template>

<script>
import { defineComponent } from "vue";
import { formatDateToISO } from "@/store/utils/formatDateToISO";

export default defineComponent({
  emits: ["update:modelValue"],
  props: ["date"],

  data: () => ({
    currDateString: formatDateToISO(new Date()),
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

<style scoped>
.date-picker {
  background-color: white;
  opacity: 0.5;
  padding: 0 0.5rem;
  outline: none;
  border: 1px gray solid;
  border-radius: 5px;
  transition: 0.3s opacity ease;
}

.date-picker:focus {
  opacity: 1;
}
</style>