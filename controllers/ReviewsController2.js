nicksFlicks.controller('ReviewsCtrl2', function ReviewsCtrl2($scope, $stateParams, UtilitiesFactory) {

$scope.reviews = [{ title: "Batman", content: "great movie", id: 1 }, { title: "Catwoman", content: "terrible movie", id: 2 }];
$scope.review = UtilitiesFactory.findById($scope.reviews, $stateParams.reviewId);

$scope.addReview = function() {
  $scope.reviews.push({ title: $scope.reviewTitle, content: $scope.reviewContent, id: $scope.reviews.length + 1 });
  console.log($scope.reviews)
  $scope.reviewTitle = null;
  $scope.reviewContent = null;
};

$scope.check = function(){
    console.log($scope.reviews);
}
});
