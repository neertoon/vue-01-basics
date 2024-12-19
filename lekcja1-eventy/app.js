const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
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
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert('yeag')
    }
  }
});

app.mount('#events');
