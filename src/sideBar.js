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


export function sideBarUpdate(projecto)
{
    const highPriority = document.createElement("div");
    highPriority.textContent = "High Priority";
    highPriority.id = "high-priority";
    highPriority.classList.add("priority","highPriority");

    const mediumPriority = document.createElement("div");
    mediumPriority.textContent = "Medium Priority";
    mediumPriority.id = "medium-priority";
    mediumPriority.classList.add("priority","mediumPriority");

    const lowPriority = document.createElement("div");
    lowPriority.textContent = "Low Priority";
    lowPriority.id = "low-priority";
    lowPriority.classList.add("priority","lowPriority");

    projecto.append(highPriority,mediumPriority,lowPriority);
}
