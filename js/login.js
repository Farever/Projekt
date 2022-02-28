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
        alert("Sikeres bejelentkezés")
        sessionStorage.setItem('loggedIn', '1')
    } else{
        var username = localStorage.getItem('username')
        var userpassword = localStorage.getItem('password') 
        if(nameValue == username && passwordValue == userpassword)
        {
            alert("Sikeres bejelentkezés")
            sessionStorage.setItem('loggedIn', '1')
        } else{
            alert('Sikertelen bejelentkezés.')
        }
    }
}