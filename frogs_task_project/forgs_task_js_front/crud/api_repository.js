export default class Api_repository {

  get_all_tasks() {

  fetch('http://localhost:8000/tasks', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify()
  }).then(function(response) {

      response.json().then(function(data) {

        appendData(data);
        
      });

    }).catch(function(err) {

    console.log(err);
    });
  }
}



var mainContainer = document.getElementById("myData");

function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {

    
    var div = document.createElement("div");

    div.innerHTML = ` { ' uuid: ${data[i].uuid}  status: ${data[i].status} name: ${data[i].name}
    date: ${data[i].date} time: ${data[i].time} task_type: ${data[i].task_type}
    priority: ${data[i].priority}} `

    mainContainer.appendChild(div);
  }
}


