

const app =  new Vue({

  el: "#app",

  data: {
    frase: "",
  },


  mounted() {
   this.generaFrase()
  },



  methods: {
    generaFrase(){
      for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/word')
        .then(res =>{
          this.frase += " " + res.data.response;
        })    
      }
    }
  },
})
