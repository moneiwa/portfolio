document.addEventListener("DOMContentLoaded", () => {
    const profilePic = document.querySelector(".profile-pic");
    profilePic.addEventListener("mouseover", () => {
        profilePic.classList.add("rotate");
    });

    profilePic.addEventListener("mouseout", () => {
        profilePic.classList.remove("rotate");
    });
});
