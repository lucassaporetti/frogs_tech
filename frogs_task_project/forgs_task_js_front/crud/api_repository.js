export default class Api_repository {
/*   get_all_tasks() {
    fetch("http://localhost:8000/tasks", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    })
      .then(function (response) {
        response.json().then(function (data) {
          appendData(data);
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  } */

  //Em breve função POST
  post_task(data) {
    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    })
      .then(function (response) {
        response.json().then(function (data) {
          appendData(data);
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}
