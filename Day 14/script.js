function calculate(){
    let a=document.getElementById("input1").value;
    let arr=a.split(" ");
    let z=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>z.length){
            z=arr[i];
        }
    }
    document.getElementById("output1").innerHTML=z;
}

function upper(){
    let a=document.getElementById("input2").value;
    let arr=a.split(" ");
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j] && arr[j]!="CHANGED"){
                arr[j]="CHANGED";
            }
        }
    }

    document.getElementById("output2").innerHTML=arr.toString().replaceAll( ","," ");
}

function evenchecking(){
    let a=document.getElementById("input3").value;
    let arr=a.split(" ");
    for(let i=0;i<arr.length;i++){
        
            if(i%2==0){
                arr[i]="EVEN";
            }
        
    }

    document.getElementById("output3").innerHTML=arr.toString().replaceAll( ","," ");
}

function replacechecking(){
    let a=document.getElementById("input4").value;
    let b="";
    for(let i=0;i<a.length;i++){
       if(!b.includes(a[i])){
        b+=a[i];
       }
        }
        
    
    

    document.getElementById("output4").innerHTML=b;
}