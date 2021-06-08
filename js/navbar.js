const body = document.querySelector("body");
const menu = document.querySelector(".main_menu");
const menuBtn = document.getElementById("menu-btn");
const cancelBtn = document.getElementById("cancel-btn");

console.log();
menuBtn.onclick = ()=> {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  body.classList.add("disabledScroll")
}

cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll")
}