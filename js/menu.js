document.getElementById("hamburgerBtn").addEventListener("click", function () {
  const dropdownMenu = document.getElementById("dropdownNavMenu");
  const menuItems = dropdownMenu.querySelectorAll("li");

 
  if (dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.remove("hidden", "scale-y-0");
    dropdownMenu.classList.add("scale-y-100");

    
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove("opacity-0", "translate-y-2");
        item.classList.add("opacity-100", "translate-y-0");
      }, 100 * index);
    });
  } else {
  
    menuItems.forEach((item) => {
      item.classList.add("opacity-0", "translate-y-2");
      item.classList.remove("opacity-100", "translate-y-0");
    });

    
    setTimeout(() => {
      dropdownMenu.classList.add("scale-y-0");
      dropdownMenu.classList.remove("scale-y-100");
      setTimeout(() => {
        dropdownMenu.classList.add("hidden");
      }, 300); 
    }, 300);
  }
});
