const $menu = document.querySelector('.menu');
const $btnMenu_open = document.querySelector('.btnMenu_open');
const $btnMenu_close = document.querySelector('.btnMenu_close');
const $time1 = document.querySelector('.time1');
const $time2 = document.querySelector('.time2');
const $userInputTime = document.querySelector('.userInput-time');

$btnMenu_open.addEventListener('click', () => {
    $menu.classList.add('menu_open');
});

$btnMenu_close.addEventListener('click', () => {
    $menu.classList.remove('menu_open');
})


$time1.addEventListener('click', () => {
    $userInputTime.classList.add('remove');
})

$time2.addEventListener('click', () => {
    $userInputTime.classList.remove('remove');
})