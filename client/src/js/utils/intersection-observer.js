let options = {
  rootMargin: '0px',
  threshold: 0.3
}

const addActiveClass = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      console.log(entry.target);
    }
  })
};


const observe = () => {
  let observer = new IntersectionObserver(addActiveClass, options);

  observer.observe(document.querySelector('#weather'));
  observer.observe(document.querySelector('#pictures'));
  observer.observe(document.querySelector('.elon-twitter__container'));
  observer.observe(document.querySelector('.space-twitter__container'));
  observer.observe(document.querySelector('#twitter'));
}

export default observe;

