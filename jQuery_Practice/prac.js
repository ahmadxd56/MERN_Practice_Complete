$(function () {
    //Add Button
    $(".addButton").click(handleBtnClick);
    //Hide Button
    $(".hideButton").click(function () { $(".todos").hide(); });
    //Show Button
    $(".showButton").click(function () { $(".todos").show(); });
    //Toggle
    $(".toggleButton").click(function () { $(".todos").toggle(); });
    //Fade In
    $(".fadeIn").click(function () { $(".todos").fadeIn(); });
    //Animate
    $(".anim").click(function () {
        $("input").animate({ height: 100 }, "slow");
        $("input").animate({ width: 100 }, "slow");
        $("input").animate({ height: 100 }, "slow");
        $("input").animate({ width: 100 }, "slow");
    });
    //Fade Out on Click
    $(".todos").on("click", "li", removeMe);
});

function handleBtnClick() {
    var newTodo = $(".newTodo").val();
    if (!newTodo) {
        $(".newTodo").addClass("error");
        return;
    }
    $(".newTodo").removeClass("error");
    $(".newTodo").val("");
    $(".todos").append("<li>" + newTodo + "</li>");
    $(".newTodo").addClass("good");
}

function removeMe() {
    $(this)
        // .remove();
        //Or
        .fadeOut();
}