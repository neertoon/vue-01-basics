const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      lastName: '',
      confirmedName: '',
      // fullname: ''
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
      this.lastName = '';
    }
  },
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  watch: {
    // name(value, prevValue) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },

    // lastName(value, prevValue) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }

    counter(value) {
      if (value > 15) {
        this.counter = 0;
      }
    }
  }
});

app.mount('#events');
