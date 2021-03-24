<template>
  <div :class="['alert', alertData.type]">
    <p class="title">{{ alertData.title }}</p>
    <p class="description">{{ alertData.description }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    alertData: {
      type: Object,
      validator(value: any) {
        return value && value.title && value.description && value.type;
      },
    },
  },
};
</script>

<style scoped>
.alert {
  width: 99%;
  border-radius: 0.5rem;
  margin: 0.8rem auto;
  padding: 0.5rem;
}

.info {
  background-color: white;
}

.warning {
  background-color: #ffc107;
}

.error {
  background-color: coral;
}

.title {
  font-size: 1.05rem;
}

.description {
  font-size: 0.95rem;
}
</style>