const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const aliceAnimation = alice1.animate(aliceTumbling, aliceTiming);
aliceAnimation.finished.then((data) => {
  const alice2Animation = alice2.animate(aliceTumbling, aliceTiming);
  alice2Animation.finished.then((data) => {
    const alice3Animation = alice3.animate(aliceTumbling, aliceTiming);
  })
});
