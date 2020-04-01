<template>
  <div>
    <h2>Welcome to Counter</h2>

    <p>Tododos i've done: {{ getTodoById(1) }}</p>
    <p>I see {{ countPlusLocalState }} things</p>
    <button @click="inc">increment counter</button>
    <button @click="dec">decrement counter</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Counter',
  data() {
    return {
      localCount: 5
    };
  },
  computed: {
    // ...mapState(['count']),
    // todos() {
    //   return this.$store.getters.doneTodosCount;
    // }
    ...mapState({
      countPlusLocalState(state) {
        return state.count + this.localCount;
      }
    }),
    todos() {
      return this.$store.getters.doneTodosCount;
    },
    ...mapGetters(['getTodoById'])
  },
  created() {
    // console.log(this.$store);
  },
  methods: {
    inc() {
      this.$store.commit('inc');
    },
    dec() {
      this.$store.commit('dec');
    }
  }
};
</script>

<style scoped>
</style>

// map state help
// https://forum.vuejs.org/t/dont-understand-how-to-use-mapstate-from-the-docs/14454/11

  // computed: mapState(
  //   ['count']
  //   // {
  //   // count: state => state.count,
  //   // countAlias: "count",
  //   // countPlusLocalState(state) {
  //   //   return state.count + this.localCount;
  //   // }
  //   //}
  // ),