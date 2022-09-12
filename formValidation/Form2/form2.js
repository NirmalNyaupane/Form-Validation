var nam = document.getElementById("name");
var add = document.getElementById("address");
var email = document.getElementById("email");
var num = document.getElementById("number");
var pass = document.getElementById("password");


function validate(){
    var namVal = nam.value;
    var addVal = add.value;
    var emailVal = email.value;
    var numVal = num.value;
    var passVal = pass.value;

    var nameRegax = /^[a-zA-Z ]{3,}$/;
    if(!nameRegax.test(namVal)){
        alert("Please enter valid user name");
        return false;
    }

    if(!nameRegax.test(addVal)){
        alert("Please enter valid address");
        return false;
    }

    var emailRegax = /^[a-zA-Z0-9.]{3,}@[a-zA-Z]{3,}[.][a-zA-Z]{3,}$/;
    if(!emailRegax.test(emailVal)){
        alert("Please enter valid email address");
        return false;
    }

    var numRegax = /^[0-9]{10,10}$/;
    if(!numRegax.test(numVal)){
        alert("Please enter valid number");
        return false;
    }

    if(passVal.length<6){
        alert("Length of password should be equal or greater than 6");
        return false;
    }
    return true;
}