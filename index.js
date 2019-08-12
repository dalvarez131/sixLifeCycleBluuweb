const app = new Vue({
  el: '#app',
  data: {
    saludo: 'Soy Ciclo de Vida de Vue'
  },
  beforeCreate() {
    console.log("BeforeCreate");
  },
  created() {
    // al crear los metodos, observadores y eventos, pero aun no accede al DOM, aun no se puede acceder a 'el'
    console.log("created");
  },
  beforeMount() {
    // se ejecuta antes de insertar el DOM
    console.log("beforeMount");
  },
  mounted() {
    // se ejecuta al insertar el DOM
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("Updated");
  },
  beforeDestroy() {
    console.log("BeforeDestroy");
  },
  methods: {
    destruir() {
      this.$destroy();
    }

  }
});