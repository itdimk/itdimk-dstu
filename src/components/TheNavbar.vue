<template>
  <nav class="navbar">
    <search-box class="search"></search-box>
    <input v-if="isDateVisible" class="input-date" type="date">
  </nav>
</template>

<script>
import SearchBox from "@/components/SearchBox";

export default {
  name: "TheNavbar",
  components: {SearchBox},
  data: () => ({
    isDateVisible: true
  }),
}
</script>

<style lang="scss" scoped>

.navbar {
  position: sticky;
  top: 0;
  background: #433D53;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.search {
  position: relative;
  max-width: 18rem;
  flex: 1;
}

.input-date {
  margin: 0 0.2rem;
  max-width: 10rem;
  flex: 1;
}

</style>