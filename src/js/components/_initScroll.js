import PerfectScrollbar from 'perfect-scrollbar';
// link - https://github.com/utatti/perfect-scrollbar

const container = document.querySelectorAll('.menu__wrapper');
container.forEach(c => new PerfectScrollbar(c));
