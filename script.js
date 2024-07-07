// @ts-nocheck
const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");

// @ts-ignore
resetButtonEl.addEventListener("click", () => {
  // set counter value to 0
  // @ts-ignore
  counterValueEl.textContent = 0;

  // reset background color
  // @ts-ignore
  counterEl.classList.remove("counter--limit");

  // reset counter title
  // @ts-ignore
  counterTitleEl.textContent = "Wilson Counter";

  // enable increase and decrease buttons
  // @ts-ignore
  increaseButtonEl.disabled = false;
  // @ts-ignore
  decreaseButtonEl.disabled = false;

  // unfocus (blur) reset button
  // @ts-ignore
  resetButtonEl.blur();
});

// @ts-ignore
decreaseButtonEl.addEventListener("click", () => {
  // get current value of counter
  // @ts-ignore
  const currentValue = counterValueEl.textContent;

  // convert value value to number type
  // @ts-ignore
  const currentValueAsNumber = +currentValue;

  // decrement by 1
  let newValue = currentValueAsNumber - 1;

  // check if new value is less than 0
  if (newValue < 0) {
    // if it is, force it to be 0 instead
    newValue = 0;
  }

  // update counter value with new value
  // @ts-ignore
  counterValueEl.textContent = newValue;

  // unfocus (blur) button
  // @ts-ignore
  decreaseButtonEl.blur();
});

const incrementCounter = () => {
  // get current value of counter
  // @ts-ignore
  const currentValue = counterValueEl.textContent;

  // convert value to number type
  // @ts-ignore
  const currentValueAsNumber = +currentValue;

  // increment by 1
  let newValue = currentValueAsNumber + 1;

  // check if new value is greater than 5
  if (newValue > 5) {
    // if it is, force it to be 5 instead
    newValue = 5;

    // give visual indicator that limit has been reached
    // @ts-ignore
    counterEl.classList.add("counter--limit");

    // update counter title to say limit has been reached
    counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for >5";

    // disable increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  // set counter element with new value
  counterValueEl.textContent = newValue;

  // unfocus (blur) button
  increaseButtonEl.blur();
};

increaseButtonEl.addEventListener("click", incrementCounter);
document.addEventListener("keydown", incrementCounter);
