// 1

function oddevenchecking(){
    let a=document.getElementById("oddeveninputelement").value;
if(a%2==0){
    document.getElementById("oddevenanswer").innerText="EVEN";
}
else{
    document.getElementById("oddevenanswer").innerText="ODD";
}
}

// 2

function printnumberchecking(){
    let output2=document.getElementById("printnumberanswer");
    for(let i=1;i<=10;i++){
        let para=document.createElement("p");
        para.innerHTML=i;
        output2.appendChild(para);
    }
}

// 3

function printmultipleschecking(){
    let output=document.getElementById("multipleanswer");
    let a=document.getElementById("multipleinput").value;
    for(let i=1;i<=30;i++){
        if(i%a==0){
            let para=document.createElement("p");
            para.innerHTML=i;
            output.appendChild(para);
        }
    }

}

// 4

function findprimechecking(){
    let input=document.getElementById("primeinput").value;
    let output=document.getElementById("primeanswer");
    let c=0;
    for(let i=2;i<input;i++){
        if(input%i==0){
            c++;
        }
    }
    if(c==0){
        
        output.innerHTML="prime";
       
    }
    else{
       
        output.innerHTML="not prime";
       
    }
}

// 5

function sumofnumberchecking(){
    let output=document.getElementById("sumofnumberanswer");
    let a=0;
    for(let i=1;i<=100;i++){
        a+=i;
    }
    output.innerHTML=a;
}


// 6

let arr=[];
function arrayelementinput(){
    let input=document.getElementById("arrayinput");
    let a= input.value;
   arr.push(a);
   console.log(arr);
   input.value="";
}



function largestelementcalculate(){
    let a=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>a){
            a=arr[i];
        }
    }
    document.getElementById("largestelementanswer").innerHTML=a;
} 

// 7

function vowelfindchecking(){
    let a=document.getElementById("vowelsinput").value;
    let b="";
    let z=0;
    for(let i=0;i<a.length;i++){
        if(a.charAt(i)=='a'||a.charAt(i)=='e'||a.charAt(i)=='i'||a.charAt(i)=='o'||a.charAt(i)=='u'){
            b+=a.charAt(i)+", ";
            z++;
        }
    }
    document.getElementById("vowelanswer").innerHTML=b+" count : "+z;
}


// 8

function starprintchecking(){
    let a=document.getElementById("starinput").value;
    let output=document.getElementById("staranswer");
    let s="";
    for(let i=1;i<=a;i++){
        let para=document.createElement("p");
        s+="* ";
        para.innerHTML=s;
        output.appendChild(para);
    }
}

// 9

function fizzbuzzchecking(){
    for(let i=1;i<=50;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }
        else if(i%3==0){
            console.log("Fizz")
        }
        else if(i%5==0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}


// 10

function reverseprintchecking(){
    let a=document.getElementById("reverseinput").value;
    let s="";
    for(let i=a.length;i>=0;i--){
        s+=a.charAt(i);
    }
    document.getElementById("reverseanswer").innerHTML=s;
}