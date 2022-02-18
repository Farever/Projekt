if(sessionStorage.getItem('loggedIn') == undefined)
{
    sessionStorage.setItem('loggedIn', '0');
}

function logIn() {
    var name = document.getElementById("usernameForm");
    var nameValue = name.value;
    var password = document.getElementById("passwordForm");
    var passwordValue = password.value;
    if(nameValue == "admin" && passwordValue == "admin")
    {
        console.log("Sikeres bejelentkezés")
        sessionStorage.setItem('loggedIn', '1')
        var loginText = document.getElementById("navbarDropdown")
        loginText.classList.add("disabled");
    }
}
