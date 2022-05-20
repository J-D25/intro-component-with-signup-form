const form = document.querySelector('form')
const button = document.querySelector('#form_validate');
button.addEventListener("click", required)

const firstName = document.querySelector('#form_firstname');
const firstName_span = document.createElement("SPAN");
const firstName_span_text = document.createTextNode("First Name cannot be empty");
firstName_span.appendChild(firstName_span_text);

function required() {

    let input = document.getElementById("form_firstname");
    if (input.validity.valueMissing) {
        input.setAttribute("class", "form_input_invalid");

        form.replaceChild(firstName_span, firstName.nextSibling);
        firstName_span.setAttribute("id", "form_firstname_invalid");
        firstName_span.setAttribute("class", "form_span_invalid");
    } else {
        input.removeAttribute("class", "form_input_invalid");
        firstName_spanInvalid = document.getElementById('form_firstname_invalid');
        if (firstName_spanInvalid) {
            firstName_spanInvalid.remove();
        }
    }
}
// console.log(document.getElementById("form_firstname").validity)