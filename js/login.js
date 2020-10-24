let mCurrentUserName=localStorage.getItem("username");
let mCurrentUserPassword=localStorage.getItem("newUserNamePassword");
let mUserInputUsername=$("#username-lg").val();
let mUserInputPassword=$("#password-lg").val();
let count=0;
$("#loginBtn").on("click",()=>{
    if(mUserInputUsername!=mCurrentUserName ||mUserInputPassword !=mCurrentUserPassword)
    {
        alert("user name or password is wrong ")
        count++;
        if(count>3){
            alert("please create acount")
        }
    }
    else(
        open("homepage.html")
    )
})
