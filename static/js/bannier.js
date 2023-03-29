(function(){
  const its = document.querySelectorAll(".element")

  its.forEach(function(it){
    it.addEventListener("click", ()=>{
      if(it.classList.contains("active") === false){
        let itt = document.querySelector(".active")
        itt.classList.remove("active")
        itt.classList.add("inactive")
        it.classList.remove("inactive")
        it.classList.add("active")
      }
    })
  })
})();

