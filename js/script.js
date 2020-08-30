window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('ubah', window.scrollY > 0);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}











$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('Clicked button.')

        const email = $('.email').val()
        const subject = $('.subject').val()
        const message = $('.message').val()
        const statusElm = $('.status')
        statusElm.empty()



        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append("<div style='color: springgreen;'>Your email is valid.</div>")
        } else {
            event.preventDefault()
            statusElm.append("<div style='color: red;'>Your email isn't valid. </div>")
        }
        if (subject.length > 2) {
            statusElm.append("<div style='color: springgreen;'>Your subject is valid.</div>")
        } else {
            event.preventDefault()
            statusElm.append("<div style='color: red;'>Your subject isn't valid. </div>")
        }
        if (message.length >= 10) {
            statusElm.append("<div style='color: springgreen;'>Your message is valid.</div>")
        } else {
            event.preventDefault()
            statusElm.append("<div style='color: red;'>Your message isn't valid. </div>")
        }
    })
})