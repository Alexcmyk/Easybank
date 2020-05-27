const btnHambuger = document.querySelector('#btnHamburger');

btnHambuger.addEventListener('click', function () {
    console.log('ClickHamburger');

    if (btnHambuger.classList.contains('open')) {
        btnHambuger.classList.remove('open');
    } else {
        btnHambuger.classList.add('open');
    }
})