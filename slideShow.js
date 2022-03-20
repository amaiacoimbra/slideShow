'use strict'

const images = [
    {'id': '1', 'url':'./img/1.jpg'},
    {'id': '2', 'url':'./img/2.jpg'},
    {'id': '3', 'url':'./img/3.jpg'},
    {'id': '4', 'url':'./img/4.jpg'},
    {'id': '5', 'url':'./img/5.jpg'},
    {'id': '6', 'url':'./img/6.jpg'},
    {'id': '7', 'url':'./img/7.jpg'},
]

const container = document.querySelector('#container-items')

const loadIMAGES = ( images, container ) => {
    images.forEach (image => {
        container.innerHTML += `
            <div class = 'item' >
                <img src = '${image.url}'
            </div>
        `
    })
}

loadImages( images, container)

// 13:44 https://www.youtube.com/watch?v=csNYVAS2ex8&t=11s