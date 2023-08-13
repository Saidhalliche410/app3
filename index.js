function Said (){
    var date =new Date();
    var time=document.getElementById("settime");
    time.innerHTML=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var date2=document.getElementById("setdata");
    date2.innerHTML=date.getDate()+"-"+ parseInt (date.getMonth()+1)+"-"+date.getFullYear();
}
setInterval(()=>{
    Said();
},500);

var color=document.getElementById("setcolor");
color.addEventListener("change",()=>{
    document.body.style.background=color.value;
    localStorage.setItem("couleur",color.value);
});
if(color.value!=null){
    document.body.style.background=localStorage.getItem("couleur");
}


var musique1 =document.getElementById("musique");
var play=document.getElementById("paly1");
var stop=document.getElementById("stop1");
var haj=document.getElementById("haj");
var fats=document.getElementById("fast");
var slow=document.getElementById("slow");
var zid=document.getElementById("zyad");
var na9s=document.getElementById("na9s");
play1.addEventListener("click",()=>{
    musique1.play();
});
stop1.addEventListener("click",()=>{
    musique1.pause();
});
haj.addEventListener("click",()=>{
    musique1.load();
})
fast.addEventListener("click",()=>{
    musique1.playbackRate+=0.1
})
slow.addEventListener("click",()=>{
    musique1.playbackRate-=0.1
})
zid.addEventListener("click",()=>{
    musique1.volume+=0.1
})
na9s.addEventListener("click",()=>{
    musique1.volume-=0.1;
})
