nicksFlicks.directive("invert", function() {
    return function (scope, element) {
        element.bind("click", function() {
            element.parent().parent().parent().parent().toggleClass("invert");
        });
    }
});
