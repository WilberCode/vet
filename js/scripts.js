edgrid.menu('main-nav','main-menu');
 //obtener la distancia  en el menu y el borde superior del viewport
 (function(d){
    let nav = d.getElementById('nav-container');
    let top = nav.offsetTop;
    window.addEventListener('scroll', () => {
      let scroll = d.body.scrollTop;
      if (scroll >= top) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    });
  })(document);