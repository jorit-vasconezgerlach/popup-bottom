const popup = document.getElementById('popup');
popup.style.height = '100px';

const close = document.querySelector('#popup .close');
const minimizeMaximize = document.querySelector('#popup .minimizeMaximize');

function popupClose() {
    popup.style.display = 'none';
}
function popupMinimizeMaximize() {
    if(popup.style.height!='100px') {
        popup.style.height = '100px';
        minimizeMaximize.innerHTML = '-';
    } else {
        popup.style.height = '20px';
        minimizeMaximize.innerHTML = '+';
    }
}