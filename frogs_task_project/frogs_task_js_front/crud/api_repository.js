const api_url = "";

export default class Api_repository {

/*   get_all_tasks() {
    fetch(api_url, {
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

  post_task(data) {

  fetch("http://localhost:8000/tasks/", {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: data
  })
  .then(function(response) {
    console.log(data);
  });
}
}

//   //Em breve função POST

//     fetch("http://localhost:8000/tasks/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: data,
//     })
//       .then(function (response) {
//         response.json().then(function (data) {
//           appendData(data);
//         });
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   }
// }
