function init(){

  function yysEventFunction(){
    var text1 =document.getElementById("entryinput").value;
    alert("Yanyan Sun: " + text);
    document.getElementById("textoutput").innerHTML=text1；    
    
  }
  var entryn=document.getElementById("entrybutton");
  entryn.addEventListener("click" , yysEventFunction);

}


window.addEventListener('load', init);
