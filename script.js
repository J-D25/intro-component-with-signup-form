const firstName = document.querySelector('#form_firstname');
const lastName = document.querySelector('#form_lastname');
const email = document.querySelector('#form_email');
const password = document.querySelector('#form_password');
const button = document.querySelector('#button');

button.addEventListener("click", required)

function required(event) {
    event.preventDefault()

        var firstName_value = document.forms["formulaire"]["form_firstname"].value;
        var lastName_value = document.forms["formulaire"]["form_lastname"].value;
        var email_value = document.forms["formulaire"]["form_email"].value;
        var password_value = document.forms["formulaire"]["form_password"].value;

        if (firstName_value = "") {
            const span_firstName = document.createElement("SPAN");
            span.setAttribute("class", "firstName_span");
            span.setAttribute("class", "span")
            const text_firstName_span = document.createTextNode("First Name cannot be empty");
            span_firstName.appendChild(text_firstName_span);
        
        } else {

        }

        if (lastName_value = "") {
            const span_lastName = document.createElement("SPAN");
            span.setAttribute("class", "lastName_span");
            span.setAttribute("class", "span");
            const text_lastName_span = document.createTextNode("Last Name cannot be empty");
            span_lastName.appendChild(text_lastName_span);
        } else {

        }

        if (email_value = "") {
            const span_email = document.createElement("SPAN");
            span.setAttribute("class", "lastName_span");
            span.setAttribute("class", "span");
            const text_email_span = document.createTextNode("email cannot be empty");
            span_email.appendChild(text_email_span);
        } else {
            
        }

        if (password_value = "") {
            const span_password = document.createElement("SPAN");
            span.setAttribute("class", "lastName_span");
            span.setAttribute("class", "span");
            const text_password_span = document.createTextNode("Password cannot be empty");
            span_password.appendChild(text_password_span);
        } else {
            
        }
}
