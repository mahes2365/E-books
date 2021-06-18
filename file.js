const bar = document.querySelector('.nav-bar');
const menuBtn = document.querySelector('.nav-icon');
var link = document.querySelector('.nav-link');
var a = document.getElementById('nav-trans');
let menuOpen = false;
const buttons = document.querySelectorAll('button');
var pwd = document.getElementById("pwd");
var s = document.querySelector('.fa-eye');
var pwd2 = document.getElementById("pwd2");
var s2 = document.querySelector('#sign-up .fa-eye');
var x = document.getElementById('sign-in');
var y = document.getElementById('sign-up');

window.onscroll = function() {
    var nav = window.scrollY;
    if (nav >= 100) {
        bar.classList.add('scroll');
    } else {
        bar.classList.remove('scroll');

    }
};

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('change');
        link.classList.add('nav-m-link');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('change');
        link.classList.remove('nav-m-link');
        menuOpen = false;
    }
    if (a.addEventListener) {
        a.addEventListener('click', () => {
            a.classList.remove('nav-m-link');
            menuBtn.classList.remove('change');
            link.classList.remove('nav-m-link');
            menuOpen = false;
        });
    }
});

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 1000);
    })
});

function show() {
    if (pwd.type === 'password') {
        pwd.type = 'text';
        s.classList.add('fa-eye-slash');
    } else {
        pwd.type = "password";
        s.classList.remove('fa-eye-slash');
    }
}

function show2() {
    if (pwd2.type === 'password') {
        pwd2.type = 'text';
        s2.classList.add('fa-eye-slash');
    } else {
        pwd2.type = "password";
        s2.classList.remove('fa-eye-slash');
    }
}

function signup() {
    y.style.display = 'block';
    x.style.display = 'none';
}

function signin() {
    y.style.display = 'none';
    x.style.display = 'block';
}