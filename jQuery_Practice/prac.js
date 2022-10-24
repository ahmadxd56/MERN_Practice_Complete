$(function () {
    $(".addButton").click(handleBtnClick);
    //Event Binding Alt to Line no.16
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
    // $(".todos li").click(removeMe);
}

function removeMe() {
    $(this)
        // .remove();
        //Or
        .fadeOut();
}