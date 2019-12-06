let diceSides = prompt("Enter the number of sides");

if (diceSides != null && diceSides > 0){
	alert("Result is " + Math.floor(Math.random() * diceSides + 1));
}

else alert("Invalid entry");
