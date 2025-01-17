 
function  func1(){
    let a=document.getElementById("inputfield");
    let b=a.value;
    let sum=0;
    for(let i=0;i<b.length;i++){
        sum+=b.charCodeAt(i);
    }
   
    
    a.value=sum;
}
document.addEventListener("keydown",function(e) {
if(e.ctrlKey && e.keyCode=== 83){
    event.preventDefault();
    alert("cannot save")
}
console.log(e);

if (e.ctrlKey && e.shiftKey && e.keyCode=== 81) {
    window.close();
  }


});
