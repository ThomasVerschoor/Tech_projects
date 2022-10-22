
// load project to webpage
function loadProjectToWebPage(data)
{
  // get current project
  currentURL = window.location.href
  const splitURLArray = currentURL.split("?=");
  let projectID = splitURLArray[1]

  // load current project on webpage
  var container = document.getElementById("projectsList");

  projectList = data["projects"]

  for (elem of projectList)
        {
          if (new String(elem["projectID"]).valueOf() == new String(projectID).valueOf())
          {
            let tableBody = document.getElementById("tableBody");
            tableBody.innerHTML += '<tr><td>' + elem["title"] + '</td><td>' + elem["dateCreated"] + '</td><td>' +elem["author"]+'</td></tr>' ;

            // set thumbnail image to image on the webpage
            document.getElementById("thumbNailImage").src = elem["imageLink"];


          }
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
    loadProjectToWebPage(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
