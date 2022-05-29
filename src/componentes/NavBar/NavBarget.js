function NavBarget(element) {
    return document.getElementById(element);
}

let open = NavBarget("navOpen");
let nav = NavBarget("nav");
let close = NavBarget("navClose");

open.addEventListener('click', function () {
    nav.classList.add('nav-open');
})

close.addEventListener('click', function () {
    nav.classList.remove('nav-open');
})

export default NavBarget