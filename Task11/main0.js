const myForm = document.forms[0];
myForm.addEventListener("submit", validForm);

function validForm(submitEvent) {
  submitEvent.preventDefault();
  console.log(this);
  let myForm = this;
  let name = myForm.name.value;
  let pw = myForm.pw.value;

  let error = "";

  if (name === "") {
    //alert("name is required");
    //return false;
    error += "Name should not be empty";
  }
  if (pw === "") {
    //alert("password is required");
    //return false;
    error += "<br/>Password should not be empty";
  }

  if (error !== "") {
    //alert(error);
    let errorElem = myForm.children[0];
    errorElem.innerHTML = error;
    errorElem.style.display = "block";
    return false;
  }

  myForm.removeEventListener("submit", validForm);
  myForm.submit();
  return true;
}
