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

    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }


  /* DARK MODE */
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
