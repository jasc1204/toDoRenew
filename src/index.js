// import toDo from "./toDo.js"]
import "./styles.css";
import sideBar, { sideBarUpdate } from "./sideBar.js"
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

sideBarUpdate(projecto);

buttonAdd.addEventListener("click",(e)=>{
    right.innerHTML="";
    right.append(forma);
});

//   localStorage.clear();
export function createBlock(formData)
{
    const titleButton = document.createElement("button");
    titleButton.classList.add("titleButton");  
    titleButton.id = formData.id;
    titleButton.textContent = formData.title;
    if(formData.priority === "High")
    {
        const high = document.getElementById("high-priority");
        high.append(titleButton);
    }

    else if (formData.priority === "Medium")
    {
        const medium= document.getElementById("medium-priority");
        medium.append(titleButton);
    }
    
    else if (formData.priority === "Low")
    {
        const low= document.getElementById("low-priority");
        low.append(titleButton);
    }


    titleButton.addEventListener("click",(e) =>{
    const objectData = JSON.parse(localStorage.getItem(formData.id));
    const formEdit = form(objectData,titleButton);

    right.innerHTML = "";
    right.append(formEdit);
    });
}

updatePage();
function updatePage()
{
    for(let i = 0; i < localStorage.length; i++)
    {
        let key = localStorage.key(i);
        let value;
        try{
            value = JSON.parse(localStorage.getItem(key))
        } catch(e){
            continue;
        }

        createBlock(value);
    }
}

export function deleteDiv(titlebutton)
{
        titlebutton.remove();
        localStorage.removeItem("formaID");

}






