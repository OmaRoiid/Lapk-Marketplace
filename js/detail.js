let numberOfLap=localStorage.getItem("lapTopNum");//use the  index as an id to get data 
let mCurentuserName=localStorage.getItem("username");
let mCLickedLap;
$.ajax({
    method: "GET",
    url: "/js/fakeApi.txt",
    error: function () {
      $("body").html("<p>An error has occurred</p>");
    },
    success: function (responsBody) {
      let resArr = JSON.parse(responsBody);
       mCLickedLap=resArr[numberOfLap]
     $(".detail__model--name p").text(mCLickedLap.Desc)
     $(".detail__model--name label").text(`By ${mCLickedLap.modelName}`)
     $(".detail__model--img img").attr("src",mCLickedLap.lapImg);
     $(".detail__info ul li:nth-child(1)").text(mCLickedLap.Desc)
     $(".detail__info ul li:nth-child(2)").text(`Type : ${mCLickedLap.type}`)
     $(".detail__info ul li:nth-child(3)").text(`Price : ${mCLickedLap.price}`)
     $(".detail__info ul li:nth-child(4)").text(`Review : ${mCLickedLap.review}`)
    },
  });
 
//add to cart 
$("#add").on("click",function(){
 
 var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
 if(existingEntries == null) existingEntries = [];
 localStorage.setItem("entry", JSON.stringify(mCLickedLap));
 existingEntries.push(mCLickedLap);
 localStorage.setItem("allEntries", JSON.stringify(existingEntries));
})
//show alert
$('button').click(function(){
  $('.alert').show()
}) 
$(".mycart").on("click",function(){
  if(!mCurentuserName){//user as a gauset 
    let result = confirm( "Please Login !" )
    if(result) window.location.href = '/html/login.html'
  }
  else{
    window.location.href = '/html/mycart.html'
  }

})