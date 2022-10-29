
// write projects to webpage
function writeToWebPage(data)
{

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
