if(sessionStorage.getItem('loggedIn') == '1')
{
    console.log('megnyitottad az oldalt')
} else{
    alert('Jelentkezz be!')
    window.location.href = '../PROJEKT/index.html';
}