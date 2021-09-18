var nav = document.getElementById("nav");
var liveChannels = document.getElementById("liveChannels");
var groups = document.querySelector(".groups");
var groupsContains = document.querySelectorAll(".groups  *");
var espana = document.getElementById("subGroup");
var subGroups = document.querySelector(".sub-groups");
var subGroupsContains = document.querySelectorAll(".sub-groups *");
var label = document.querySelectorAll("#nav label");
var star = document.querySelectorAll('.container  .sub-groups ul i');
var channelcilck = true;

showSlider(liveChannels, groups, groupsContains, "visibility", true);
showSlider(espana, subGroups, subGroupsContains, "visibility2", false);


function showSlider(toClick , slider , sliderContains ,classToAdd , minimizeNav) {
    toClick.addEventListener("click", () => {
            if (toClick === liveChannels) {
                subGroups.classList.remove("visibility2")
            }
        // Check if i bar translate
        if (channelcilck == true) {
            // If slider visible
            if (slider.classList.contains(classToAdd)) {
                // No translate until end
                channelcilck = false;
                // Remove hover from button
                toClick.classList.remove("hover");
                // Hide group Text
                sliderContains.forEach((ele) => {            
                    ele.style.opacity ="0";
                })
                setTimeout(() => {
                    // Close Groups
                    slider.classList.remove(classToAdd);
                    if (minimizeNav) {         
                        // open nav
                        setTimeout(() => {            
                            nav.style.width = "200px";
                            // Show nav text
                            setTimeout(() => {
                                label.forEach((ele) => {
                                    ele.style.display = "block";
                                })
                                label.forEach((ele) => {
                                    ele.style.opacity = "1";
                                    channelcilck = true;
                                })
                            }, 1000);                            
                        }, 1000);
                    } else {
                        setTimeout(() => {           
                            channelcilck = true;
                        }, 1000);
                    }
                }, 500);
            }
            // If slider not visible
            else {
                // No translate until end
                channelcilck = false;
                // Remove hover
                toClick.classList.add("hover");
                // Hide nav text
                label.forEach((ele) => {
                    ele.style.opacity = "0";
                });
                setTimeout(() => {
                    label.forEach((ele) => {
                        ele.style.display = "none";
                    });
                    if (minimizeNav) {
                        // Minimize nav
                        nav.style.width = "50px";
                        setTimeout(() => {
                            // Show group
                            slider.classList.add(classToAdd);
                            // Show group text
                            setTimeout(() => {
                                sliderContains.forEach((ele) => {
                                    ele.style.opacity = "1";
                                });
                                channelcilck = true;
                            }, 1000);
                        }, 1000);
                    } else {
                        // Show group
                        slider.classList.add(classToAdd);
                        // Show group text
                        setTimeout(() => {
                            sliderContains.forEach((ele) => {
                                ele.style.opacity = "1";
                            });
                            channelcilck = true;
                        }, 1000);
                    }
                },500)
            }
        }
    })
    
}

star.forEach((ele) => {
    ele.addEventListener("click", () => {
        if (ele.classList.contains("i-click")) ele.classList.remove("i-click");
        else ele.classList.add("i-click");
    })
})