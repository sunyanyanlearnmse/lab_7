function init(){

  function yysEventFunction(){
    var text1 =document.getElementById("entryinput");
    var text2 =document.getElementById("textoutput");
    alert("Yanyan Sun: " + text1.value);
    text2.innerHTML=text1.value;
  }
  var entryn=document.getElementById("entrybutton");
  entryn.addEventListener("click" , yysEventFunction);

}


window.addEventListener('load', init);
