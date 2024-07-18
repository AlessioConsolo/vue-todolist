const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [
        {
          text: "Prendere i biglietti per il concerto di Night Lovell",
          done: false,
        },
        { text: "Diventare uno sviluppatore web dignitoso", done: false },
        { text: "Comprare uno squalo", done: true },
        { text: "Sopravvivere al caldo", done: false },
        { text: "Formattare il computer", done: false },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.todoList.push({
          text: this.newTodo,
          done: false,
        });
        this.newTodo = null;
      }
    },
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },
  },
}).mount("#app");
