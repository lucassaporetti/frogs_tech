import Api_repository from "./crud/api_repository.js";
import Task from "./model/task_model.js";
import Entity from "./model/entity.js";




const get_tasks = new Api_repository();

get_tasks.get_all_tasks();

let repository = new Api_repository();


let btn1 = document.querySelector("#btn1");


function taskConstructor() {


    let data = new Task();

    let status = document.querySelector('#status');
    let task = document.querySelector('#task');
    let date = document.querySelector('#date');
    let time = document.querySelector('#time');
    let task_type = document.querySelector('#task_type');
    let priority = document.querySelector('#priority');

    
    data.status = status.value
    data.task = task.value;
    data.date = date.value;
    data.time = time.value;
    data.task_type = task_type.value;
    data.priority = priority.value;
    

    repository.post(data);

    
}

btn1.addEventListener('click', taskConstructor)