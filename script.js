 const menuBtn = document.getElementById("menuBtn");
    const popupMenu = document.getElementById("popupMenu");

    menuBtn.addEventListener("click", () => {
        popupMenu.style.display =
            popupMenu.style.display === "block" ? "none" : "block";
    });