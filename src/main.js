var app = new Vue({
  el: '#app',
  data: {
    title: 'Bin2Dec Calculator',
    binaryInput: "",
    decimalOutput: "",
    inputEvent: null
  },

  methods: {
    isBinary(inputEvent) {
      inputEvent = (inputEvent) ? inputEvent : window.event;

      if (inputEvent.key == 1 || inputEvent.key == 0) {
        return true;
      }
      else {
        inputEvent.preventDefault();
      }
    },

    convertToDec() {
      this.decimalOutput = this.binaryInput;      
    },

    reset() {
      this.binaryInput = "";
      this.decimalOutput = "";
    }
  }
})