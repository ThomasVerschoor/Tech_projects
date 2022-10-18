
// write projects to webpage
function writeToWebPage(data) {

  var container = document.getElementById("projectsList");

  projects = data["projects"]
  for (elem of projects)
        {
            let tableBody = document.getElementById("tableBody");
            tableBody.innerHTML += '<tr><td>' + elem["title"] + '</td><td>' + elem["dateCreated"] + '</td></tr>';
        }

}

//fetches all data
fetch("https://thomasverschoor.github.io/TechProjectsCMS/")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    writeToWebPage(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
