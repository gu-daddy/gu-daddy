function Gu(ratio, imageurl){
    this.ratio = ratio;
    this.imageurl = imageurl;
}

var getGu = {
    init: function(myGu){
        this.myGu = myGu;
    },

    horizontal: function(){
        return this.myGu.filter(function(myGu){
            return myGu.ratio === "horizontal";
        });
    },

    vertical: function(){
        return this.myGu.filter(function(myGu){
            return myGu.ratio === "vertical";
        });
    },

    square: function (){
        return this.myGu.filter(function(myGu){
            return myGu.ratio === "square";
        });
    }
};

function Randomize(images){
    return Math.floor(Math.random() * images.length)
}

var myGu = [
    new Gu("", "https://gu-daddy.github.io/gu-daddy/images/gu01.jpg")
]

(function (document) {

    getGu.init(myGu);
    var images = document.getElementsByTagName('img'), length = images.length

    for (var i = 0; i < length; i++) {
        var ratio = imageRatio(images[i]);
        var number = Randomize(getGu[ratio]());
        var img = getGu[ratio]()[number];
        images[i].src = img.imageurl
    }

})(document);
