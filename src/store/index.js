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
    todos: [
      {
        checked: false,
        color: "#fcc288",
        date: "05/31/2021",
        day: "1",
        id: uuidv4(),
        projectName: "Project 1",
        text: "test 1",
        time: "06:15 AM",
      },
      {
        checked: true,
        color: "#fcc288",
        date: "05/31/2021",
        day: "1",
        id: uuidv4(),
        projectName: "Project 3",
        text: "test 2",
        time: "06:15 AM",
      },
      {
        checked: false,
        color: "#fcc288",
        date: "05/31/2021",
        day: "1",
        id: uuidv4(),
        projectName: "Project 2",
        text: "test 3",
        time: "06:15 AM",
      },
    ],
    selectedProject: "Project 1",
    // selectedTodo:{
    //   checked: true,
    //   color: "#fcc288",
    //   date: "05/31/2021",
    //   day: "1",
    //   id: uuidv4(),
    //   projectName: "Project 1",
    //   text: "test",
    //   time: "06:15 AM",
    // },
    selectedTodo: undefined,
  },
  mutations: {
    editSelectedProject(state, payload) {
      state.selectedProject = payload;
    },
    setSelectedTodo(state, payload){
      state.selectedTodo = payload;
    }
  },
  actions: {},
  modules: {},
});
