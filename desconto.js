function toggleDiscount() {
  const discountBody = document.getElementById('apply-discount-body');
  const toggleIcon = document.getElementById('toggle-icon');

  if (
    discountBody.style.display === 'none' ||
    discountBody.style.display === ''
  ) {
    discountBody.style.display = 'block';
    toggleIcon.src = './assets/arrow-up.svg';
  } else {
    discountBody.style.display = 'none';
    toggleIcon.src = './assets/arrow-down.svg';
  }
}

const discountCupons = {
  DESCONTO10: 0.1,
  DESCONTO15: 0.15,
  DESCONTO20: 0.2,
  DESCONTO25: 0.25,
  DESCONTO50: 0.5,
};

function applyDiscount() {
  const discountCode = document
    .getElementById('discount-code')
    .value.trim()
    .toUpperCase();
  const discountMessageElement = document.getElementById('discount-message');
  const totalPriceElement = document.getElementById('total-price');

  if (discountCupons[discountCode]) {
    const discount = discountCupons[discountCode];
    const originalPrice = 1200;
    const discountedPrice = originalPrice * (1 - discount);

    totalPriceElement.innerText = `Preço Total: R$ ${discountedPrice.toFixed(
      2
    )}`;

    localStorage.setItem('discount', discountCode);

    discountMessageElement.style.color = 'green';
    discountMessageElement.innerText = `Desconto de ${discountCode} aplicado!`;

    document.getElementById('discount-code').value = '';
  } else {
    discountMessageElement.style.color = 'red';
    discountMessageElement.innerText = 'Cupom inválido!';
  }
}

function checkStoredDiscount() {
  const storedDiscount = localStorage.getItem('discount');
  const discountMessageElement = document.getElementById('discount-message');

  if (storedDiscount) {
    localStorage.removeItem('discount');
  }

  discountMessageElement.innerText = '';
}

window.onload = checkStoredDiscount();
