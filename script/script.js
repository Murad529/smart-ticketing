const allBtn= document.getElementsByClassName("add-btn");
let count = 8;
let counts = 0;
for (const btn of allBtn){
  btn.addEventListener("click", function (e){
    count = count - 1;
    setInnerText("set-count",count);
  });
btn.addEventListener("click", function (){
   counts = counts + 1;
   setInnerText("set-counts", counts);
  
});
}

function setInnerText(id,value){
  document.getElementById(id).innerText = value;
}
