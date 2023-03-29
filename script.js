document.addEventListener('DOMContentLoaded', (e) => {
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email)
      }

    const button = document.querySelector('button');
    const email = document.querySelector('input');

    button.addEventListener('click', () => {
        let response = document.querySelector('.response');
        let res;

        if(email.value.length){
             res = validateEmail(email.value) 
               ? 'Thank you' 
               : 'Please provide valid email !'
             
        } else {
             res = 'email cannot be empty !'
        }

        response.textContent = res;
    
    })
})