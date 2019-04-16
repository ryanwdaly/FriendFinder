$(document).ready(function(){
    $('select').formSelect();

    $("#survey-btn").on("click", function(event) {
        event.preventDefault();

        $("#q1 input " + 1).on("change") {
            alert("hello")
        }


        var newUser = {
            name: $("#name").val().trim(), 
            photo: $("#photo").val().trim(), 
            scores: [
                $("#question1").val(), 
                $("#question2").val(), 
                $("#question3").val(), 
                $("#question4").val(), 
                $("#question5").val(), 
                $("#question6").val(), 
                $("#question7").val(), 
                $("#question8").val(), 
                $("#question9").val(), 
                $("#question10").val() 
            ]
        };




        var currentURL = window.location.origin;
        $.post("/api/friends", newUser).done( function (data) {
            console.log(data.name)
            $("#bestFriend").text(data.name);
            $("#bestFriendPhoto").attr("src", data.photo);
            $("#bestFriendModal").modal("toggle");
        });
    });

});
