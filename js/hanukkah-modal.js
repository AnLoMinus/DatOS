document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".hanukkah-modal-overlay");
    const closeButtons = document.querySelectorAll(".hanukkah-close");
    const openButtons = document.querySelectorAll(".hanukkah-menu-button");

    const openModal = () => {
        if (overlay) {
            overlay.classList.add("active");
        }
    };

    const closeModal = () => {
        if (overlay) {
            overlay.classList.remove("active");
        }
    };

    openButtons.forEach((button) => {
        button.addEventListener("click", openModal);
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", closeModal);
    });

    if (overlay) {
        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                closeModal();
            }
        });
    }

    openModal();
});
