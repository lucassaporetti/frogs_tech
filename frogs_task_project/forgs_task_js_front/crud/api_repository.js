export default class Api_repository {
  get_all_tasks() {
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
  }

  //Em breve função POST
  post(data) {
    console.log(data);
  }
}




