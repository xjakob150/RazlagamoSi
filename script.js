document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.subcontainer_2, .box');
  
    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    const onScroll = () => {
      elements.forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger the check on load
  });