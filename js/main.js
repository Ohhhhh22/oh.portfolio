

$(document).ready(function(){
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4'],
        autoScrolling: true,
        scrollHorizontally: true, 
        sectionsColor: ['#eeff7e', '#eeff7e', '#eeff7e', '#eeff7e', '#eeff7e', ], //color
        navigation: true, //물방울
        navigationPosition : 'right', //물방울 위치
        navigationTooltips : ['Home', 'About', 'Portfolio', 'Contact'],
        keyboardScrolling: false, //키보드로 이동 막기
    })
})


//포폴 배너
const items = document.querySelectorAll('.gallery-collection li')
const close = document.querySelector('button')
const popUp = document.querySelector('.pop-up')

items.forEach((el, index) => {
    // console(el, index)
    el.addEventListener('mouseenter', ()=>{
        el.querySelector('video').play();
    })
    el.onmouseleave = () => {
        el.querySelector('video').pause();
        el.querySelector('video').currentTime = '0'
    }

    el.addEventListener('click', (e) => {
        let title = el.querySelector('h3').innerText
        let text = el.querySelector('p').innerText
        let videoSrc = e.currentTarget.querySelector('video').getAttribute('src')

        popUp.querySelector('.txt h1').innerText = title
        popUp.querySelector('.txt p').innerText = text
        popUp.querySelector('video').setAttribute('src', videoSrc)
        popUp.classList.add('active')
        popUp.querySelector('video').play()
    })
})

close.onclick = () => {
    popUp.classList.remove('active')
    popUp.querySelector('video').pause();
}
