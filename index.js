function myFunction(){
  var x=document.getElementById("myTopnav");
  if(x.className == "topnav"){
    x.className += " responsive";
    }else{
    x.className="topnav";
  }
}
function changeImage(){
  var image=document.querySelector(" .img-1");
  if(image.src.match("images/icon-close.svg")){
    image.src="images/icon-hamburger.svg";
  }else{
    image.src="images/icon-close.svg";
  }
}
