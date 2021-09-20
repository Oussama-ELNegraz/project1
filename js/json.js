// https://epg.best/available-channels
function write(data, title) {

    var subGroups = document.querySelector(".sub-groups");

    var div1 = document.createElement("div");

    var h3 = document.createElement("h3");
    var texth3 = document.createTextNode(title)
    h3.appendChild(texth3);
    
    var div2 = document.createElement("div");

    var label = document.createElement("label");
    label.setAttribute("for", "search");            
    var font = document.createElement("i");
    font.classList.add("fas","fa-search");
    label.appendChild(font);
    
    var input = document.createElement("input");
    input.setAttribute("id", "search");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Search");

    div2.appendChild(label);
    div2.appendChild(input);
    
    div1.appendChild(h3);
    div1.appendChild(div2);     
        
    
    // <div>
    //     <li>M.FEST</li>
    //     <i class="far fa-star"></i>
    // </div>
    
    
    
    var ul = document.createElement("ul")
    
    data.forEach(element => {
        
        var div3 = document.createElement("div");
        
        var li = document.createElement("li");
        var textLi = document.createTextNode(element["name"]);
        li.appendChild(textLi);
        
        var font = document.createElement("i");
        font.classList.add("far", "fa-star");      
        
        div3.appendChild(li);
        div3.appendChild(font);
        ul.appendChild(div3);
    });

    subGroups.innerHTML = "";
    subGroups.appendChild(div1);
    subGroups.appendChild(document.createElement("hr"));
    subGroups.appendChild(ul);
}