const para=document.querySelector(".para");
const btncont=document.querySelector(".btncont");


let sec=0;
let min=0;
let hour=0;
let timer;

function fun(event){
  const btn=event.target.name;
  if(btn==="start"){
   timer= setInterval(()=>{
      sec++;
      if(sec>58){
        sec=0;
        min++;
      }
      if(min>58){
        min=0;
        hour++;
      }
     para.innerText=`${hour<10? "0"+hour : hour } : ${min<10? "0"+min : min } : ${sec<10? "0"+sec : sec }` 
    },100)
  }
  
  if(btn==="stop"){
    clearInterval(timer);
  }
  if(btn==="reset"){
    clearInterval(timer);
    hour=0;
    min=0;
    sec=0;
    para.innerText=`${"0"+0} : ${"0"+0} : ${"0"+0}` 
  }
}

btncont.addEventListener("click",fun);



