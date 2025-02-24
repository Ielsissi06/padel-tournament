const scriptURL = 'https://script.google.com/macros/s/AKfycbxHNbs6g-2FMNlCn-AMZPBxV3xDF7rs9iYBJ3tUMQT-OIAIMuE5uGyQwCIm7h17FpgS/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your form has been submitted successfully. Redirecting to payment link..." ))
    .then(() => { window.location.href = 'https://buy.stripe.com/28o7vCd8U8PH4iAcMO'; })
    .catch(error => console.error('Error!', error.message))
})
