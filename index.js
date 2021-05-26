(function () {
    var $pane = $(".pane");
    var $slider = $pane.find(".slider");
    var $color = $pane.find(".color");
    var isSliding = false;

    // get the slider left and set the the color width to it... so we will start with having two images and slider in the middle
    var sliderPosition = $slider.position().left;
    $color.width(sliderPosition + "px");

    // get the slider width. It will be used to not allowing the slider jumb out of the pane container
    var sliderWidth = $slider.width();

    $slider
        .on("mousedown", function () {
            isSliding = true;
        })
        .on("mouseup", function () {
            isSliding = false;
        });

    // calculating the x position, so the slider will not be allowed to be dragged out of the box
    function getDraggingPosition(clientX, offsetLeft, width) {
        // getting rid of the offsetLeft
        var xPosition = clientX - offsetLeft;
        if (xPosition >= width - sliderWidth) {
            xPosition = width - sliderWidth;
        }
        return xPosition + "px";
    }
    $pane
        .on("mousemove", function (event) {
            // get the width of the box
            var width = $(this).width();
            console.log(width);
            // store dragging position in a variable
            var draggingPosition = getDraggingPosition(
                event.clientX,
                this.offsetLeft,
                width
            );
            console.log(draggingPosition);
            // if the user is dragging set the slider left and color width to draggingPosition
            if (isSliding) {
                $slider.css({ left: draggingPosition });
                $color.width(draggingPosition);
            }
        })
        .on("mouseleave", function () {
            isSliding = false;
        });
})();
