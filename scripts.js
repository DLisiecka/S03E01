(function() {

    var button = document.querySelector("#MapLink");

    button.addEventListener("click", function(e) {

        if(!window.navigator.geolocation) return;

        button.textContent = "Jeszcze chwilę...";

        navigator.geolocation.getCurrentPosition(function(position) {

            var coords = position.coords,
                mapLink = document.createElement("a");

            mapLink.classList.add("button");
            mapLink.setAttribute("href", "http://bing.com/maps/default.aspx?cp=" + coords.latitude + "~" + coords.longitude);
            mapLink.textContent = "Zobacz na mapie";

            button.parentNode.appendChild(mapLink);
            button.parentNode.removeChild(button);

        });

    }, false);

})();