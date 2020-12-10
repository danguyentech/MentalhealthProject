function checkPosition() {
    let elements= document.querySelectorAll('.hidden');
    let windowHeight = window.innerHeight;
    for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = elements[i].getBoundingClientRect().top;
  
    if (positionFromTop - windowHeight <= 0) {
          element.classList.add('slideInFromBottom');
          element.classList.remove('hidden');
        }
      }
    }
  
window.addEventListener('load', checkPosition);
window.addEventListener('scroll', checkPosition);
