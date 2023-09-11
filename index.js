let profileMenu = document.getElementById("profileMenu");

function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}

// $(".nav-profile-img").click(function(){
//     $(".profile-menu-wrap").toggleClass("open-menu");
// });

let sidebarActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity(){
    sidebarActivity.classList.toggle("open-activity");
    
    if(sidebarActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show Less <b>-</b>";
    }
    else{
        moreLink.innerHTML = "Show More <b>+</b>";
    }
}