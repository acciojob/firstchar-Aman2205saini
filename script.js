function firstChar(text) {
  for(var i=0;i<=text.length;i++){
	  if(text.charat(i)!=" "){
		  return text.charAt(i);
	  }
  }
	return"";
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
