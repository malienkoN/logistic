{
    const callBack = document.querySelector("#call-back");
    const thanksModal= document.querySelector("#thanksModal");
    const thanksClose = thanksModal.querySelector(".modal__close");

    callBack.addEventListener("click", event => {
        event.preventDefault();

        thanksModal.classList.add("show");
    });

    thanksClose.addEventListener("click", event => {
       event.preventDefault();

       thanksModal.classList.remove("show");
    });

    window.addEventListener("keydown", event => {
        event.preventDefault();

        if (event.keyCode === 27) {
            if(thanksModal.classList.contains("show")) {
                event.preventDefault();

                thanksModal.classList.remove("show");
            }
        }
    });
}