
  let btn = document.getElementById("btn");
  btn.addEventListener("click", function() {
  let numberOne = parseInt(document.getElementById("numberOne").value,10);
  let numberTwo = parseInt(document.getElementById("numberTwo").value,10);
  let calc = document.getElementById("calc").value;
  let results=[];
  let resultText;
    
  let ul = document.createElement("ul");
  document.body.append(ul);

  switch (calc) {
    case "+":
      resultText=numberOne + "+" + numberTwo + "=" + (numberOne + numberTwo);
      results.push(resultText);
      break;

    case "-":
      resultText=numberOne + "-" + numberTwo + "=" + (numberOne - numberTwo);
      results.push(resultText);
      break;

    case "*":
      resultText=numberOne + "*" + numberTwo + "=" + (numberOne * numberTwo);
      results.push(resultText);
      break;

    case "/":
      resultText=numberOne + "/" + numberTwo + "=" + (numberOne / numberTwo);
      results.push(resultText);
      break;

    default:
      console.log("Invalid operator");
      break;
  }
  results.forEach(function(num) {
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += num;
  });

 

 }
);