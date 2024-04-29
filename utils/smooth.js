
export const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      smoothScrollTo(element.offsetTop, 1500); // Adjust the duration (in milliseconds)
    }
  };

  const smoothScrollTo = (endY, duration) => {
    const startY = window.pageYOffset;
    const distance = endY - startY;
    const startTime = new Date().getTime();

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = () => {
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - startTime;
      window.scrollTo(0, easeInOutQuad(timeElapsed, startY, distance, duration));
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    animation();
  };
