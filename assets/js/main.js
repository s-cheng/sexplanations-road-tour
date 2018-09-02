const youtubeBtns = document.querySelectorAll('.link-youtube');

youtubeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.location = 'https://youtube.com/user/sexplanations';
    });
});
