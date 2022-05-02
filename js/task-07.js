const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");

inputRangeRef.value = 15;
inputRangeRef.max = 100;
inputRangeRef.min = 10;

const handleInput = () => {
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
};

inputRangeRef.addEventListener("input", handleInput);