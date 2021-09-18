var nav = document.getElementById("nav");
var liveChannels = document.getElementById("liveChannels");
var groups = document.querySelector(".groups");
var groupsContains = document.querySelectorAll(".groups  *");
var label = document.querySelectorAll("label");

liveChannels.addEventListener("click", () => {   
    if (groups.classList.contains("visibility")) {
        liveChannels.classList.remove("hover");
        // Hide Text
        groupsContains.forEach((ele) => {            
            ele.style.opacity ="0";
        })
        setTimeout(() => {
            // Close Groups
            groups.classList.remove("visibility");
            // open nav
            setTimeout(() => {            
                nav.style.width = "200px";
                label.forEach((ele) => {  
                    setTimeout(() => {
                        ele.style.display = "block";
                    }, 1000);
                })
            }, 2000);
        }, 1000);
    }
    else {
        liveChannels.classList.add("hover");
        label.forEach((ele) => {            
            ele.style.display = "none";
        })
        nav.style.width = "50px";
        setTimeout(() => {
            groups.classList.add("visibility");
            setTimeout(() => {
                groupsContains.forEach((ele) => {
                    ele.style.opacity = "1";
                });
            }, 1000);
        }, 2000);
    }
})
groupsContains.forEach((ele)=> {
    ele.addEventListener("click", () => console.log(true));
})