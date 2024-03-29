
function fetchMDfile(link)
{
  return fetch(link)
}

// load markdown file to writeToWebPage
function loadMarkDownToWebPage(projectID)
{

  var projectContent = document.getElementById("projectContent");

  var URL = "https://raw.githubusercontent.com/ThomasVerschoor/TechProjectsCMS/master/Projects/"
  URL += projectID
  URL += ".md"

  const textMD = fetchMDfile(URL)
  textMD.then(response => response.text())
  .then(text => {

    converter = new showdown.Converter(),
    html = converter.makeHtml(text);

    projectContent.innerHTML = html;

  })
  .catch(error => {
    //handle error
  });

}

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

            //set the title of the project
            document.getElementById("projectTitle").innerHTML = elem["title"];

            // set thumbnail image to image on the webpage
            document.getElementById("thumbNailImage").src = elem["imageLink"];

            //load table containing info
            let tableBody = document.getElementById("tableBody");
            tableBody.innerHTML += '<tr><td>' + elem["title"] + '</td><td>' + elem["dateCreated"] + '</td><td>' +elem["author"]+'</td></tr>' ;

            loadMarkDownToWebPage(elem["projectID"])

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
