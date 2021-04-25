//function for delete a task from anywhere in the table

function deleteTask(el) {
    if (el.classList.contains('delete')) {
        //we are dealing with a <a href> parent of which is a <td>, and we want to get rid of of the whole row
        //so another parent element to get to the <tr> and then remove() it 
        el.parentElement.parentElement.remove();
    }
}

//function for task completed

function taskCompleted(el) {
    const doneList = document.getElementById('taskDone');
    let row = document.createElement('tr')
    row = el.parentElement.parentElement;
    row.children[1].innerHTML = `<td> <a href="#" class="btn btn-danger btn-sm delete">Remove?</a></td>`;
    doneList.appendChild(row);
}

//function for showing alert upon any action

function showAlert(message, className) {
    //creating a div
    const div = document.createElement('div');
    //adding the Bootstrap classes for styling 
    div.className = `alert alert-${className}`;
    //text inside that div
    div.appendChild(document.createTextNode(message));
    //selecting the main container 
    const container = document.querySelector('.container');
    //selecting the rows of table
    const table = document.querySelector('.row');

    //inserting the alert div before it
    container.insertBefore(div, table);

    // remove in 2 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
}

//on clicking the add button

document.getElementById('add').addEventListener('submit', (e) => {
    //prevent a submit which reloads
    e.preventDefault();

    //get the task
    const task = document.getElementById('task').value;
    if (task != "") {
        //grabbing where the task needs to be in the list
        const list = document.getElementById('taskLeftToDo');

        //creating a new table row and inside it the necessary html
        const row = document.createElement('tr');
        //use of ' instead of "" bc of using variable inside html code
        row.innerHTML = `
        <td> ${task} </td>
        <td> <a href="#" class="btn btn-info btn-sm delete">Done!</a></td>
        `
        //finally appending it to the part earlier grabbed 
        list.appendChild(row)

        //finally blanking the box
        document.getElementById('task').value = '';

        //pop-up alert 
        showAlert("Successfully added the task!", 'success');
    }
    else{
        //pop-up alert
        showAlert("Please enter a task before adding!", 'warning');
    }

});



//on clicking "DONE"

document.getElementById('taskLeftToDo').addEventListener('click', (e) => {
    //so only work when you click on DONE
    if (e.target.classList.contains('delete')) {
        taskCompleted(e.target);
        showAlert("Congratulations on getting the task done!", 'primary');
    }
});

//on clicking "REMOVE"
document.getElementById('taskDone').addEventListener('click', (e) => {
    //so only work when you click on REMOVE
    deleteTask(e.target);
    showAlert("Removed from completed tasks.", 'danger');
});