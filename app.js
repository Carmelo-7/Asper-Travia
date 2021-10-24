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




// Form Validation code:-

let loginForm = document.querySelector('#login-modal form') ;

loginForm.addEventListener('submit',(e) => {

    let mailId = loginForm.querySelector('[type="email"]'),errorCheck;
    let pwd = loginForm.querySelector ('[type="password"]');

    if(mailId.value===null || mailId.value===''){
        let mailErr = mailId.nextElementSibling;
        mailErr.innerText = "email address required"; 
        errorCheck = true;
    }
 
    if(pwd.value===null || pwd.value===''){
        let pwdErr = pwd.nextElementSibling;
        pwdErr.innerText = "password required"; 
        errorCheck = true;
    }

    else if (pwd.value.length < 8 ){
        let pwdErr = pwd.nextElementSibling;
        pwdErr.innerText = "password must consist of 8 or more characters"; 
        errorCheck = true;
    }


    if(errorCheck)
       e.preventDefault();
})