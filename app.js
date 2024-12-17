const app = Vue.createApp({
    data() { //zawsze funkcja
        return { //zawsze obiekt
            courseGoalA: 'Finish the course and learn EVERYTHING!',
            courseGoalB: 'Master VUE i zostań FrontEnd nińdzia',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: { //zawsze obiekt
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA; //VUE binduje this z danymi
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');