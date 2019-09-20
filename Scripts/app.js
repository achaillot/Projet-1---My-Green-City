/////////__début script afficher/cacher une sous-liste__//////////

// Show an element
var show = function (elem) {
    elem.classList.add('is-visible');
};

// Hide an element
var hide = function (elem) {
    elem.classList.remove('is-visible');
};

// Toggle element visibility
var toggle = function (elem) {
    elem.classList.toggle('is-visible');
};

// Listen for click events
document.addEventListener('click', function (event) {

    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle')) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    // Toggle the content
    toggle(content);

}, false);
/////////__fin script afficher/cacher une sous-liste__//////////


/////////__début script modifier le sens du triangle devant les listes__//////////

function removeClass_1() {
    let classUl = document.getElementById('collect_1');
    if (classUl == null) {
        document.getElementById('collect_1_on').id = "collect_1";
    }
    else {
        document.getElementById('collect_1').id = "collect_1_on";
    }

}
function removeClass_2() {
    let classUl = document.getElementById('collect_2');
    if (classUl == null) {
        document.getElementById('collect_2_on').id = "collect_2";
    }
    else {
        document.getElementById('collect_2').id = "collect_2_on";
    }

}
function removeClass_3() {
    let classUl = document.getElementById('collect_3');
    if (classUl == null) {
        document.getElementById('collect_3_on').id = "collect_3";
    }
    else {
        document.getElementById('collect_3').id = "collect_3_on";
    }

}
/////////__fin script modifier le sens du triangle devant les listes__//////////
