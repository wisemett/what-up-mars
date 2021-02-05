let options = {
  rootMargin: '0px',
  threshold: 0.5
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
  observer.observe(document.querySelector('#elon-profile'));
  observer.observe(document.querySelector('#space-profile'));
  observer.observe(document.querySelector('.elon-twitter__container'));
  observer.observe(document.querySelector('.space-twitter__container'));
  observer.observe(document.querySelector('#message'));
}

export default observe;

