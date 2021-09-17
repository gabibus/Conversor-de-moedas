function Converter() {
  var elementValue = document.getElementById("valor");
  var value = elementValue.value;
  var dolarValue = parseFloat(value);

  var realValue = dolarValue * 0.19;
  var realValue = realValue.toFixed(2);
  console.log(realValue);

  var elementConvertedValue = document.getElementById("valorConvertido");
  var valorConvertido = "$ " + realValue;
  elementConvertedValue.innerHTML = valorConvertido;
}

function Conver() {
  var elementValue = document.getElementById("valor");
  var value = elementValue.value;
  var dolarValue = parseFloat(value);

  var realValue = dolarValue * 247056.96;
  var realValue = realValue.toFixed(2);
  console.log(realValue);

  var elementConvertedValue = document.getElementById("valorConvertido");
  var valorConvertido = "₿ " + realValue;
  elementConvertedValue.innerHTML = valorConvertido;
}

function Conv() {
  var elementValue = document.getElementById("valor");
  var value = elementValue.value;
  var dolarValue = parseFloat(value);

  var realValue = dolarValue * 7.24;
  var realValue = realValue.toFixed(2);
  console.log(realValue);

  var elementConvertedValue = document.getElementById("valorConvertido");
  var valorConvertido = "£ " + realValue;
  elementConvertedValue.innerHTML = valorConvertido;
}

function Con() {
  var elementValue = document.getElementById("valor");
  var value = elementValue.value;
  var dolarValue = parseFloat(value);

  var realValue = dolarValue * 6.19;
  var realValue = realValue.toFixed(2);
  console.log(realValue);

  var elementConvertedValue = document.getElementById("valorConvertido");
  var valorConvertido = "€ " + realValue;
  elementConvertedValue.innerHTML = valorConvertido;
}