let items = [];

window.addEventListener('load', () => {
    const form = document.querySelector("#form-task");
    const input = document.querySelector("#input-task");
    const list_el = document.querySelector("#tasks");

   
    function displayTasks() {
        list_el.innerHTML = ""; 
        items = JSON.parse(localStorage.getItem("TASK")) || [];
        
        items.forEach((task) => {
            const task_el = document.createElement("div");
            task_el.classList.add("task");

            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");

            const task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.setAttribute("readonly", "readonly");

            task_content_el.appendChild(task_input_el);
            task_el.appendChild(task_content_el);

            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");

            const task_edit_el = document.createElement("button");
            task_edit_el.classList.add("edit");
            task_edit_el.innerText = "Edit";

            const task_delete_el = document.createElement("button");
            task_delete_el.classList.add("delete");
            task_delete_el.innerText = "Delete";

            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);
            task_el.appendChild(task_actions_el);

            list_el.appendChild(task_el);

            
            task_edit_el.addEventListener('click', () => {
                if (task_edit_el.innerText.toLowerCase() === "edit") {
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                    task_edit_el.innerText = "Save";
                } else {
                    task_input_el.setAttribute("readonly", "readonly");
                    task_edit_el.innerText = "Edit";
                    const index = items.indexOf(task);
                    if (index !== -1) {
                        items[index] = task_input_el.value;
                        localStorage.setItem("TASK", JSON.stringify(items));
                    }
                }
            });

            
            task_delete_el.addEventListener('click', () => {
                list_el.removeChild(task_el);
                items = items.filter(t => t !== task);
                localStorage.setItem("TASK", JSON.stringify(items));
            });
        });
    }

    
    displayTasks();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task) {
            alert("Please fill out the task");
            return;
        }

        
        items.push(task);
        localStorage.setItem("TASK", JSON.stringify(items));
        displayTasks();

        input.value = "";
    });
});
