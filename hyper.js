document.querySelector("#icon").onclick=function password(a){
    let textvalue=document.querySelector("#but");
    textvalue.type="text";
    document.querySelector("#slash").style.visibility="visible";
    this.style.visibility="hidden";
   }
   document.querySelector("#slash").onclick=function show(b){
    let textvalue=document.querySelector("#but");
    textvalue.type="password";
    this.style.visibility="hidden";
    document.querySelector("#icon").style.visibility="visible";
   }
   //document.querySelector("#icon").onclick=function password(a){
    //let textvalue=document.querySelector("#but");
    //let dochanger=document.querySelector("#changer").innerHTML;
    //if(dochanger==="fa-solid fa-eye"){
    //textvalue.type="text";
    //this.innerHTML="fa-solid fa-eye-slash";
//}
//else if(dochanger==="fa-solid fa-eye-slash"){
    //textvalue.type="password";
    //this.innerHTML="fa-solid fa-eye";
//}
//}