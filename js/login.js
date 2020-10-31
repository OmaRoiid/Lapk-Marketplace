let mCurrentUserName=localStorage.getItem("username");
let mCurrentUserPassword=localStorage.getItem("newUserNamePassword");
let count=0;
$("#loginBtn").on("click",function(){
    let mUserInputUsername=$("#username-lg").val();
    let mUserInputPassword=$("#password-lg").val();
    if(mUserInputUsername!=mCurrentUserName ||mUserInputPassword !=mCurrentUserPassword)
    {
        alert("user name or password is wrong ")
        count++;
        if(count>3){
            alert("please create acount")
        }
    }
    else{
        window.location.href='/html/homepage.html',true;
    }
    return false;
})
$("#guestBtn").on("click",function(){
    window.location.href='/html/homepage.html',true;
})
