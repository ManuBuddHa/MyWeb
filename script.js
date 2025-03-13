function image(){
   const button=document.querySelector("button")
   const imgContainer = document.querySelector(".imgContainer");
   if(imgContainer.style.display==="none"){
      imgContainer.style.display="block";
      button.style.backgroundColor="white";
      button.style.color="red";
      button.style.boxShadow=".1em .1em 1vw black";
   }
   else{
      imgContainer.style.display="none";
      button.style.backgroundColor="rgb(11, 190, 11)";
      button.style.color="antiquewhite";
      button.style.boxShadow="0 0 1em lime";
   }
}