function init(){

  function clickalert(){
    var text =document.getElementById("entryinput").value;
    alert("Yanyan Sun: " + text);
    document.getElementById("textoutput").innerHTML=text    
  }
  var entryn=document.getElementById("entrybutton");
  entryn.addEventListener('click' , clickalert);
}
window.addEventListener('load', init);
