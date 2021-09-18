var nav = document.getElementById("nav");
var liveChannels = document.getElementById("liveChannels");
var groups = document.querySelector(".groups");
var groupsContains = document.querySelectorAll(".groups  *");
var label = document.querySelectorAll("label");
var channelcilck = true;

liveChannels.addEventListener("click", () => {
    console.log(channelcilck);
    if (channelcilck == true) {
        if (groups.classList.contains("visibility")) {
            channelcilck = false;
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
                            channelcilck = true;
                        }, 1000);
                    })
                }, 2000);
            }, 2000);
        }
        else {
            channelcilck = false;
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
                    channelcilck = true;
                }, 1000);
            }, 2000);
        }
    }
})
