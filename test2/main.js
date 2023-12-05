const myForm = document.form;
myForm.addEventListener("submit", form);

function form(event) {
    event.preventDefault();
    let myForm = this;
    let name = myForm.name.value;
    let pw = myForm.pw.value;
    let mobile = myForm.mobilenumber.value;
    let em = myForm.email.value;

    let error = "";

    if (name === "") {
        error += "Name should not be empty";
    }
    if (pw === "") {
        error += "<br/>Password should not be empty";
    }
    if (!/^\d{10}$/.test(mobile)) {
        error += "<br/>Mobile number should be 10 digits";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
        error += "<br/>Email should be in a valid format";
    }

    if (error !== "") {
        alert(error);
        let errorElem = myForm.children[0];
        errorElem.innerHTML = error;
        errorElem.style.display = "block";
        return false;
    }

    myForm.removeEventListener("submit", form);
    myForm.submit();
    return true;
}
