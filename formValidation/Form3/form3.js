var nam = document.getElementById("name");
var email = document.getElementById("email");
var pass = document.getElementById("password");
var conf = document.getElementById("confirm");
var check = document.getElementById("check");

function validate(){
    var namVal = nam.value;
    var emailVal = email.value;
    var passVal = pass.value;
    var confirmVal = conf.value;

    var nameRegax = /^[a-zA-Z ]{3,}$/;
    if(!nameRegax.test(namVal)){
        alert("Please enter valid user name");
        return false;
    }
    
    var emailRegax = /^[a-zA-Z0-9.]{3,}@[a-zA-Z]{3,}[.][a-zA-Z]{3,}$/;
    if(!emailRegax.test(emailVal)){
        alert("Please enter valid email address");
        return false;
    }

    if(passVal<6){
        alert("Length of password should be equal or greater than 6");
        return false;
    }

    if(confirmVal!=passVal){
        alert("Length of password should be equal or greater than 6");
        return false;
    }

   if(check.checked==false){
        alert("Checkbox must be checked");
        return false;
   }
   return true;

}