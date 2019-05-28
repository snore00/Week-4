function errorReporter(array){
  var err_element = document.getElementById('error')
  err_element.value + ("<br>" + array[0] + "is empty")
  console.log("element is empty")
}

function validateForm(event) {

  var inputs = Array.from(ourForm.getElementsByClassName("text")).filter(input => input.type == 'text');
  var empty = inputs.map(item => (item.value != "") ? true: false);
  var error = inputs.map(function (item, i){
    return [item.name, empty[i]]
  });
  inputs.forEach(item => (item[1]) ? 'valid' : errorReporter(item))
}

function init() {
  console.log("started init");
  myform = document.getElementById("ourForm");
  myform.addEventListener("submit", validateForm);
  console.log(myform);
}
