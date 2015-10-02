nicksFlicks.factory('ReviewsFactory', function ReviewsFactory(){
    var factory = {};
    factory.reviews =  [{ title: "Batman", content: "great movie", id: 1 }, { title: "Catwoman", content: "terrible movie", id: 2 }];

    factory.addReview = function() {
        factory.reviews.push({ title: factory.reviewTitle, content: factory.reviewContent, id: factory.reviews.length + 1});
        factory.reviewTitle = null;
        factory.reviewText = null;
        console.log(factory.reviews);
    };

    return factory;
});
