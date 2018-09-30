// link to Sexplanations youtube channel
const youtubeBtns = document.querySelectorAll('.link-youtube');
youtubeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.location = 'https://youtube.com/user/sexplanations';
    });
});

// link to Donate page
const donateBtns = document.querySelectorAll('.link-donate');
donateBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.location = '/donate';
    });
});

// link to FAQ section on Home page
const faqBts = document.querySelectorAll('.link-faq');
faqBts.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.location = '/#faq';
    });
});

// show/hide the sticky header depending on page scroll position
window.addEventListener('scroll', () => {
    const headerEl = document.getElementById('sticky-header');
    const stickyHeaderStartEl = document.getElementById('sticky-header-start');

    if (headerEl && stickyHeaderStartEl) {
        const headerIsSticky = stickyHeaderStartEl.getBoundingClientRect().top <= -200;
        // when we scrolled down far enough, add the class to make the sticky header visible
        if (headerIsSticky && !headerEl.classList.contains('visible')) {
            headerEl.classList.add('visible');
        }
        // when we scrolled up far enough, add the class for the fade-out animation
        else if (!headerIsSticky && headerEl.classList.contains('visible') && !headerEl.classList.contains('fade-out')) {
            headerEl.classList.add('fade-out');
            headerEl.classList.remove('visible');
            // then hide the sticky header after the animation
            window.setTimeout(() => {
                headerEl.classList.remove('fade-out');
            }, 500);
        }
    }
});

// on mobile, open the nav menu by clicking on a hamburger icon
const mobileMenuIcons = document.querySelectorAll('.header__icon--menu');
const mobileMenuEl = document.getElementById('mobile-menu');
mobileMenuIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        if (mobileMenuEl && !mobileMenuEl.classList.contains('visible')) {
            mobileMenuEl.classList.add('visible');
        }
    });
});
// and close the nav menu by clicking on the X
const mobileMenuCloseEl = document.getElementById('mobile-menu-close');
mobileMenuCloseEl.addEventListener('click', () => {
    if (mobileMenuEl && mobileMenuEl.classList.contains('visible')) {
        mobileMenuEl.classList.remove('visible');
    }
});

// show/hide data capsule info when clicking on info icon
const dataCapsuleIcons = document.querySelectorAll('.data-capsule__info-icon');
dataCapsuleIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        const capsule = icon.parentElement;
        if (capsule.classList.contains('active')) {
            capsule.classList.remove('active');
        } else {
            capsule.classList.add('active');
        }
    });
});
