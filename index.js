var billAmount =document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#Cash-given");
var btnClick = document.querySelector("#btn-click");
var table = document.getElementById("table");
// var noOfNotes = document.querySelector(".noOf-Notes");

function clickHandler(){
    var billAmountIn = billAmount.value;
    var cashGivenIn = cashGiven.value;
    
    var returnChange = [];
    
    if(cashGivenIn > billAmountIn){
    let diffAmount = cashGivenIn - billAmountIn;
       let  denomoe =[2000,500,200,100,50,20,10,5,1];
      
       for (let notes of denomoe){
           result = diffAmount/notes;
           finalResult = parseInt(result);
           returnChange.push(finalResult);
           diffAmount = diffAmount % notes;

       }
       
    }
    // for(var i = 0; i < (table.rows.length-1); i++)
    //     {
    //       // cells
    //       for(var j = 1; j < table.rows[i].cells.length; j++)
    //       {
    //           table.rows[i].cells[j].innerText = returnChange[j-1];
    //       }
    //     }
    console.log(returnChange)
      
        
}
btnClick.addEventListener("click",clickHandler)
