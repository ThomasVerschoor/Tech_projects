
// load project to webpage
function loadProjectToWebPage(data)
{
  // get current project
  currentURL = window.location.href
  const splitURLArray = currentURL.split("?=");
  let componentID = splitURLArray[1]

  // load current project on webpage
  var container = document.getElementById("projectsList");

  componentList = data["components"]

  for (comp of componentList)
        {
          if (new String(comp["componentID"]).valueOf() == new String(componentID).valueOf())
          {

            //set the title of the project
            document.getElementById("componentTitle").innerHTML = comp["title"];

            // set thumbnail image to image on the webpage
            document.getElementById("thumbNailImage").src = comp["imageLink"];

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
