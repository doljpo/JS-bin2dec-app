var app = new Vue({
  el: '#app',
  data: {
    title: 'Bin2Dec Calculator',
    binaryInput: "",
    decimalOutput: ""
  },

  methods: {
    convertToDec() {
      this.decimalOutput = this.binaryInput;      
    },

    reset() {
      this.binaryInput = "";
      this.decimalOutput = "";
    }
  }
})