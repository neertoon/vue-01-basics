const app = Vue.createApp({
    data() { //zawsze funkcja
        return { //zawsze obiekt
            courseGoalA: '<h3>Finish the course and learn EVERYTHING!</h3>',
            courseGoalB: '<h3>Master VUE i zostań FrontEnd nińdzia</h3>',
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