(function () {
    var $pane = $(".pane");
    var $slider = $pane.find(".slider");
    var $color = $pane.find(".color");
    var isSliding = false;

    var sliderPosition = $slider.position().left;
    $color.width(sliderPosition);

    var sliderWidth = $slider.width();

    $slider
        .on("mousedown", function () {
            isSliding = true;
        })
        .on("mouseup", function () {
            isSliding = false;
        });

    function getPosition(clientX, offsetLeft, width) {
        var xPosition = clientX - offsetLeft;
        if (xPosition >= width - sliderWidth) {
            xPosition = width - sliderWidth;
        }
        return xPosition + "px";
    }
    $pane
        .on("mousemove", function (event) {
            var width = $(this).width();
            console.log(width);
            var position = getPosition(event.clientX, this.offsetLeft, width);
            if (isSliding) {
                $slider.css({ left: position });
                $color.width(position);
            }
        })
        .on("mouseleave", function () {
            isSliding = false;
        });
})();
