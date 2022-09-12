var nam = document.getElementById("name");
var email = document.getElementById("email");
var zip = document.getElementById("zipcode");
var sele = document.getElementById("sele");


function validate(){
    var namVal = nam.value;
    var emailVal = email.value;
    var zipVal = zip.value;
    var seleVal = sele.value;
    var namRegex = /^[a-zA-Z ]{6,10}$/;
    if(!namRegex.test(namVal)){
        alert("User name should be 6-10 length");
        return false;
    }
    var emailRegex  = /^[a-zA-Z0-9.]{3,}@[a-zA-Z]{3,}[.][a-zA-Z]{3,}$/;

    if(!emailRegex.test(emailVal)){
        alert("Please enter valid email");
        return false;
    }
    var zipRegex = /^[0-9]/;
    if(!zipRegex.test(zipVal)){
        alert("Please enter valid zip code");
        return false;
    }

    if(seleVal==''){
        alert("Please select country");
        return false;
    }
}