function toggleMenu() {
    var menu = $("#menu")[0];
    if (menu.style.display === "none" || menu.style.display == '') {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function changeLocation(location){
        window.location.pathname = "Epos/" + location;
}

function scrollToTop(){
        $("html, body").animate({scrollTop: 0}, 1400);
}

$(document).ready(function () {
    var menu = $("#menu")[0];
    if(window.location.pathname != "/Epos/index.html"){
        menu.style.display = "block";

        if(window.location.pathname == "/Epos/about-us.html"){
            $("#about-us")[0].firstElementChild.style.color = "hotpink"
        }
        else if(window.location.pathname == "/Epos/contact.html"){
            $("#contact")[0].firstElementChild.style.color = "hotpink"
        }
        else {
            $("#gallery")[0].firstElementChild.style.color = "hotpink"
        }
    }

    else {
        $("#home")[0].firstElementChild.style.color = "hotpink"
    }
});
