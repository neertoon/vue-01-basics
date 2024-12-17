const app = Vue.createApp({
    data() { //zawsze funkcja
        return { //zawsze obiekt
            courseGoal: 'Finish the course and learn EVERYTHING!'
        };
    }
});

app.mount('#user-goal');