

(function(){
  let topbar = document.querySelector(".topbar")
  let nav = document.querySelector(".page-header")
  let bannier = document.querySelector(".bannier")
  if(window.innerHeight < 800){
    bannier.style.height =(window.innerHeight - (topbar.offsetHeight + nav.offsetHeight)) + 10 +  "px" 
  }

  function resize() {
    if(window.innerHeight < 800){
      bannier.style.height =(window.innerHeight - (topbar.offsetHeight + nav.offsetHeight)) + 10 +  "px"
    }
  }

  
  window.onresize = resize

})();

(function(){
  const pageHeader = document.querySelector(".page-header");
  const openMobMenu = document.querySelector(".open-mobile-menu");
  const closeMobMenu = document.querySelector(".close-mobile-menu");
  const toggleSponsor = document.querySelector(".sponsor");
  const sponsor = document.querySelector(".sponsor_container");
  const topMenuWrapper = document.querySelector(".top-menu-wrapper");
  const isVisible = "is-visible";
  const showOffCanvas = "show-offcanvas";
  const noTransition = "no-transition";
  let resize;

  openMobMenu.addEventListener("click", () => {
    topMenuWrapper.classList.add(showOffCanvas);
  });

  closeMobMenu.addEventListener("click", () => {
    topMenuWrapper.classList.remove(showOffCanvas);
  });

  toggleSponsor.addEventListener("click", () => {
    sponsor.classList.toggle(isVisible);
  });

  window.addEventListener("resize", () => {
    pageHeader.querySelectorAll("*").forEach(function(el) {
      el.classList.add(noTransition);
    });
    clearTimeout(resize);
    resize = setTimeout(resizingComplete, 500);
  });

  function resizingComplete() {
    pageHeader.querySelectorAll("*").forEach(function(el) {
      el.classList.remove(noTransition);
    });
  }})();


(function(){
  const container_li = document.querySelectorAll(".has-dropdown")
  const container_sub_menu = document.querySelectorAll(".mob-sub-menu")
  
  function changer(active_sub, li, new_sub){
    active_sub.classList.remove("active-sub")
    li.classList.add("active-link")
    new_sub.classList.add("active-sub")
    new_sub.offsetParent
    new_sub.classList.add("in")
  }

  container_li.forEach(function(li){
    let link = li.firstElementChild
    let id = link.id
    link.addEventListener("click", ()=>{
      if(!li.classList.contains("active-link")){
        let active_li = document.querySelector(".active-link")
        let active_sub = document.querySelector(".active-sub")
        let new_sub = document.getElementsByName(id)[0]
  
        active_li.classList.remove("active-link")
        active_sub.classList.remove("in")
        active_sub.addEventListener("transitionend", changer(active_sub, li, new_sub))
        active_sub.removeEventListener("transitionend", changer(active_sub, li, new_sub))
  
      }
    })
  })

})()