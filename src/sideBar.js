export default function sideBar()
{
    const bar = document.createElement("div");
    bar.id = "sidebar";

    const buttonAdd = document.createElement("button");
    buttonAdd.textContent = "Add";
    buttonAdd.id = "addButton";



    
    bar.append(buttonAdd);
    return {bar,buttonAdd};
}


