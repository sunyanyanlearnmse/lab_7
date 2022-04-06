function init(){

  function yysEventFunction(){
    var text =document.getElementById("entryinput").value;
    alert("Yanyan Sun: " + text);
    document.getElementById("textoutput").innerHTML=text；    
    
  }
  var entryn=document.getElementById("entrybutton");
  entryn.addEventListener("click" , yysEventFunction);

}


window.addEventListener('load', init);
