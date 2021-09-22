let filters = [];
showCards();

function filterListings(c) {
        if (filters.indexOf(c) == -1) filters.push(c);
        filterCards(filters);
        displayFilters(filters);
}

function filterCards () {
    var cards, i;
    cards = document.getElementsByClassName("card");
    hideCards();
    for (i = 0; i < cards.length; i++) {
        if (filters.every(category => cards[i].className.includes(category))) addClass(cards[i], "show");
    }
}

function displayFilters () {
    var window, filterButtons, i, filter;
    window = document.getElementById('filter-window');
    filterButtons = document.getElementsByClassName("filter");
    addClass(window, 'show-filters');
    for (i = 0; i < filterButtons.length; i++) {
        removeClass(filterButtons[i], "show-filters");
        for (filter of filters) {
            if (filterButtons[i].className.indexOf(filter) > -1) addClass(filterButtons[i], "show-filters");}
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

function removeFilter (filterToRemove) {
    filters = filters.filter(x => x !== filterToRemove);
    showCards();
    filterCards(filters);
    displayFilters(filters);
    if (filters.length === 0) {
        clearFilters();
    }
}

function clearFilters () {
    filters = [];
    showCards();
    hideFilters();
}

function showCards () {
    var i, cards;
    cards = document.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        addClass(cards[i], "show");
    }
}

function hideCards () {
    var i, cards;
    cards = document.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        removeClass(cards[i], "show");
    }
}

function hideFilters () {
    var i, filterButtons, window;
    filterButtons = document.getElementsByClassName("filter");
    window = document.getElementById('filter-window');
    removeClass(window,"show-filters")
    for (i = 0; i < filterButtons.length; i++) {
        removeClass(filterButtons[i], "show-filters");
    }
}
