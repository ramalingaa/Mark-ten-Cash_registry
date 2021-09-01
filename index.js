var billAmount =document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#Cash-given");
var btnClick = document.querySelector("#btn-click");
var table = document.getElementById("table");
var failedMess = document.querySelector("#falied-mess")
// var noOfNotes = document.querySelector(".noOf-Notes");

function clickHandler(){
    var billAmountIn = Number(billAmount.value);
    var cashGivenIn = Number(cashGiven.value);
    
    var returnChange = [];
    
    if(cashGivenIn > billAmountIn){
        if(billAmountIn > 0){
       let diffAmount = cashGivenIn - billAmountIn;
       let  denomoe =[2000,500,200,100,50,20,10,5,1];
      
       for (let notes of denomoe){
           result = diffAmount/notes;
           finalResult = parseInt(result);
           returnChange.push(finalResult);
           diffAmount = diffAmount % notes;

       }
       hideMessage();
       for(var i = 0; i < (table.rows.length-1); i++)
       {
         // cells
         for(var j = 1; j < table.rows[i].cells.length; j++)
         {
             table.rows[i].cells[j].innerText = returnChange[j-1];
         }
       }
       
    }}
    else{
         showMessage()
    }
    function hideMessage() {
        failedMess.style.display = "none";
      }
      
      function showMessage(msg) {
        failedMess.style.display = "block";
        const newString = "Do not come Tomorrow";
        failedMess.innerText = newString;
        }
      
      
        
}
btnClick.addEventListener("click",clickHandler)
