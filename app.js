const app = Vue.createApp({
    data() { //zawsze funkcja
        return { //zawsze obiekt
            courseGoal: 'Finish the course and learn EVERYTHING!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: { //zawsze obiekt
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'LEarn Vue';
            } else {
                return 'Ale master VUE';
            }
        }
    }
});

app.mount('#user-goal');