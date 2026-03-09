const navbar = document.getElementById('navbar')
 

// <li class="navbar_social_link"><a href="" target="_blank"><img src="assets/icon_insta_navbar.svg"/></a></li>
navbar.innerHTML = `
    <div id="navbar_logo">
        <img src="src/brand_horizontal_d.svg"/>
    </div>

    <div id="navbar_links_container">
        <a class="navbar_link" href="#hero_section">Home</a>
        <a class="navbar_link" href="#app_download_section">App</a>
        <a class="navbar_link" href="#app_feature_section">Features</a>
        <i id="close" class="fa-solid fa-x navbar_link"></i>
    </div>

    <di id="mobil_navbar">
        <i id="mobil_navbar_btn" class="fa-solid fa-bars"></i>
    </di>
`

 
//E V E N T   L I S T E N E R s
document.onscroll = function () {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");
    } 
    else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
    }
}


document.addEventListener('click',function(e){
    if(e.target.id === 'mobil_navbar_btn'){
        openMobileNavbar()
    }
    
    if(e.target.id === 'close'){
        closeMobileNavbar()
    }
})

function openMobileNavbar(){
    const navbar_links_container = document.getElementById('navbar_links_container')
    navbar_links_container.style.right = '0'
}

function closeMobileNavbar(){
    const navbar_links_container = document.getElementById('navbar_links_container')
    navbar_links_container.style.right = '-250px'
}