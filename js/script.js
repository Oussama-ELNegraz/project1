fetch("./js/json.json")
    .then((response) => response.json())
    .then((data) => {
        var ul = document.querySelector(".groups > ul");
        data.forEach((ele, idx) => {
            var li = document.createElement("li");
            li.setAttribute("data-number", idx);
            var text = document.createTextNode(ele["categorie"]);
            li.appendChild(text);
            ul.appendChild(li);



            var nav = document.getElementById("nav");
            var liveChannels = document.getElementById("liveChannels");
            var groups = document.querySelector(".groups");
            var groupsContains = document.querySelectorAll(".groups  *");
            var label = document.querySelectorAll("#nav label");
            var subGroups = document.querySelector(".sub-groups");
            var channelcilck = true;


            liveChannels.addEventListener("click", () => {
                var subGroupsContains = document.querySelectorAll(".sub-groups *");
                // Close Sub Slider if Open
                if (subGroups.classList.contains("visibility2")) {
                    subGroupsContains.forEach((ele) => {
                        ele.style.opacity = "0";
                        espana.forEach((ele) => ele.classList.remove("hover"));
                    });
                    setTimeout(() => {
                        subGroups.classList.remove("visibility2");
                        setTimeout(() => {
                            showSlider(liveChannels, groups, groupsContains, "visibility", true);
                        }, 1000);
                    }, 500);
                } else showSlider(liveChannels, groups, groupsContains, "visibility", true);
            });

            var espana = document.querySelectorAll(".groups ul li");
            espana.forEach((ele, idx) => {
                ele.addEventListener("click", () => {
                    var subGroupsContains = document.querySelectorAll(".sub-groups *");
                    if (
                        subGroups.classList.contains("visibility2") &&
                        !ele.classList.contains("hover")
                    ) {
                        subGroupsContains.forEach((ele) => {
                            ele.style.opacity = "0";
                        });
                        espana.forEach((ele) => ele.classList.remove("hover"));
                        setTimeout(() => {
                            subGroups.classList.remove("visibility2");
                            setTimeout(() => {
                                write(data[ele.getAttribute("data-number")]["content"], data[ele.getAttribute("data-number")]["categorie"]); // data[0]["content"],data[0]["categorie"]
                                var star = document.querySelectorAll(".container  .sub-groups ul i");
                                star.forEach((ele) => {
                                    ele.addEventListener("click", () => {
                                        if (ele.classList.contains("i-click"))
                                            ele.classList.remove("i-click");
                                        else ele.classList.add("i-click");
                                    });
                                });
                                var subGroupsContains = document.querySelectorAll(".sub-groups *");
                                showSlider(ele, subGroups, subGroupsContains, "visibility2", false);
                            }, 1000);
                        }, 500);
                    } else {
                        write(data[ele.getAttribute("data-number")]["content"], data[ele.getAttribute("data-number")]["categorie"]); // data[0]["content"],data[0]["categorie"]
                        var star = document.querySelectorAll(".container  .sub-groups ul i");
                        star.forEach((ele) => {
                            ele.addEventListener("click", () => {
                                if (ele.classList.contains("i-click"))
                                    ele.classList.remove("i-click");
                                else ele.classList.add("i-click");
                            });
                        });
                        var subGroupsContains = document.querySelectorAll(".sub-groups *");
                        showSlider(ele, subGroups, subGroupsContains, "visibility2", false);
                    }
                });
            });



            // Function To Show Or Hide Sliders
            function showSlider(toClick, slider, sliderContains, classToAdd, minimizeNav) {
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
                            ele.style.opacity = "0";
                        });
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
                                        });
                                        label.forEach((ele) => {
                                            ele.style.opacity = "1";
                                            channelcilck = true;
                                        });
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
                        }, 500);
                    }
                }
            }

        });
    });


