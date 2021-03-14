export default class Api_repository {

  // GET all method
  get_all_tasks() {

    fetch("http://localhost:8000/tasks/")
    .then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    }).catch(function(err) {
      console.error('Failed retrieving information', err);
    });
  }

  // POST method
  post_task(data) {

    fetch("http://localhost:8000/tasks/", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: data
    })
    .then(function(response) {
      console.log(data);
    }).catch(function (err) {
      console.log(err);
    });
  }
}
