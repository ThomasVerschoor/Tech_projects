
// load author to webpage
function loadAuthorToWebPage(data)
{
  // get current author
  currentURL = window.location.href
  const splitURLArray = currentURL.split("?=");
  let username = splitURLArray[1]

  // load current user on webpage
  var container = document.getElementById("projectsList");

  authorList = data["authors"]
  for (elem of authorList)
        {
          if (new String(elem["author"]).valueOf() == new String(username).valueOf())
          {
            let tableBody = document.getElementById("tableBody");
            tableBody.innerHTML += '<tr><td>' + elem["author"] + '</td><td>' + elem["imageLink"] + '</td><td>' +elem["shortBio"]+'</td></tr>' ;
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
    loadAuthorToWebPage(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
