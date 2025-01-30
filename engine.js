let celsius = document.querySelector("#celsius");
let kelvin = document.querySelector("#kelvin");
let fah = document.querySelector("#fah");

function changemek() {
  kelvin.value = 273 + parseInt(celsius.value);
  fah.value = (parseInt(celsius.value) * 9) / 5 + 32;
}
function changeKel() {
  celsius.value = parseInt(kelvin.value) - 273;
  fah.value = ((parseInt(kelvin.value) - 273) * 9) / 5 + 32;
}
function changeFah() {
  kelvin.value = ((parseInt(fah.value) - 32) * 5) / 9 + 273;
  celsius.value = ((parseInt(fah.value) - 32) * 5) / 9;
}
