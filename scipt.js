const tabs = document.getElementsByClassName("tab")
const tabDets = document.getElementsByClassName("tab-info-details")

for(var i = 0; i < tabs.length; i++){
    const currentTab = tabs[i]
    currentTab.addEventListener("click", (e) => {
        const tabText = e.target.innerText;
        for(var j = 0; j < tabs.length; j++){
            tabs[j].classList.remove("active")
        }
        for(var b = 0; b < tabDets.length; b++){
            tabDets[b].classList.remove("show")
        }
        e.target.classList.add("active")
        const targetDiv = document.getElementById(tabText)
        targetDiv.classList.add("show")
    })
}