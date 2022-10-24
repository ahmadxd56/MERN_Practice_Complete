// $(function () {
//     $('#load').click(sendAjax);
// });
// function sendAjax() {
//     console.log("Sending AJAX Request");
//     //Sending request here
//     $.get("student.txt", handleResponse);
//     console.log("Request Sent");
// }
// function handleResponse(response) {
//     console.log("Response Received");
//     $("#result").empty();
//     $("#result").append(response);
// }

//Another way to write the same code
$(function () {
    $('#load').click(function () {
        $.get("student.txt", function (response) {
            $("#result").empty();
            $("#result").append(response);
        });
    });
});
