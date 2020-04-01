import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 10,
    todos: [
      { id: 1, text: "look at outlook", done: true },
      { id: 2, text: "lean vue better", done: false }
    ]
  },
  mutations: {
    inc(state) {
      state.count++;
    },
    dec(state) {
      state.count--;
    }
  },
  actions: {},
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  modules: {}
});
