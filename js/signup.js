
document.getElementById("create").addEventListener("click",checkAndSave);

function checkAndSave(){
    let newUserName=document.getElementById("username-sg").value;
let newUserNamePassword=document.getElementById("password-sg").value;
let rePassword=document.getElementById("repass-sg").value;
    if(!newUserName || !newUserNamePassword ||!rePassword){
        alert("please fill all inputs")
    }
//check if password=== re-password before saving 
else if(newUserNamePassword!=rePassword){
    //saving data to localStorage
    alert("password not matching")

}
else{
    localStorage.setItem("usernameKey", newUserName);
    localStorage.setItem("newUserNamePasswordKey", newUserNamePassword);
    //routing to home screen
    open("html/homepage.html")
}

}
