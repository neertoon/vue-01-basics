const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(n) {
      this.counter = this.counter + n;
    },
    reduce(n) {
      this.counter = this.counter - n;
    },
    setName(event, nazwisko) {
      this.name =  event.target.value + ' ' + nazwisko;
    }
  }
});

app.mount('#events');
