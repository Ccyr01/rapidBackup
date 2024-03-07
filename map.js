const mapLinks = document.querySelectorAll(".map-link");

const mapList = document.querySelectorAll(".map");

function hideAllMaps() {
  for (let i = 0; i < mapList.length; i++) {
    mapList[i].style.display = "none";
  }
}

for (let i = 0; i < mapLinks.length; i++) {
  mapLinks[i].addEventListener("click", (e) => {
    console.log("click", e.target.getAttribute("data-map"));
    let target = e.target.getAttribute("data-map");
    hideAllMaps();
    document.querySelector("#" + target).style.display = "block";
  });
}

function loadPage() {
    // Get the parameter value from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var paramValue = urlParams.get('param1');

    // Call executeFunction with the extracted parameter
    executeFunction(paramValue);
}

function executeFunction(param) {
    // Click the button with the ID passed as a parameter
    var button = document.getElementById(param);
    if (button) {
        button.click();
    }
}
