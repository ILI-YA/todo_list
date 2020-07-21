let container = document.createElement("div");
let header = document.createElement("h1");

//нужно сделать, чтобы background у body менялся через 5 секунд

setTimeout(() => {document.body.style.background = "#958f8d";}, 5000);
setTimeout(() => {document.body.style.background = "#b48484";}, 10000);
setTimeout(() => {document.body.style.background = "";}, 15000);

header.append("TODO LIST/tms edition");
container.append(header);

const inputContaner = document.createElement("div");

const input = document.createElement("input");
input.placeholder = "Just do it!";
input.type = "text";

const inputButton = document.createElement("button");
inputButton.append("Add");
inputButton.onclick = function() {
    inputButton.style.color = "red";
};

//дописать onclick, чтобы если меньше чем 2, то ничего не делать и вывести alert c ошибка
//по нажатию на кнопку будет меняться ее цвет

inputButton.onclick = function () {
  if (input.value.length > 2) {
    addToList(input.value);
    input.value = "";
    inputButton.classList = ("btn");
  } else {
      alert('Error in str Just do it');
  }
};

let ol = document.createElement("ol");

function addToList(text) {
  let li = document.createElement("li");

  let removeButton = document.createElement("button");
  removeButton.append("Remove");
  removeButton.setAttribute('class', 'btn');

  let doneButton = document.createElement("button");
  doneButton.append("Done");
  doneButton.setAttribute('class', 'btn');

  let p = document.createElement("p");
  p.append(text);

  //заменить cssText на классы

  p.setAttribute('class', 'word');
  

  let liContainer = document.createElement("div");

  liContainer.setAttribute('class', 'liContainer');

  liContainer.append(doneButton, p, removeButton);
  li.append(liContainer);

  ol.append(li);
}

inputContaner.append(input, inputButton);
header.after(inputContaner);
inputContaner.after(ol);
document.body.append(container);