import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: uuidv4(),
        name: "Project 1",
        numberOfTodos: 2,
      },
      {
        id: uuidv4(),
        name: "Project 2",
        numberOfTodos: 1,
      },
      {
        id: uuidv4(),
        name: "Project 3",
        numberOfTodos: 3,
      },
    ],
    selectedProject: "Project 1",
  },
  mutations: {
    editSelectedProject(state, payload) {
      state.selectedProject = payload;
    },
  },
  actions: {},
  modules: {},
});
