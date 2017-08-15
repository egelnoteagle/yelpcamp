var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Egel's Nest",
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan venenatis dui, sed vulputate turpis. Praesent et ante quis nisi feugiat tempus. Vestibulum vel orci pharetra, ultricies orci eget, facilisis est. Etiam a mauris ut ligula malesuada facilisis in eu enim. Nam laoreet lacinia sem vel laoreet. Quisque rhoncus malesuada nibh nec ultrices. Vivamus consequat lorem vel nisl dapibus, id sollicitudin mauris sagittis. Fusce ut dolor sed nisl porttitor pulvinar. Donec dictum turpis et mauris viverra rutrum. Proin non urna posuere, venenatis nunc id, fermentum sem. Curabitur et libero imperdiet, aliquam sapien in, condimentum est."
    },  
    {
        name: "Schitt's Creek",
        image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan venenatis dui, sed vulputate turpis. Praesent et ante quis nisi feugiat tempus. Vestibulum vel orci pharetra, ultricies orci eget, facilisis est. Etiam a mauris ut ligula malesuada facilisis in eu enim. Nam laoreet lacinia sem vel laoreet. Quisque rhoncus malesuada nibh nec ultrices. Vivamus consequat lorem vel nisl dapibus, id sollicitudin mauris sagittis. Fusce ut dolor sed nisl porttitor pulvinar. Donec dictum turpis et mauris viverra rutrum. Proin non urna posuere, venenatis nunc id, fermentum sem. Curabitur et libero imperdiet, aliquam sapien in, condimentum est."
    },
    {
        name: "Goat's and Shit",
        image: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan venenatis dui, sed vulputate turpis. Praesent et ante quis nisi feugiat tempus. Vestibulum vel orci pharetra, ultricies orci eget, facilisis est. Etiam a mauris ut ligula malesuada facilisis in eu enim. Nam laoreet lacinia sem vel laoreet. Quisque rhoncus malesuada nibh nec ultrices. Vivamus consequat lorem vel nisl dapibus, id sollicitudin mauris sagittis. Fusce ut dolor sed nisl porttitor pulvinar. Donec dictum turpis et mauris viverra rutrum. Proin non urna posuere, venenatis nunc id, fermentum sem. Curabitur et libero imperdiet, aliquam sapien in, condimentum est."
    }
];

function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("campgrounds removed");
            // add campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        // create comments
                        Comment.create(
                            {
                                text: "This place is great",
                                author: "Derek"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }    
                        });
                    }
                });
            });
        }
    });
}

module.exports = seedDB;