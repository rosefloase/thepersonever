let audio = document.getElementById("audio");

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function playaudio() {
  let canplay = getCookie("canplay");
  if (canplay == "yes") {
    audio.play();
  } 
}

function yes(){
  let canplay = getCookie("canplay");
       setCookie("canplay", "yes", 30);
      
}

function no(){
  let canplay = getCookie("canplay");
   setCookie("canplay", "no", 30);  
}

function clearcookie(){
  let canplay = getCookie("canplay");
   setCookie("canplay", "DAMNIT", 30);  
}

function onloadhaha(){
  let canplay = getCookie("canplay");
 if (canplay == "yes" || canplay == "no") {
}
 else{
     let text;
  if (confirm("hey! can this site autoplay music? press ok for yes, and cancel for no") == true) {
  console.log("user said yes");
  yes();
  } else {
   console.log("user said no");
   no();
  }
 }
}

 function whatsmycookie(){
   let canplay = getCookie("canplay");
   alert(`your cookie is currently set to ${canplay}`);
 }