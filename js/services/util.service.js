'use strict'

// listen for color

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.palette').addEventListener('click', function() {
        document.getElementById('fillColor').click()
    })

    document.getElementById('fillColor').addEventListener('input', function() {
        onChangeFillColor(this.value)
    })

    document.querySelector('.stroke').addEventListener('click', function() {
        document.getElementById('color-line').click()
    })

    document.getElementById('color-line').addEventListener('input', function() {
        onChangeStrokeColor(this.value)
    })
})