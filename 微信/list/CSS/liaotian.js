	window.onload=function ()
	{
	var one=document.getElementById("one");
   	var texts=document.myform.texts;
   	var but=document.myform.but;
   	but.onclick=texts.onkeydown=function (e){
      var ev=e||window.event;
      if(ev.type=="click" || (ev.type=="keydown" && ev.keyCode==13))
      {
       var ppp=document.createElement("p");
       ppp.innerHTML=texts.value;
       ppp.className="pone";
       one.appendChild(ppp);
       texts.value="";
   	}
	}
