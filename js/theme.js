const switchTheme = document.getElementById('switchTheme');

switchTheme.addEventListener('click', function onClick(event) {
    // const header = document.getElementById('header');
    // const footer = document.getElementById('footer');
    // if (header.style.backgroundColor === 'black' && footer.style.backgroundColor === 'black') {
    //     header.style.backgroundColor = 'white';
    //     header.style.color = 'black';
    //     footer.style.backgroundColor = 'white';
    //     footer.style.color = 'black';
    // } else {
    //     header.style.backgroundColor = 'black';
    //     header.style.color = 'white';
    //     footer.style.backgroundColor = 'black';
    //     footer.style.color = 'white';
    // }
    const body = document.getElementById('body');
    const bodyResume = document.getElementById('bodyResume');
    const headline = document.getElementById('headline');
    const bio = document.getElementById('bio');
    const github = document.getElementById('github');
    const twitter = document.getElementById('twitter');
    const linkedin = document.getElementById('linkedin');
    const email = document.getElementById('email');

    if (body.style.backgroundColor === 'rgb(31, 41, 55)') {
        body.style.backgroundColor = 'rgb(249, 250, 251)';
        headline.style.color = 'black';
        bio.style.color = 'black';
        github.style.color = 'black';
        twitter.style.color = 'black';
        linkedin.style.color = 'black';
        email.style.color = 'black';
    } else {
        body.style.backgroundColor = 'rgb(31, 41, 55)';
        headline.style.color = 'rgb(249, 250, 251)';
        bio.style.color = 'rgb(249, 250, 251)';
        github.style.color = 'rgb(249, 250, 251)';
        twitter.style.color = 'rgb(249, 250, 251)';
        linkedin.style.color = 'rgb(249, 250, 251)';
        email.style.color = 'rgb(249, 250, 251)';
    }
    // IN DEVELOPMENT    
    // if (localStorage.switchTheme === 'black' || (!('switchTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('black')
    // } else {
    //     document.documentElement.classList.remove('black')
    // }
});