window.onload=function ()
{	
	var more=document.getElementById("more");
	var alert=document.getElementById("alert");
	more.onclick=function (e)
	{
		var ee = window.event || e;
        ee.stopPropagation();
        
       
		alert.style.display="inline";
	}
	var bo=document.getElementById("bo");
	bo.onclick=function ()
	{
		var aa = window.event || e;
        aa.stopPropagation();
		alert.style.display="none";
	}
	
	/*这是聊天页面*/
	var LThead=document.getElementById("LThead");
	var LTcon=document.getElementById("LTcon");
	var LTboot=document.getElementById("LTboot");
	var liao=document.getElementById("LT");
	liao.onclick=function ()
	{
		LThead.style.display="inline-block";
		LTboot.style.display="inline-block";
		LTcon.style.display="inline-block";
		contentall.style.display="none";
		findall.style.display="none";
		addall.style.display="none";
		bootall.style.display="none";
		headall.style.display="none";
		friend.style.display="none";
		fhall.style.display="none";
		meall.style.display="none";
	}
	/*聊天页面结束*/
	
	
    /*这是底部换页的部分*/
	var tu3=document.getElementById("tu_3");
	var tu1=document.getElementById("tu_1");
	var tu2=document.getElementById("tu_2");
	var tu4=document.getElementById("tu_4");
	/*换页结束*/
	var fhall=document.getElementById("fhall");
	var re=document.getElementById("return");
	var fan=document.getElementById("fanhui");
	var meall=document.getElementById("meall");
	var friendlink=document.getElementById("friendlink");
	var bootall=document.getElementById("bootall");
	var friend=document.getElementById("friend");
	var headall=document.getElementById("headall");
	var contentall=document.getElementById("contentall");
	var findall=document.getElementById("findall");
	var addall=document.getElementById("addall");
	tu3.onclick=function ()
	{
		contentall.style.display="none";
		findall.style.display="inline-block";
		addall.style.display="none";
		bootall.style.display="inline-block";
		headall.style.display="inline-block";
		friend.style.display="none";
		fhall.style.display="none";
		meall.style.display="none";
	}
	tu1.onclick=function ()
	{
		contentall.style.display="inline-block";
		findall.style.display="none";
		addall.style.display="none";
		bootall.style.display="inline-block";
		headall.style.display="inline-block";
		friend.style.display="none";
		fhall.style.display="none";
		meall.style.display="none";
	}
	tu2.onclick=function ()
	{
		contentall.style.display="none";
		findall.style.display="none";
		addall.style.display="inline-block";
		bootall.style.display="inline-block";
		headall.style.display="inline-block";
		friend.style.display="none";
		fhall.style.display="none";
		meall.style.display="none";
	}
	friendlink.onclick=function ()
	{
		contentall.style.display="none";
		findall.style.display="none";
		addall.style.display="none";
		bootall.style.display="none";
		headall.style.display="none";
		friend.style.display="inline-block";
		fhall.style.display="inline-block";
		meall.style.display="none";
	}
	re.onclick=function ()
	{
		contentall.style.display="none";
		findall.style.display="none";
		addall.style.display="inline-block";
		bootall.style.display="inline-block";
		headall.style.display="inline-block";
		friend.style.display="none";
		fhall.style.display="none";
		meall.style.display="none";
	}
	fan.onclick=function ()
	{
		contentall.style.display="inline-block";
		findall.style.display="none";
		addall.style.display="none";
		bootall.style.display="inline-block";
		headall.style.display="inline-block";
		friend.style.display="none";
		fhall.style.display="none";
		meall.style.display="none";
		LThead.style.display="none";
		LTboot.style.display="none";
		LTcon.style.display="none";
	}
	tu4.onclick=function ()
	{
		contentall.style.display="none";
		findall.style.display="none";
		addall.style.display="none";
		bootall.style.display="inline-block";
		headall.style.display="inline-block";
		friend.style.display="none";
		fhall.style.display="none";
		meall.style.display="inline-block";
	}
	
	
	/*互相说话部分*/
	var chatfont=document.getElementById("chatfont");
   	var texts=document.myform.info;
   	var but=document.myform.but;
   	but.onclick=texts.onkeydown=function (e){
      var ev=e||window.event;
      if(ev.type=="click" || (ev.type=="keydown" && ev.keyCode==13))
      {
       var divs=document.createElement("div");       
       divs.className="me flex";
       chatfont.appendChild(divs);
       
       
       var diver=document.createElement("div");
       diver.className="meleft";
       divs.appendChild(diver);
       
       
       
       var divsan=document.createElement("div");
         divsan.innerHTML=texts.value;
         texts.value="";
         divsan.className="meright";
       divs.appendChild(divsan);
       
       
       var divsi=document.createElement("div");
       divsi.className="sanright";
       divsan.appendChild(divsi);
      }
   	}
   /*说话部分结束*/
  
  
  
  var ss=document.getElementById("ss");
  var ssli=document.getElementById("ssli");
  ss.onclick=function ()
  {
  	ssli.style.display="inline-block";
  }
}


