let hero = document.querySelector('#hero');

let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-scrolled', window.scrollY > 0);
});

let signUpForm = document.querySelector('.register-form');

let TNCchecks = document.querySelectorAll('#tnc-checkbox');
let registerBtns = document.querySelectorAll('.register-cta');


TNCchecks.forEach((TNCcheck) => {

    TNCcheck.checked = false;

    TNCcheck.addEventListener('click', (e) => {
        if (e.target.checked) {
            registerBtns[0].classList.remove('disabled');
            registerBtns[1].classList.remove('disabled');
            console.log('chutiya')
        }

        else if (!e.target.checked) {
            registerBtns[0].classList.add('disabled');
            registerBtns[1].classList.add('disabled');
        }
    });
}
);

let loginModal = document.querySelector('#login-modal') ;

loginModal.addEventListener('submit',(e) => {
   e.preventDefault();
})
