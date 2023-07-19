const text = document.querySelector(".mname");

const textLoad = () =>{
    setTimeout( () => {
        text.textContent = "Developer";
    }, 0);
    setTimeout( () => {
        text.textContent = "Freelancer";
    }, 3000);
    setTimeout( () => {
        text.textContent = "Designer";
    }, 6000);
}

textLoad();
    setInterval(textLoad, 9000);