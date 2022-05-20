const form = document.querySelector('form')
const button = document.querySelector('#form_validate');
const inputs = document.querySelectorAll("input");
button.addEventListener("click", required);

function required(){
    inputs.forEach((input) => {
    const input_span = document.createElement("SPAN");
    const input_placeholder = input.placeholder;
    const cannot = " cannot be empty";
    const input_span_text = document.createTextNode(input_placeholder + cannot)
    input_span.appendChild(input_span_text);

    if (input.validity.valueMissing) {
        input.setAttribute("class", "form_input_invalid");

        form.replaceChild(input_span, input.nextSibling);
        input_span.setAttribute("id", input.id+"_invalid");
        input_span.setAttribute("class", "form_span_invalid");
    } else {
        input.removeAttribute("class", "form_input_invalid");
        input_spanInvalid = document.getElementById(input.id+"_invalid");
        if (input_spanInvalid) {
            input_spanInvalid.remove();
        }
    }
  })
}