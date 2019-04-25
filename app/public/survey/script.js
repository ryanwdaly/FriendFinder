$(document).ready(function(){
    $('select').formSelect();

    $("#survey-btn").on("click", function(event) {
        event.preventDefault();
        
        let newUser = {
            name: $("#name").val().trim(), 
            photo: $("#photo").val().trim(), 
            scores: []
        };
        newUser.scores[0] = null;
        console.log("photo: " + newUser.photo);
        
        getValue(newUser);
        // location.href = "../result";
        console.log("name: " + newUser.name);
      
        $.post("/api/friends", newUser).done( function (data) {
            console.log(data.name)
            $(".modal").modal();
            $("#bestFriend").text(data.name);
            $("#bestFriendPhoto").attr("src", data.photo);
            $(".modal").modal("open")
        });
    });
    function getValue(newUser) {
        for(let i = 1; i <= 10; i++) {
            newUser.scores[i] = $('input[name=group' + i + ']:checked', '#survey').val();
            console.log('question' + i + ': ' + $('input[name=group' + i + ']:checked', '#survey').val()); 
        }
    }

});

