//set user name
$(".placeholder_user p").text("Hello "+localStorage.getItem("username"));
//get all prodacts
let userOrder=localStorage.getItem("allEntries")
const tbody = document.getElementById("tbody");
prodcats=JSON.parse(userOrder)
console.log(prodcats);
    let content = "";
    let cost=0;
    if(prodcats==null){
      $( "table" ).after( "<h3> You don't have Items to buy<h3>" )
      $('button').attr('disabled','disabled');
    }
    for (let i = 0; i < prodcats.length; i++) {
      content += `
			<tr>
				<td>${i+1}</td>
				<td>${prodcats[i].modelName}</td>
                <td>${prodcats[i].price}</td>
                <td>${prodcats[i].review}</td>
			</tr>
        `;
        cost+= parseInt(prodcats[i].price)
        $(".prodact_cost p").text(`the cost of you order is ${cost} EGP`)
    }
    tbody.innerHTML = content;
    //Done
    $('button').click(function(){
        $('.alert').show()
      }) 
