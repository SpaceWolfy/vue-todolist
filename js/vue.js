new Vue({
  el: "#app",
  data: {
    list: [
      {
        text: "Fare i compiti",
        done: true,
      },
      {
        text: "Lavare i piatti",
        done: false,
      },
      {
        text: "Fare il bucato",
        done: true,
      },
      {
        text: "Pagare le Boolette",
        done: false,
      },
    ],
    //per l'input
    addNewItem: "",
  },
  methods: {
    addItemToList: function () {
      let upperCItem =
        this.addNewItem.charAt(0).toUpperCase() + this.addNewItem.slice(1);
      if (this.addNewItem === "") {
        alert("Prima di inviare, inserisci qualcosa!");
      } else {
        this.list.push({ text: upperCItem, done: false });
        this.addNewItem = "";
      }
    },
    removeItemFromList: function (index) {
      console.log("Rimuovo l'elemento di indice", index);
      this.list.splice(index, 1); //rimuove un elemento all'indice indicato
    },
    cancelItemInList: function (index) {
      /* if (this.list[index].done) {
        this.list[index].done = false;
      } else {
        this.list[index].done = true;
      } */
      this.list[index].done = !this.list[index].done;
    },
  },
});
