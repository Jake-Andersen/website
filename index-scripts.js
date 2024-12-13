index();

function applyBackground() {
    const savedBackground = localStorage.getItem('backgroundImage');
    if (savedBackground) {
        document.body.style.backgroundImage = `url(${savedBackground})`;
    }
}

// Index page code
function index() {
    applyBackground();
    
    // Contact form verification
    var btn = document.getElementById("emailSend");

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if(name === "") {
            alert("Please enter a name.");
            return false;
        }
    
        if(email === "" || !email.includes("@")) {
            alert("Please enter a valid email address.");
            return false;
        }
    
        if(message === "") {
            alert("Please enter a message to send.");
            return false;
        }

        alert("Thanks for your message!")
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        return true;
    });

    // Background change
    var change = document.getElementById("change-background");
    var body = document.querySelector("body");

    change.addEventListener('click', function(e) {
        e.preventDefault();

        var newBackground = document.getElementById("backgroundFormControlInput");

        if(newBackground.value === "") {
            alert("Please enter a new image URL to change to");
            return false;
        }
        else {
            body.style.backgroundImage = "url(" + newBackground.value + ")";
            localStorage.setItem('backgroundImage', newBackground.value);
            return true;
        }
    });
}