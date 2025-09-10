let i = 0;
const txt = ['PROGRAMMER','WEB DEVELOPER','UI DESIGNER','PYTHON DEVELOPER','CREATIVE MIND'];
const speed = 100;
function typeWriter() {
   if (i < txt.length) {
      let j = 0;
      function type() {
         if (j < txt[i].length) {
            document.getElementById("roles").innerHTML += txt[i].charAt(j);
            j++;
            setTimeout(type, speed);
         } else {
            setTimeout(() => {
               document.getElementById("roles").innerHTML = "";
               i++;
               typeWriter();
            }, 1000);
         }
      }
      type();
   } else {
      i = 0;
      typeWriter();
   }
}
typeWriter();