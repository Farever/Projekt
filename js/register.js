if(localStorage.getItem('registered') == 1){
    window.location.href = '../PROJEKT/index.html';
}
function register(){
    var name = document.getElementById("registerUsername");
    //var email = document.getElementById("registerEmail");
    var password = document.getElementById("registerPassword");
    localStorage.setItem('username', name.value)
    localStorage.setItem('password', password.value)
    localStorage.setItem('registered', 1) 
    window.location.href = '../PROJEKT/index.html';
}