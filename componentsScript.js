
// write projects to webpage
function writeToWebPage(data)
{

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
