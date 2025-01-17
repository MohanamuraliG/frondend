// 1

console.log("task 1");
function objectsorting(){
    const arr = [
        { name: "John", age: 28 },
        { name: "Anna", age: 22 },
        { name: "Mike", age: 32 },
    ];
    let min=arr[0].age;
   for(let i=0;i<arr.length;i++){
            for(j=i+1;j<arr.length;j++){
                if(arr[i].age>arr[j].age){
                    t=arr[i];
                    arr[i]=arr[j];
                    arr[j]=t;
                }
            }
   }
   console.log(arr);


}
objectsorting();

// 2
console.log("task 2");
function groupingnumber(){
    let arr=[1,2,3,4,5,6,7,8,9];
    let odd=arr.filter(num =>num%2!=0)
    let even=arr.filter(num =>num%2==0)
    console.log("odd : "+odd+" even : " +even);
    console.log(even)
    
}

groupingnumber();

// 3
console.log("task 3");
function removeduplicate(){
    const arr = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 1, name: 'C' },
      ];

      const arr1 = [];
     
    for(i=0;i<arr.length;i++){
       
        for(j=i+1;j<arr.length;j++){
            if(arr[i].id==arr[j].id){
                arr[j]="";
            }
        }
        
    }
    for(i=0;i<arr.length;i++){
    if(arr[i]!=""){
        console.log(arr[i]);
    }
}
   
}
removeduplicate();

// 4
console.log("task 4");
function frequencyelement(){
    const arr = [1, 2, 2, 3, 3, 3];
    arr.sort();
    let frequency = {};
    let max = 0;
    let s;
    for(i=0;i<arr.length;i++){
        c=0;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                
                c+=1;
            }
            else{
                break;
            }
        }
        if(c>max){
            max=c;
            s=arr[i];
        }

    }
console.log(s);
}

frequencyelement();
// 5
console.log("task 5");
function commonelement(){
    const arr = [1, 2, 3]; 
    const arr2 = [2, 3, 4];
    let s="";
    for(i=0;i<arr.length;i++){
        if(arr2.includes(arr[i])){
            s+=arr[i]+" ";
        }
    }
    console.log(s);
}
commonelement()


// 6
console.log("task 6");
function keyobj(){
    const arr = [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
      ];
      
    const arrayToObject = (arr) => {
        let s = {};
        arr.map((e) => {
            s[Number(e.id)] = e.name;
        })
        return s;
    }
    console.log(arrayToObject(arr));
}
keyobj();




// 7
console.log("task 7");
function uniqueelements(){
    const arr = [1, 2, 2, 3, 4, 4, 5];
    let arr1=[];
    for(let i=0;i<arr.length;i++){
        let c=0;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                c++;
            }
        }
        if(c==0){
            arr1.push(arr[i]);
        }
    }
    console.log(arr1);
}

uniqueelements();

// 8
console.log("task 8");
function resuceobj() {
    const arr = { a: 1, b: 2 };
    const s = Object.entries(arr);
    console.log(s); 
    
}

resuceobj();

// 9
console.log("task 9");
function filterkey() {
    const arr = { a: 1, b: 2, c: 3 };

    const filterKeys = (arr) => {
        let r = {};
        Object.keys(arr).filter((e) => {
            if (arr[e] < 3) {
                r[e] = arr[e];
            }
        });
        return r;
    }

    console.log(filterKeys(arr)); 
}

filterkey();



// 10
console.log("task 10");
function noduplicate() {
    let arr = [1, 2, 3, 5];
    let b = [4, 7];
    let c = 6;
    let arr1 = [];

    arr.forEach(z => {
        if (!arr1.includes(z)) {
            arr1.push(z);
        }
    });

    b.forEach(z => {
        if (!arr1.includes(z)) {
            arr1.push(z);
        }
    });
    
    if (!arr1.includes(c)) {
        arr1.push(c);
    }

    console.log(arr1); 
}

noduplicate();

let arr=[1,2,3,4,5,6,1,2,3,4];
let b=arr.filter((value , index , array)=>array.indexOf(value)==array.lastIndexOf(value));
console.log(b);

