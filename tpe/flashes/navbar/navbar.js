       	window.RufflePlayer = window.RufflePlayer || {};
		window.RufflePlayer.config = {
			"wmode":"transparent",
			"preferredRenderer": "canvas",
			"quality":"low",
			"autoplay":"on",
			"unmuteOverlay":"hidden",
			"letterbox":"off",
			"splashScreen":false,
			"allowScriptAccess": true
		};
var navwrapper = document.getElementById("navwrapper");
setTimeout( tryswfobject, 500 );

function tryswfobject(){
	var caught = false;
	try {
		swfobject
	}
	catch {
		caught = true
	}	
	
	if (caught == true){
		setTimeout( tryswfobject, 500 );
	}
	else{
		setupflash()
	}
}

function setupflash(){ 
  var att = { data:"/flashes/navbar/navbar.swf", width:"100%", height:"100%", wmode:"transparent", allowScriptAccess: 'always'};
  var par = { shit:"foo=bar" };
  var id = "navswf";
  swfobject.createSWF(att, par, id);
}

function raise(){
	navwrapper.style.zIndex = "10";
}
function lower(){
	navwrapper.style.zIndex = "1";
}

function whatlink(asdf){
	switch(asdf){
		case "home":
			window.location.href = "/home";
		break;
		case "abtme":
			window.location.href = "/abtme";
		break;
		case "subsites":
			window.location.href = "/art";
		break;
		case "blog":
			window.location.href = "/blogg";
		break;
		case "more":
			window.location.href = "/more";
		break;
		case "links":
			window.location.href = "/otherslinks";
		break;
		case "options":
			window.location.href = "/options";
		break;
	}	
}

