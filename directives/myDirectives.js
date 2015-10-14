nicksFlicks.directive("invert", function() {
    return function (scope, element) {
        element.bind("click", function() {
          var body = angular.element(document).find('body');
            body.toggleClass("invert");
        });
    }
});
