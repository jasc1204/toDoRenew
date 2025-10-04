// import index.js;

export default function form(data) {
  const forma = document.createElement("form");

  forma.id = "formaID";

  if(data)
  {
    document.getElementById("title").value = data.title;
    document.getElementById("description").value = data.description;
    document.getElementById("dueDate").value = data.dueDate;
    document.getElementById("priority").value = data.priority;
  }
  
  function createLabelnInput(name, id, inputType) 
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
    // input is now after label, not inside
  }

  createLabelnInput("title", "title", "text");
  createLabelnInput("description", "description", "text");
  createLabelnInput("dueDate", "dueDate", "date");
  createLabelnInput("priority", "priority", "text");

  const submitButton = document.createElement("button");
  submitButton.textContent = "submit";
  forma.appendChild(submitButton);

  forma.addEventListener("submit", (e) => 
  {
    e.preventDefault();
    const formData = 
    {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      dueDate: document.getElementById("dueDate").value,
      priority: document.getElementById("priority").value,
    };

    if (!localStorage.getItem(formData.title)) {
      localStorage.setItem(formData.title, JSON.stringify(formData));
      createBlock(formData);
      forma.remove();
    } else {
      alert("Task with this title already exists");
    }
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "cancel";
  forma.appendChild(cancelButton);

  cancelButton.addEventListener("click", (e) =>  
  {
    e.preventDefault();
    const formita = document.getElementById("formaID");  // this is possible because inside index.js when clicking the addbutton we open form and attached it to the right side. so we can simply have the reference of form inside right or form itself and remove it.

    formita.remove();
  });

  return forma;
}


