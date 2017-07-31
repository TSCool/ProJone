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
	
	
	
	
	
	var tu3=document.getElementById("tu_3");
	var tu1=document.getElementById("tu_1");
	var tu2=document.getElementById("tu_2");
	var tu4=document.getElementById("tu_4");
	var fhall=document.getElementById("fhall");
	var re=document.getElementById("return");
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
}
