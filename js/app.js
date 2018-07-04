new Vue({
    el: '#app',

    data: {
        name: "Miwtoo",
        job: "student",
        age: 20,
        website: "http://miwtoo.github.io/",
        foods: []
    },

    methods: {
        getName: function(){
            return this.name
        },
        setName: function(n){
            return this.name = n
        },

        addAge: function(){
            this.age++
        },
        SubreactAge: function(){
            this.age++
        }
    }
})