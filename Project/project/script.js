const scrollToTop = () => {
   const c = document.documentElement.scrollTop || document.body.scrollTop;
   if (c > 0) {
     window.requestAnimationFrame(scrollToTop);
     // Здесь никаких виражей! ✈️
     window.scrollTo(0, c - c / 8);
   }
 };
 
 scrollToTop();

