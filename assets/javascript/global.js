/* 
--------------------------------
    # Copyright © - 2° ano de T.I;
    # Type: .js;
--------------------------------
*/
document.querySelectorAll(".navbar-item a").forEach(e=>{e.addEventListener("click",function(){document.querySelector(".navbar-menu").querySelector(".active").classList.remove("active"),e.classList.add("active")})}),document.querySelector("#mobile-menu").addEventListener("click",()=>{document.querySelector("#mobile-menu").classList.toggle("is-active"),document.querySelector(".navbar-menu").classList.toggle("active")}),getInsertDate=function(e){return document.querySelector(e).innerText=(new Date).getFullYear()},getInsertDate("#date");