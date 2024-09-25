let username=document.getElementById("username");
let password=document.getElementById("password");

function validate(callback){
    console.log(username.value);
    console.log(password.value);
    
    if(username.value.trim()=="admin" && password.value.trim()=="12345"){
   return true;
}
    else{
    alert("Enter a valid username and password");
return false;
}
}
 function redirect(){
    console.log("redirect");
    window.location.href="../todo.html"
 }
