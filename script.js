const form = document.querySelector('form')
const firstName = document.querySelector('#form_firstname');
const lastName = document.querySelector('#form_lastname');
const email = document.querySelector('#form_email');
const password = document.querySelector('#form_password');
const button = document.querySelector('#form_validate');

    const span_firstName = document.createElement("SPAN");
    const text_firstName_span = document.createTextNode("First Name cannot be empty");
    span_firstName.appendChild(text_firstName_span);

    const span_lastName = document.createElement("SPAN");
    const text_lastName_span = document.createTextNode("Last Name cannot be empty");
    span_lastName.appendChild(text_lastName_span);

    const span_email = document.createElement("SPAN");
    const text_email_span = document.createTextNode("email cannot be empty");
    span_email.appendChild(text_email_span);

    const span_password = document.createElement("SPAN");
    const text_password_span = document.createTextNode("Password cannot be empty");
    span_password.appendChild(text_password_span);



button.addEventListener("click", required)

function required(event) {
    event.preventDefault()

        var firstName_value = document.forms["formulaire"]["form_firstname"].value;
        var lastName_value = document.forms["formulaire"]["form_lastname"].value;
        var email_value = document.forms["formulaire"]["form_email"].value;
        var password_value = document.forms["formulaire"]["form_password"].value;

        if (firstName_value == "") {
            
            form.replaceChild(span_firstName, firstName.nextSibling );
        
        } else {
            span_firstName.remove(); 
        }

        if (lastName_value == "") {
            
            form.replaceChild(span_lastName, lastName.nextSibling );
        } else {
            span_lastName.remove(); 
        }

        if (email_value == "") {
            
            form.replaceChild(span_email, email.nextSibling );
        } else {
            span_email.remove(); 
        }

        if (password_value == "") {
            
            form.replaceChild(span_password, password.nextSibling );
        } else {
            span_password.remove(); 
        }
}
