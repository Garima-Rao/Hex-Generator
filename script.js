let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
// let p=document.getElementsByTagName("p");
let rgb1="#fff";
let rgb2="#444";
const fun=()=>{
    let hex="0123456789ABCDEF";
    let value="#";
    for(let i=0;i<6;i++){
     value=value+hex[Math.floor(Math.random()*16)];
    }
     return value;
};
const changecolor1=()=>{
    let para=document.getElementById("para");
    rgb1=fun();
    btn1.innerText=rgb1;
    console.log(rgb1);
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},#444)`;
    para.innerText=`background-image:linear-gradient(to right,${rgb1},${rgb2})`;
    console.log(p.innerText);
};
const changecolor2=()=>{
    rgb2=fun();
    btn2.innerText=rgb2;
    console.log(rgb2);
    document.body.style.backgroundImage=`linear-gradient(to right,#000,${rgb2})`;
    para.innerText=`background-image:linear-gradient(to right,${rgb1},${rgb2})`;
    console.log(p.innerText);
};

btn1.addEventListener("click",changecolor1);
btn2.addEventListener("click",changecolor2);
para.addEventListener("click",()=>{
  navigator.clipboard.writeText(para.innerText);
  alert("Your code is copied");
});


