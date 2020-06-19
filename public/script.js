function calculateTotal() {
    var month = document.myform.period.value;
    var amount = document.myform.amount.value;
    var r = 10;
    var totalInterest = (r * amount * month) / 100;
    var m = parseInt(month);
    var i = parseInt(totalInterest);
    var l = parseInt(amount);
  
    totalReturn = eval(totalInterest);
    totalTotal = eval(l + i);
  
    document.getElementById("totalinterestrate").innerHTML = totalReturn;
  }
  
  document.getElementById("btn").onclick = function () {
    var month = document.myform.period.value;
    var amount = document.myform.amount.value;
    var r = 10;
    var totalInterest = (r * amount * month) / 100;
  
    var m = parseInt(month);
    var i = parseInt(totalInterest);
    var l = parseInt(amount);
  
    totalReturn = eval(totalInterest);
    totalTotal = eval(l + i);
    document.getElementById("totalinterest").innerHTML = totalTotal;
  };