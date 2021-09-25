function isInputString(evt) {
    const char = String.fromCharCode(evt.which);

    if (!(/[0-9]/.test(char))) {

    } else {
        evt.preventDefault();
    }
}

const formInput = document.getElementById('inputCallMask');
putMask(formInput);

function putMask(el) {
    if(el) {
        const phoneMask = IMask(el, {
            mask: '+{998} 00 000-00-00',
            lazy: false,
            placeholderChar: 'X'
        });
    }
}