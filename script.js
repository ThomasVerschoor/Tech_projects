fetch("https://thomasverschoor.github.io/TechProjectsCMS/")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    writeToWebPage(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));


function writeToWebPage(data) {
  console.log("Start function")

  var container = document.getElementById("projectsList");

  projects = data["projects"]
  for (elem of projects)
        {
            // Print the current element
            console.log(elem["title"]);
            let tableBody = document.getElementById("tableBody");
            tableBody.innerHTML += '<tr><td>' + elem["title"] + '</td><td>' + elem["dateCreated"] + '</td></tr>';
        }

}
