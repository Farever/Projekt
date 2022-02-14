if(sessionStorage.getItem('isAccepted') == undefined)
{
    sessionStorage.setItem('isAccepted', '0');
}
console.log(sessionStorage.getItem('isAccepted'))

function accepted()
{
        var answer = window.confirm("Az oldal spoilereket tartalmaz.");
        if (answer == true) 
        {
          sessionStorage.setItem('isAccepted', '1');
          console.log(sessionStorage.getItem('isAccepted'))
        }
        else 
        {
          sessionStorage.setItem('isAccepted', '0');
          console.log(sessionStorage.getItem('isAccepted'))
          alert('Nézd meg a sorozatot!');
        document.location="http://www.hbogo.hu/";
        }
}

if(sessionStorage.getItem('isAccepted') == 0){
    accepted()
    sessionStorage.setItem('isAccepted', '1');
    console.log(sessionStorage.getItem('isAccepted'))
}