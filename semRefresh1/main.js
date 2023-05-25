const content = document.getElementById('content'); 
var btn  = document.querySelector('#btn');

btn.addEventListener('click',clickButton);

function clickButton() {

  ajax('contato.html', content)
}

const ajax = (sum, mun) => {
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      mun.innerHTML = xmlhttp.responseText
    }
  }
  xmlhttp.open("GET", sum);
  xmlhttp.send();
}
