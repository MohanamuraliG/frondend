 
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
const employees = [ 
    { id: 1, name: "John", age: 28, department: "HR" }, 
    { id: 2, name: "Jane", age: 34, department: "Finance" }, 
    { id: 3, name: "Mike", age: 25, department: "IT" }, 
    { id: 4, name: "Emma", age: 30, department: "Marketing" }, 
    { id: 5, name: "Chris", age: 40, department: "Operations" }, 
    { id: 6, name: "Sophia", age: 29, department: "HR" },
    { id: 7, name: "Daniel", age: 32, department: "Finance" }, 
    { id: 8, name: "Olivia", age: 27, department: "IT" }, 
    { id: 9, name: "Liam", age: 35, department: "Sales" }, 
    { id: 10, name: "Noah", age: 26, department: "Logistics" }, 
    ];
    let table=document.getElementById("table");
for(let i=0;i<employees.length;i++){
let tablerow=document.createElement("tr");
let tableid=document.createElement("td");
tableid.innerHTML=employees[i].id;
let tablename=document.createElement("td");
tablename.innerHTML=employees[i].name;
let tableage=document.createElement("td");
tableage.innerHTML=employees[i].age;
let tabledepartment=document.createElement("td");
tabledepartment.innerHTML=employees[i].department;
tablerow.appendChild(tableid);
tablerow.appendChild(tablename);
tablerow.appendChild(tableage);
tablerow.appendChild(tabledepartment);
table.appendChild(tablerow);
}    


const data = [ 
    { id: 1, name: "John", tasks: [ { taskId: 101, description: "Complete report", status: "Pending" }, { taskId: 102, description: "Review code", status: "Completed" }, ], }, 
    { id: 2, name: "Jane", tasks: [ { taskId: 103, description: "Prepare slides", status: "In Progress" }, { taskId: 104, description: "Team meeting", status: "Pending" }, ], }, ];
    

let table2=document.getElementById("table2");

for(let i=0;i<data.length;i++){
    
    
    for(let j=0;j<data[0].tasks.length;j++){
        let tablerow=document.createElement("tr");
        let tablename=document.createElement("td");
        tablename.innerHTML=data[i].name
        let tabledescription=document.createElement("td");
            tabledescription.innerHTML=data[i].tasks[j].description
        let tablestatus=document.createElement("td");
            tablestatus.innerHTML=data[i].tasks[j].status
            tablerow.appendChild(tablename);
            tablerow.appendChild(tabledescription);
            tablerow.appendChild(tablestatus);
            table2.appendChild(tablerow);
    }
    
    
    
}