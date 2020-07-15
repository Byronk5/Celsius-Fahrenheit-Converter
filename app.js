document.getElementById('form').addEventListener('submit', calculateTemp);

//UI
const celsius = document.getElementById('celsius-number');
const fahrenheit = document.getElementById('fahrenheit-number');

function calculateTemp(e) {
  const fahrenheitCalculated = parseFloat(celsius.value) * 1.8 + 32;

  if (isFinite(fahrenheitCalculated)) {
    fahrenheit.value = fahrenheitCalculated.toFixed(2);
  } else {
    showError('Please check your numbers');
  }
  displayLoading();

  document.getElementById('clear-temp').addEventListener('click', clearValues);

  function clearValues(e) {
    celsius.value = '';
    fahrenheit.value = '';
    e.preventDefault();
  }

  e.preventDefault();
}

function displayLoading() {
  document.querySelector('.loading-img').style.display = 'block';
}

function showError(error) {
  const errorDiv = document.createElement('div');
  const heading = document.querySelector('.heading');
  const container = document.querySelector('.container');

  errorDiv.className = 'alert text-center';
  errorDiv.appendChild(document.createTextNode(error));
  container.insertBefore(errorDiv, heading);

  document.querySelector('.loading-image').style.display = 'none';
  //Timeout not working when querySelector above is run??
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}
