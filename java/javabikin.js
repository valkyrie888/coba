
function oyeng()
{
	if (document.getElementById("box1").style.display == "block")
	{
	document.getElementById("box1").style.display="none";
	}
	else {document.getElementById("box1").style.display="block"; }
	
}
function oyeng1()
{
	
	document.getElementById("box1").style.display="none" ;
	
	document.getElementById("box3").style.display="none" ;
}
function oyeng2()
{
	
	if (document.getElementById("box2").style.display == "block")
	{
	document.getElementById("box2").style.display="none";
	}
	else {document.getElementById("box2").style.display="block"; }
}

function oyeng3()
{
	document.getElementById("box2").style.display="none" ;
	
	document.getElementById("box3").style.display="none" ;
	
}

function oyeng4()
{
	document.getElementById("box1").style.display="none" ;
	document.getElementById("box2").style.display="none" ;
	document.getElementById("box3").style.display="block";
	document.getElementById("box3").scrollIntoView() ;
	
}


function oyeng5()
{	
	document.getElementById("blank").scrollIntoView() ;
}
