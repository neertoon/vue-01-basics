const app = Vue.createApp({
  data() {
    return {
      counter: 10,
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
    setName(event) {
      this.name =  event.target.value;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert('yeag')
    },
    resetInput() {
      this.name = '';
    }
  },
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Nazwisko';
    }
  }
});

app.mount('#events');
