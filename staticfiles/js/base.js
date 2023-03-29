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
        let new_sub = document.getElementsByClassName(id)[0]
  
        active_li.classList.remove("active-link")
        active_sub.classList.remove("in")
        active_sub.addEventListener("transitionend", changer(active_sub, li, new_sub))
        active_sub.removeEventListener("transitionend", changer(active_sub, li, new_sub))
  
      }
    })
  })

})();



(function(){
  const sliderUI = {
    slider: document.getElementById("slider"),
    slides: document.querySelectorAll(".slide"),
    controls: {
      prevBtn: document.getElementById("btn-prev"),
      nextBtn: document.getElementById("btn-next")
    }
  };
  
  let sliderController = {
    isMouseDown: false,
    startPosX: 0,
    scrollLeft: sliderUI.slider.offsetLeft,
    goNext() {
      let _scrollBy = Math.round((sliderUI.slider.offsetWidth + 20) - (sliderUI.slider.scrollLeft % (sliderUI.slides[0].offsetWidth + 20)));
      
      easyScroll({
        scrollableDomEle: sliderUI.slider,
        direction: "right",
        duration: 200,
        easingPreset: "easeInQuad",
        scrollAmount: _scrollBy
      });
    },
    goPrev() {
      let _scrollBy = Math.round(sliderUI.slider.offsetWidth + 20) - (Math.round((sliderUI.slides[0].offsetWidth + 20)) - (sliderUI.slider.scrollLeft % (Math.round(sliderUI.slides[0].offsetWidth + 20))));
      
      easyScroll({
        scrollableDomEle: sliderUI.slider,
        direction: "left",
        duration: 200,
        easingPreset: "easeInQuad",
        scrollAmount: _scrollBy
      });
    }
  };
  
  sliderUI.controls.nextBtn.addEventListener("click", (event) => {
    event.preventDefault();
    sliderController.goNext();
  });
  
  sliderUI.controls.prevBtn.addEventListener("click", (event) => {
    event.preventDefault();
    sliderController.goPrev();
  });
  
  sliderUI.slider.addEventListener("wheel", (event) => {
    event.stopPropagation();
    sliderUI.slider.scrollLeft -= event.wheelDeltaX;
  });
  
  sliderUI.slider.addEventListener("scroll", (event) => {
    if (
      sliderUI.slider.offsetWidth + sliderUI.slider.scrollLeft + 1 >
      sliderUI.slider.scrollWidth
    ) {
      sliderUI.controls.nextBtn.classList.add("hide");
      if (document.activeElement.id === sliderUI.controls.nextBtn.id) {
        sliderUI.controls.prevBtn.focus();
      }
    } else {
      sliderUI.controls.nextBtn.classList.remove("hide");
    }
  
    if (sliderUI.slider.scrollLeft - 1 < 0) {
      sliderUI.controls.prevBtn.classList.add("hide");
      if (document.activeElement.id === sliderUI.controls.prevBtn.id) {
        sliderUI.controls.nextBtn.focus();
      }
    } else {
      sliderUI.controls.prevBtn.classList.remove("hide");
    }
  });
  
  sliderUI.slider.addEventListener("mousedown", (event) => {
    sliderController.isMouseDown = true;
    sliderController.scrollLeft = sliderUI.slider.scrollLeft;
    sliderController.startPosX = event.pageX - sliderUI.slider.offsetLeft;
  });
  
  sliderUI.slider.addEventListener("mousemove", (event) => {
    if (!sliderController.isMouseDown) return;
    let _x = event.pageX - sliderUI.slider.offsetLeft;
    let _xChange = _x - sliderController.startPosX;
    sliderUI.slider.scrollLeft = sliderController.scrollLeft - _xChange;
  });
  
  sliderUI.slider.addEventListener("mouseup", (event) => {
    sliderController.isMouseDown = false;
  });
  
  sliderUI.slider.addEventListener("mouseleave", (event) => {
    sliderController.isMouseDown = false;
  });
  
  sliderUI.slider.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      sliderController.goPrev();
    }
    if (event.key === "ArrowRight") {
      sliderController.goNext();
    }
  });
  
  sliderUI.slider.addEventListener("touchstart", (event) => {
    sliderController.isMouseDown = true;
    sliderController.scrollLeft = sliderUI.slider.scrollLeft;
    sliderController.startPosX = event.pageX - sliderUI.slider.offsetLeft;
  });

})();


