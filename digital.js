function clock()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var day=date.getDay()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="Pm"
        if(hh>12)
        {
            hh=hh-12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(mo==0)
    {
        mo=="Jan"
    }
    else if(mo==1)
    {
        mo="feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="jun"
    }
    else if(mo==6)
    {
        mo="july"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="sep"
    }
    else if(mo==9)
    {
        mo="oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else
    {
        mo="Dec"
    }
    console.log(mo)
    console.log(mo)

    switch(day)
    {
            case 0:day="sunday"
            document.body.style.backgroundImage="url(./sun.png)"
            break;
            case 1:day="Monday"
            document.body.style.backgroundImage="url(./Mon.png)"
            break;
            case 2:day="Tuesday"
            document.body.style.backgroundImage="url(./Tues.jpg)"
            break;
            case 3:day="Wednesday"
            document.body.style.backgroundImage="url(./wed.jpg)"
            break;
            case 4:day="Thursday"
            document.body.style.backgroundImage="url(./thurs.jpg)"
            break;
            case 5:day="Friday"
          
            document.body.style.backgroundImage="url(./Fri.jpg)"
            break;
            case 6:day="Saturday"
            document.body.style.backgroundImage="url(./sat.jpg)"
            break;

    }
    console.log(day)
    document.getElementById("time").innerHTML=`${hh}:${mm}`
    document.getElementById("date").innerHTML=`${dd}/${mo}/${yy}`
    document.getElementById("day").innerHTML=day
    document.getElementById("sec").innerHTML=ss 
    setTimeout(clock,1000)  
}
clock();

var audio=new Audio()
audio.src="./alarmSound.mp3";
function alarmFunction()
{
   var date=new Date()
   var hh=date.getHours()
    var mm=date.getMinutes()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="Pm"
        if(hh>12)
        {
            hh=hh-12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var userGivenhh=document.getElementById("userHours").value
    var userGivenmm=document.getElementById("userMin").value
    var userGivenam_pm=document.getElementById("userAM_Pm").value
    console.log(hh,mm,am_pm)
    console.log(userGivenhh,userGivenmm,userGivenam_pm)
    if(hh==userGivenhh && mm==userGivenmm && am_pm==userGivenam_pm)
    {
        audio.play()
        audio.loop=Infinity
    }
    else{
        audio.pause
    }
    setTimeout(alarmFunction,1000)
}
function closeWindow()
{
    document.getElementById("alarmContainer").style.display="none"
}
function openWindow()
{
    document.getElementById("alarmContainer").style.display="flex"
}
