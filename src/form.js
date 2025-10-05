import {changeDivName, createBlock} from "./index.js";
import { deleteDiv } from "./index.js";

export default function form(data,titleButton) 
{
  const forma = document.createElement("form");

  forma.id = "formaID";


  function createLabelnInput(name, id, inputType) 
  {
    if (inputType === "select")
    {
      const labelFor = document.createElement("label");
      labelFor.htmlFor = id;
      labelFor.textContent = name;

      const select = document.createElement("select");
      select.id = id;
      select.name = name;
      select.required = true;
      ["High", "Medium", "Low"].forEach(optionText =>{
        const option = document.createElement("option");
        option.value = optionText;
        option.id = optionText;
        option.textContent = optionText;
        select.appendChild(option);
      });

      forma.appendChild(labelFor);
      forma.appendChild(select);
    }
    else
    {
      const labelFor = document.createElement("label");
      labelFor.htmlFor = id;
      labelFor.textContent = name;

      const option = document.createElement("input");
      option.type = inputType;
      option.id = id;
      option.name = name;
      forma.appendChild(labelFor);
      forma.appendChild(option);
    }
  }

  createLabelnInput("Title", "title", "text");
  createLabelnInput("Description", "description", "text");
  createLabelnInput("DueDate", "dueDate", "date");
  // createLabelnInput("Priority", "priority", "text");
  createLabelnInput("Priority", "priority", "select");

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  forma.appendChild(submitButton);

  forma.addEventListener("submit", (e) => 
  {
    e.preventDefault();
    const formData = 
    {
      id: data && data.id ? data.id : crypto.randomUUID(),
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      dueDate: document.getElementById("dueDate").value,
      priority: document.getElementById("priority").value,
    };

    if (!localStorage.getItem(formData.id)) 
    {
      for(let i = 0; i < localStorage.length; i++)
      { 
        let key = localStorage.key(i);
        let item;
        
        try
        {
          item =JSON.parse(localStorage.getItem(key));
        }
        
        catch(e)
        {
          continue;
        }
          if((item.title === formData.title) && key!=formData.id)
          {          
            alert("That file already exists");
            forma.remove();
            forma.reset();
            return;
          }
      }
      localStorage.setItem(formData.id, JSON.stringify(formData));

      createBlock(formData);
      forma.remove();
      forma.reset();
    }
  
    else if(localStorage.getItem(formData.id))
    {
      localStorage.setItem(formData.id, JSON.stringify(formData));
      if(titleButton.textContent != formData.title)
        titleButton.textContent = formData.title;

      forma.remove();
      forma.reset();
    }
    
    else 
    { 
      alert("Task with this title already exists");
    }
  });

  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Delete";
  forma.append(buttonDelete);

  buttonDelete.addEventListener("click",e =>{
    e.preventDefault();
    if(!titleButton)
      alert("You haven't created a task yet")
    else
    {
      deleteDiv(titleButton);
      forma.remove();
      forma.reset();
    }
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  forma.appendChild(cancelButton);

  cancelButton.addEventListener("click", (e) =>  
  {
    e.preventDefault();
    // const formita = document.getElementById("formaID");  // this is possible because inside index.js when clicking the addbutton we open form and attached it to the right side. so we can simply have the reference of form inside right or form itself and remove it.

    forma.remove();
    forma.reset();
  });

  if(data)
  {
    forma.querySelector("#title").value = data.title;
    forma.querySelector("#description").value = data.description;
    forma.querySelector("#dueDate").value = data.dueDate;
    forma.querySelector("#priority").value = data.priority;
  }


  return forma;
}


