<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    getUser() {
      this.$store.dispatch('getUser', this.id);
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style scoped>

</style>
