// import toDo from "./toDo.js"]
import "./styles.css";
import sideBar from "./sideBar.js"
import rightSide from "./rightSide.js";
import form from "./form.js";

const wholeContainer = document.getElementById("content");

const forma = form();
const {bar, buttonAdd} = sideBar();
const right = rightSide();

wholeContainer.append(bar,right);


const projecto = document.createElement("div");
projecto.id = "project";
bar.append(projecto);

buttonAdd.addEventListener("click",(e)=>{
    right.append(forma);
});


export function createBlock(formData)
{
    const titleButton = document.createElement("button");
    titleButton.textContent = formData.title;

    titleButton.addEventListener("click",(e) =>{
    // JSON.parse(localStorage.getItem(formData.title)); 
    const objectData = JSON.parse(localStorage.getItem(formData.title));
    const formEdit = form(objectData);
    const right = document.getElementById("right-side");
    right.innerHTML = "";
    right.append(formEdit);

    
    // right.append(newblock);
    });
}






