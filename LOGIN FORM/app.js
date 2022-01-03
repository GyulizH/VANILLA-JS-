function validateEmail(){
    const emailValue = document.getElementById("email").value
    console.log(emailValue.length)
    //use regex
    if(emailValue.length>0 && !emailValue.includes("@")){
        document.querySelector(".validation-error").style.visibility = "visible"
        document.querySelector(".validation-error").innerHTML = "Please enter a valid email address"
    }else{
        document.querySelector(".validation-error").style.visibility = "hidden"
        document.querySelector(".validation-error").innerHTML = ""
    }

}

document.getElementById("email").addEventListener("blur",validateEmail)

function validatePassword(){
    const passwordValue = document.getElementById("password").value

    //use regex
    if(passwordValue.length>0 && !checkForSpecialChar(passwordValue) && !checkForUpperCase(passwordValue)){
        document.querySelector(".validation-error").style.visibility = "visible"
        document.querySelector(".validation-error").innerHTML = "Please enter a valid password which contains at least 8 characters, a special character and an uppercase character"
    }else{
        document.querySelector(".validation-error").style.visibility = "hidden"
        document.querySelector(".validation-error").innerHTML = ""
    }
}

function checkForSpecialChar(value){
    //use regex
    for(let char of value){
        if((char.charCodeAt(0)>=32  && char.charCodeAt(0)<=47) || (char.charCodeAt(0)>=91  && char.charCodeAt(0)<=96) || (char.charCodeAt(0)>=123  && char.charCodeAt(0)<=126)){
            return true
        }
    }
    return false
}

function checkForUpperCase(value){

    for(let char of value) {
        if ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)) {
            return true
        }
    }
    return false
}

function showPassword(){
    if(document.getElementById("passwordCheck").checked){
        document.getElementById("password").type = "text"
    }else{
        document.getElementById("password").type = "password"
    }
}
document.getElementById("password").addEventListener("blur",validatePassword)
document.getElementById("passwordCheck").addEventListener("change", showPassword)
