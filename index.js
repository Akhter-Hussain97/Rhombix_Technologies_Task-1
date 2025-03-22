const btn=document.getElementById("btn3");
btn3.addEventListener("click", Github=()=>{
    window.location.href="https://github.com/Akhter-Hussain97";
});
document.getElementById("btn2").addEventListener('click',CVdownload=()=>{
    const link=document.createElement("a");
    link.href="./cv.pdf";
    link.download="AHS.CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
 const textArray=[
    'For more information contact me',
    'Whatapps No:+923465095504',
    'Gmail: akhtershirani64@gmail.com'
 ];
 let index=0;
   setInterval(()=>{
     index=(index+1)%textArray.length;
         document.getElementById("info").innerText=textArray[index];
   },2000)