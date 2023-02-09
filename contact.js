'use strict'
//forms validation

let RegistrationForm=document.getElementById('registration-form');

RegistrationForm.addEventListener('submit', function(event){
    event.preventDefault();
    let errors={

    };
    let formElement=event.target;



    //username
    let usernameValue = document.getElementById('username').value;

    if (usernameValue==""){
        errors.myusername="Username field can not be empty"
    }
    if (usernameValue.length <5){
         errors.myusername="Username field can not be empty"
    }

    //password
    let password1 = document.getElementById('passw').value;
    let password2 = document.getElementById('passw2').value;

    if (password1 == ""){
        errors.mypassword ='Password field can not be empty'
    }
    if (password1!=password2){
        errors.mypassword2='Password do not match';

    }

   // radio
    let age = false;
    formElement.querySelectorAll('[name="age"]').forEach(item => {
        if (item.checked){
            age = true;
        }
    });
    
    if(!age){
        errors.age ="Please select your age";
    }

    //checkbox
    let agree = document.getElementById("agree").checked;

    if (!agree){
        errors.agree = "You must agree our terms and conditions";
    }

formElement.querySelectorAll('.error-text').forEach(item => {
        item.innerHTML="";
});

    for (let item in errors){
        let spanError =document.getElementById('error_' + item);
        if(spanError){
            spanError.textContent =errors[item];
        }
    }

    if (Object.keys(errors).length==0){
        formElement.submit();
     }
});


//emailregex

let emailField = document.getElementById('myemail');

emailField.addEventListener('keydown', function(){
    let emailValue =document.getElementById('myemail').value;
    let text=document.getElementById('text');
    let pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValue.match(pattern)){
        emailField.style.border ="2px solid green";
        text.innerText='Your email is valid';
        text.style.color = 'green';

    }else{
        emailField.style.border ="2px solid red";
        text.innerText='Your email is invalid';
        text.style.color = 'red';
    }
});



