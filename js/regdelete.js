window.onload=function(){
document.getElementById("regdelete").addEventListener("click", deleteregiser)
}

function deleteregiser(){
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    localStorage.setItem('registered', 0) 
    console.log('Regisztáció törölve')
}

function showregister(){
    console.log(localStorage.getItem('username'))
    console.log(localStorage.getItem('password'))
}