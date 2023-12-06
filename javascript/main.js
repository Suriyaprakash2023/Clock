setInterval(runningclock,1000);

function runningclock(){
    let hr=document.getElementById("hr");
    let min=document.getElementById('min');
    let sec=document.getElementById('sec');

    let time=new Date();
    let second=time.getSeconds()/60;
    let minute=(second+time.getMinutes())/60;
    let hour=(minute+time.getHours())/12;
    
    
    hr.style.setProperty('--rotation',hour*360);
    min.style.setProperty('--rotation',minute*360);
    sec.style.setProperty('--rotation',second*360);

// Digital clock

    let dhour=document.getElementById("dhour");
    let dminute=document.getElementById("dminute");
    let dsecond=document.getElementById("dsecond");
    let ampm=document.getElementById("ampm");

    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    if (h>12){
        h=h-12
        ampm.innerHTML="PM"
    }

    dhour.innerHTML =addzero(h) + ":";
    dminute.innerHTML=addzero(m) +":";
    dsecond.innerHTML=addzero(s) +":";
    
    //Adding Zero

    function addzero(num){
        return num < 10? "0"+num :num 
    }
   
}
runningclock();