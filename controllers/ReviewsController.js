nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, ReviewsFactory, $stateParams, UtilitiesFactory){
    $scope.reviews = ReviewsFactory.reviews;
    $scope.ReviewsFactory = ReviewsFactory;
    $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId)
});
