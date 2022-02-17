if(sessionStorage.getItem('loggedIn') == undefined)
{
    sessionStorage.setItem('loggedIn', '0');
}

function logIn() {
    var email = document.getElementById("emailForm");
    var emailValue = email.value;
    var password = document.getElementById("passwordForm");
    var passwordValue = password.value;
    if(emailValue == "admin@gmail.com" && passwordValue == "admin")
    {
        console.log("Sikeres bejelentkezés")
        sessionStorage.setItem('loggedIn', '1');
        location.reload();
        document.getElementsById("navbarDropdown").classList.add('disabled');
    }
}
