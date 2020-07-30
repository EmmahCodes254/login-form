 function signup(){
    document.querySelector(".login-form-container").style.cssText="display:none";
    document.querySelector(".signup-form-container").style.cssText="display:block";
    document.querySelector(".button-1").style.cssText="display:none";
    document.querySelector(".button-2").style.cssText="display:block; margin-left:70px";
}
function login(){
    document.querySelector(".login-form-container").style.cssText="display:block";
    document.querySelector(".signup-form-container").style.cssText="display:none";
    document.querySelector(".button-1").style.cssText="display:block; margin-left:70px";
    document.querySelector(".button-2").style.cssText="display:none";
}