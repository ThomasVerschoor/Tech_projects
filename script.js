
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


    // loading of component data
    components = data["components"]

    // components on webpage
    let component = document.getElementById("componentsOverview")

    let compContent = '<div class="row">'

    for (comp of components)
    {
      let hrefComponent ="component.html?="+comp["componentID"]
      compContent += '<div class="column"><img src="'+comp["imageLink"]+'" alt="Nature" style="width:100%">'
      compContent +='<a href='+hrefComponent+'>'+comp["title"]+'</a>'
      compContent +='</div>'

    }

    compContent +='</div>'


    component.innerHTML = compContent


    // loading of authors data
    authors = data["authors"]

    // components on webpage
    let author = document.getElementById("authorsOverview")

    let authContent = '<div class="row">'

    for (auth of authors)
    {
      let hrefAuthor ="author.html?="+auth["author"]
      authContent += '<div class="column"><img src="'+auth["imageLink"]+'" alt="Nature" style="width:100%">'
      authContent +='<a href='+hrefAuthor+'>'+auth["author"]+'</a>'
      authContent +='</div>'

    }

    authContent +='</div>'


    author.innerHTML = authContent


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
