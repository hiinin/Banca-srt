// FUNÇÃO - SMOOTH SCROLL
function smoothScroll(target, duration) {
  var element = document.getElementById(target);
  var headerHeight = document.querySelector(".header-container").offsetHeight;

  var position = element.offsetTop - headerHeight;
  var startPosition = window.pageYOffset;
  var distance = position - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }

    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, position);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var sectionLinks = document.querySelectorAll("a[href^='#']");
for (var i = 0; i < sectionLinks.length; i++) {
  sectionLinks[i].addEventListener("click", function (event) {
    event.preventDefault();

    var href = this.getAttribute("href").substring(1);
    smoothScroll(href, 100);
  });
}

/*função de trocar imagem de 5 em 5 segundos*/

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
  nextImage();
}, 5000)

function nextImage() {
  count++;
  if (count>4) {
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;

}

//Função de Efeito gaveta

const toggleButton = document.getElementById('toggle-button');
const drawer = document.getElementById('drawer');
const main = document.getElementById('main');
const buttonLinks = document.getElementById('buttonLinks')

const toggleDrawerOnLoad = () => {
    let drawerOpened = drawer.style.left < '0px' ? false : true;

    drawer.style.left = drawerOpened ? '-250px' : '0';
    main.style.marginLeft = drawerOpened ? '0' : '250px';
    drawer.style.display = drawerOpened ? 'block' : 'none';
}

const toggleDrawer = () => {
    let drawerOpened = drawer.style.left < '0px' ? false : true;

    drawer.style.left = drawerOpened ? '-250px' : '0';
    main.style.marginLeft = drawerOpened ? '0' : '250px';
    drawer.style.display = drawerOpened ? 'block' : 'none';

    if (toggleButton.classList.contains('fa-bars')) {
      toggleButton.classList.remove('fa-bars');
      toggleButton.classList.add('fa-xmark');
    } else {
      toggleButton.classList.remove('fa-xmark');
      toggleButton.classList.add('fa-bars');
    }
}
toggleButton.addEventListener('click', toggleDrawer);