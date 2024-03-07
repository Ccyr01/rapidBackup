const mapLinks = document.querySelectorAll('.map-link');

const mapList = document.querySelectorAll('.map');

function hideAllMaps(){
    for(let i = 0; i < mapList.length; i++){
        mapList[i].style.display = "none";
    
    }
}

for(let i = 0; i < mapLinks.length; i++){
    mapLinks[i].addEventListener("click",(e)=>{
        console.log("click", e.target.getAttribute("data-map"))
        let target =  e.target.getAttribute("data-map");
        hideAllMaps();
        document.querySelector("#" + target).style.display = "block";

    })
}

