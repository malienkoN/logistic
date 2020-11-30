{
    const becomeClient = document.querySelector(".become-client");
    const becomeClientModal= document.querySelector("#becomeClientModal");
    const becomeClientClose = becomeClientModal.querySelector(".modal__close");

    becomeClient.addEventListener("click", event => {
        event.preventDefault();

        becomeClientModal.classList.add("show");
    });

    becomeClientClose.addEventListener("click", event=> {
        event.preventDefault();

        becomeClientModal.classList.remove("show");
    });

    window.addEventListener("keydown", event => {
        event.preventDefault();

        if (event.keyCode === 27) {
            if(becomeClientModal.classList.contains("show")) {
                event.preventDefault();

                becomeClientModal.classList.remove("show");
            }
        }
    });
}