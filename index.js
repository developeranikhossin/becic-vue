// l or data or methods propati 

new Vue({
    el: "#app",
    data: {
        title: "anik",
        ani: ["anik", "kahn"],
        anik: {
            name: "on"
        },
        geeting: ()=>{
            return "hello "
        }
    },
    methods: {
        get(){
            return this.title;
        },
        geti(){
            return this.geeting();
        }
    }
});

// Directives V-bind

new Vue({
    el: "#v-bind",
    data: {
       src: "https://picsum.photos/200/300?grayscale",
       alt: "this is dog",
       link: "https://www.google.com/"
    }
});

// Directives: V-text

new Vue({
    el: "#v-text",
    data: {
       myText: "this is anik khan",
       myHtml: "<strong>this is se</strong>"
    }
});


// Conditional Rendering

new Vue({
    el: "#v-Conditional",
    data: {
       user: "loffy",
       userAge: 15,
       allowedAge: 21 
    },
    methods: {
        condi(){
            return this.user === "loffyl" ? true : false;
        }
    }
});


// Directives: V-show 


new Vue({
    el: "#v-show",
    data: {
      user: "anik"
    }
});

// Loop: V-for

new Vue({
    el: "#v-for",
    data: {
      cars: ['BMW', 'toyota', 'ford'],
      user: {
        user: " anik khan",
        age: 12,
        country: "japan"
      }
    }
});

// V-once

new Vue({
    el: "#v-once",
    data: {
      name: "anik khan"
    },
    methods: {
        updated() {
            setTimeout(() => {
                this.name = "khan anik"
            }, 2000)
        }
    }
});


// Event Use: V-on

new Vue({
    el: "#v-on",
    data: {
      name: "anik khan",
      x: 0,
      y: 0,
    },
    methods: {
        updatedName() {
           this.name = "rafee";
        },
        getCode(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});

// V-model

new Vue({
    el: "#v-model",
    data: {
        formData: {
            firstName: '',
            lastName: ''
        }
    },
    handleForm(){
        console.log(this.formData);
    }
});

// Computed Property

new Vue({
    el: "#computed",
    data: {
        a: 0,
        b: 0,
        salary: 10
    },
    computed: {
        addToA(){
            return this.a + this.salary
        },
        addToB(){
            return this.b + this.salary
        }
    }
});


// Create More Instance

const app = new Vue({
    el: "#instance",
    data: {
        value: "1st"
    },
    methods:{
        changeValue(){
            app1.value = "changed";
        }
    }
});

const app1 = new Vue({
    el: "#instance1",
    data: {
        value: "2nd"
    }
});

// Mount & Template

const temp = `<p>this is my {{name}}</p>`;

const mount = new Vue({
    data: {
        name: "Anik"
    },
    template: temp
});
setTimeout(()=>{
    mount.$mount("#mount")
}, 2000);


// Use of Basic Component

Vue.component("name", {
    data() {
        return {
            name: "luffy"
        }
    },
    template: `<p>{{name}}</p>`
})

new Vue({
    el: "#component"
})


// Lifecycle of Vue JS

new Vue({
    el: "#lifecycle",
    data: {
        name: "anik"
    },
    methods: {
        updateName(){
            this.name = "anik khan"
        },
        killIt(){
            this.$destroy()
        }
    },
    beforeCreate() {
        console.log("running before create");
    },
    created() {
        console.log("running created");
    },
    beforeMount() {
        console.log("running before mound");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("running name updated");
    },
    updated() {
        console.log("updated");
    },
    beforeDestroy() {
        console.log("before destroy");
    },
    destroyed() {
        console.log("destroyed");
    },
})

