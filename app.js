//on clicking the add button

document.getElementById('add').addEventListener('submit', (e)=>{
    //prevent a submit which reloads
    e.preventDefault();

    //get the task
    const task= document.getElementById('task').value;

    //grabbing where the task needs to be in the list
    const list= document.getElementById('taskLeftToDo');

    //creating a new table row and inside it the necessary html
    const row=document.createElement('tr');
    row.innerHTML=`
    <td> ${task} </td>
    <td> <a href="#" class="btn btn-danger btn-sm delete">Done</a></td>
    `
    //finally appending it to the part earlier grabbed 
    list.appendChild(row)

    //finally blanking the box
    document.getElementById('task').value='';
});