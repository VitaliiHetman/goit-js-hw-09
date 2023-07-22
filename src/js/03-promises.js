import Notiflix from 'notiflix';
const btn = document.querySelector('button');
const form = document.querySelector('.form')



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', (e)=>{
  e.preventDefault()

  const delay=parseInt(form.elements.delay.value)
  const step =parseInt(form.elements.step.value)
  const amount =parseInt(form.elements.amount.value)

  for (let i = 0; i < amount; i++) {
    createPromise(i, delay+i*step)
    .then(({ position, delay }) => {
     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
    });

  }
});