

$("#create").on("click",function(){

    let newUserName=document.getElementById("username-sg").value;
    let newUserNamePassword=document.getElementById("password-sg").value;
    let rePassword=document.getElementById("repass-sg").value;
        if(!newUserName || !newUserNamePassword ||!rePassword){
            alert("please fill all inputs")
        }
    //check if password=== re-password before saving 
     if(newUserNamePassword!=rePassword){
        //saving data to localStorage
        alert("password not matching")
    }
    
        localStorage.setItem("username", newUserName);
        localStorage.setItem("newUserNamePassword", newUserNamePassword);
        //window.location.href = '/html/login.html';
        window.location.href='/html/homepage.html',true;
    return false;
})

