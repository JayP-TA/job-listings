filterListings("all");

function filterListings (c) {
    var cards, i;
    cards = document.getElementsByClassName("card");
    if (c == "all") c = "";
    for (i = 0; i < cards.length; i++) {
        removeClass(cards[i], "show");
        if (cards[i].className.indexOf(c) > -1) addClass(cards[i], "show");
    }
}


function addClass (element, name) {
    var i, classes, newClass;
    classes = element.className.split(" ");
    newClass = name.split(" ");
    for (i = 0; i < newClass.length; i++) {
        if (classes.indexOf(newClass[i]) == -1) {
            element.className += " " + newClass[i];
        }
    }
}

function removeClass (element, name) {
    var i, classes, remClass;
    classes = element.className.split(" ");
    remClass = name.split(" ");
    for (i = 0; i < remClass.length; i++) {
        while (classes.indexOf(remClass[i]) > -1) {
            classes.splice(classes.indexOf(remClass[i]), 1);
        }
    }
    element.className = classes.join(" ");
};

function displayFilters (c) {
    var window, filters, i;
    window = document.getElementById('filter-window');
    filters = document.getElementsByClassName("filter");
    addClass(window, 'show-filter-window');
    if (c == "all") c = "";
    for (i = 0; i < filters.length; i++) {
        removeClass(filters[i], "show");
        if (filters[i].className.indexOf(c) > -1) addClass(filters[i], "show");
    }
}

function clearFilters () {
    var window = document.getElementById('filter-window');
    filterListings("all");
    displayFilters('all');
    removeClass(window, 'show-filter-window');
}
