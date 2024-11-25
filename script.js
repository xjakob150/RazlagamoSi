document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.subcontainer_2, .box'); // Select elements
  
    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom > 0
        ); // Adjusted logic to check partial visibility
      };
  
    const onScroll = () => {
      elements.forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add('visible');
          console.log('Element is visible:', el); // Debugging visibility
        }
      });
    };
  
    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger the check on load    
  });