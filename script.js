// script.js


// Replace these links with your real Stripe Payment Links
const stripeLinks = {
5: 'https://buy.stripe.com/test_5usdexample',
10: 'https://buy.stripe.com/test_10usdexample',
20: 'https://buy.stripe.com/test_20usdexample'
};


const amountSelect = document.getElementById('amount');
const donateBtn = document.getElementById('donateBtn');
const msg = document.getElementById('msg');
const customBox = document.getElementById('customAmountBox');


amountSelect.addEventListener('change', () => {
if (amountSelect.value === 'custom') {
customBox.style.display = 'block';
} else {
customBox.style.display = 'none';
}
});


donateBtn.addEventListener('click', () => {
const val = amountSelect.value;
let amount = val;
if (val === 'custom') {
amount = document.getElementById('customAmount').value;
if (!amount || amount < 1) {
msg.textContent = 'Please enter a valid amount.';
return;
}
// Optional: redirect to a dynamic donation page
window.location.href = `https://buy.stripe.com/test_dynamicexample?amount=${amount}`;
return;
}
const link = stripeLinks[val];
if (!link) {
msg.textContent = 'Donation link not set for this amount.';
return;
}
window.location.href = link;
});
