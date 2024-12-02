if(location.pathname.split('/').pop() == 'index.html') {
    index()
}
else {
    about()
}

function applyBackground() {
    const savedBackground = localStorage.getItem('backgroundImage');
    if (savedBackground) {
        document.body.style.backgroundImage = `url(${savedBackground})`;
    }
}

// Index page code
function index() {
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
    var newBackground = document.getElementById("backgroundFormControlInput");
    var body = document.querySelector("body");

    applyBackground();

    change.addEventListener('click', function(e) {
        body.style.backgroundImage = "url(" + newBackground.value + ")";
        localStorage.setItem('backgroundImage', newBackground.value);
    });
}

// About page code
function about() {
    // True or False game controls
    var trueOrFalse = document.querySelectorAll("button.trueOrFalse");

    applyBackground();

    trueOrFalse.forEach(pick => {
        pick.addEventListener('click', function () {
            var value = pick.getAttribute("id");
            result(value);
        });
    });

    function result(value) {
        var result1 = document.getElementById("result1");
        var result2 = document.getElementById("result2");
        var result3 = document.getElementById("result3");

        switch (value) {
            case "true1":
                result1.textContent = "Incorrect! Actually, my second favorite language has become HTML.";
                break;
            case "false1":
                result1.textContent = "Correct! Actually, my second favorite language has become HTML.";
                break;
            case "true2":
                result2.textContent = "Correct! I do in fact have two dogs along with my cats, even though I still prefer cats.";
                break;
            case "false2":
                result2.textContent = "Incorrect! I do in fact have two dogs along with my cats, even though I still prefer cats.";
                break;
            case "true3":
                result3.textContent = "Incorrect! I have actually been twice at different locations.";
                break;
            case "false3":
                result3.textContent = "Correct! I have actually been twice at different locations.";
                break;
        }
    }

    // Guessing game controls
    var guesses = document.querySelectorAll("button.guess");
    var guessMessage = document.getElementById("guessingMessage");

    guesses.forEach(guess => {
        guess.addEventListener('click', function () {
            if (guess.textContent == 7) {
                guessMessage.textContent = "Yes, correct! In total I know HTML, CSS, JavaScript, Python, Java, Dart, and even SQL.";
            } else {
                guessMessage.textContent = "Try again!";
                guess.style.display = "none";
            }
        });
    });
}