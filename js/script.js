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
        { text: "Formattare il computer", done: null },
      ],
    };
  },
  methods: {},
}).mount("#app");
