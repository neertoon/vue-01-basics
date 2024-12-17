const app = Vue.createApp({
    data() { //zawsze funkcja
        return { //zawsze obiekt
            courseGoal: 'Finish the course and learn EVERYTHING!',
            vueLink: 'https://vuejs.org/'
        };
    }
});

app.mount('#user-goal');