
// write projects to webpage
function writeToWebPage(data)
{
  var container = document.getElementById("projectsList");

  projects = data["projects"]

    // projects on webpage
    let project = document.getElementById("projectsOverview")

    let projectContent = '<div class="row">'

    for (elem of projects)
    {
      let hrefProject = "project.html?="+elem["projectID"]
      let hrefAuthor = "author.html?="+elem["author"]
      projectContent += '<div class="column"><img src="'+elem["imageLink"]+'" alt="Nature" style="width:100%">'
      projectContent +='<a href='+hrefProject+'>'+elem["title"]+'</a>'
      projectContent +='<br>'
      projectContent +='by <a href='+hrefAuthor+'>'+elem["author"]+'</a>'
      projectContent +='</div>'

    }

    projectContent +='</div>'


    project.innerHTML = projectContent

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
