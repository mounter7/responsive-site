// Loader
function loader() {
    window.addEventListener('load', function () {
        document.querySelector('.loader').classList.add('hidden')
    })
}

$(document).ready(function () {

    // load pages
    //$('header').load('partials/header.html')

    $('main').load('/pages/home.html')
    $('title').text(`Home - AppName`)

    $('.nav-links a').click(function () {
        let clickedLink = $(this).attr('id')
        $('main').load(`/pages/${clickedLink}.html`)
        $('title').text(`${clickedLink} - AppName`)
    })

    // Nav menu
    $('.menu-icon').click(() => {
        document.querySelector('.nav-links').classList.toggle('active')
    })

    // Theme Handling
    let theme = localStorage.getItem('theme')
    document.querySelector('body').classList.add(theme)

    if (!theme) {
        $('#theme').text('Dark theme')
    }
    if (theme) {
        $('#theme').text('Light theme')
    }

    $('#theme').click(() => {
        window.location.reload(true)
        if (!theme) {
            localStorage.setItem('theme', 'dark')
            $('body').addClass('dark')
        }
        else {
            localStorage.removeItem('theme')
            $('body').removeClass('dark')
        }
    })
})