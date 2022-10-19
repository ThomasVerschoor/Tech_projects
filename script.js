
// write projects to webpage
function writeToWebPage(data) {

  var container = document.getElementById("projectsList");
  console.log(data)

  projects = data["projects"]
  for (elem of projects)
        {
            console.log(elem)
            let tableBody = document.getElementById("tableBody");
            tableBody.innerHTML += '<tr><td>' + elem["title"] + '</td><td>' + elem["dateCreated"] + '</td><td>' + elem["author"] + '</td></tr>';
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
