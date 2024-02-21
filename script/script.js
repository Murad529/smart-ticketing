const allBtn= document.getElementsByClassName("add-btn");
let count = 8;

for (const btn of allBtn){
  btn.addEventListener("click", function (){
    count = count - 1;
    document.getElementById("set-count").innerText = count;
  });

 
}