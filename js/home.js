
const searchInput=document.getElementById("searchBtn");
//set username using  js  from local storage
$("#placeholder_user ").text("Hello "+localStorage.getItem("username"));
$.ajax({
    method: "GET",
    url: "/js/fakeApi.txt",
    error: function () {
      $("body").html("<p>An error has occurred</p>");
    },
    success: function (responsBody) {
      let resArr = JSON.parse(responsBody);
      let content = "";
      console.log(resArr);
      for (let i = 0; i < resArr.length; i++) {
        content += `
        <div class="card mt-2 ml-2" style="width: 15rem;">
        <img class="card-img-top" src="${resArr[i].lapImg}" alt="Card image cap" style =" width: auto;  height: 150px;" >
        <hr>
        <div class="card-body text-center">
          <h5 class="card-title" style="font-size: 1rem;">${resArr[i].modelName}</h5>
          <p class="card-text text-left" style="font-size: 0.7rem;">${resArr[i].Desc}</p>
          <button id="more" type="submit" onclick="showLaptopDetails(${i})"  class="btn  btn-block">More</button>
        </div>
      </div>
          `;
      }
      $("#item_cards").append(content)
    },
  });
  //to detail screen
  function showLaptopDetails(details){
    localStorage.setItem("lapTopNum", details);
     window.location.href = '/html/detail.html'
     console.log(details)
  }
  //search 
  $('#searchBtn').on("keyup", function() {
    var searchBtnValue = $(this).val().toLowerCase();
    $(".card").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(searchBtnValue) > -1) 
    });
  });
  