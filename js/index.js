const showAttr = document.querySelector("[attr-show]");
const btnShow = document.querySelector(".show-control");
const arrowBtn = document.getElementById("arrow-button");
const navbar = document.getElementsByTagName("nav")[0];
btnShow.addEventListener("click", (e) => {
  if (showAttr.getAttribute("attr-show") == "visible") {
    showAttr.setAttribute("attr-show", "hidden");
    Object.assign(arrowBtn, { style: "transform: rotateY(180deg)" });
    Object.assign(navbar, { style: "width: calc(100% - 20px)" });
  } else if (showAttr.getAttribute("attr-show") == "hidden") {
    showAttr.setAttribute("attr-show", "visible");
    Object.assign(arrowBtn, { style: "transform: rotateY(0deg)" });
    Object.assign(navbar, { style: "width: calc(100% - 250px)" });
  }
});
