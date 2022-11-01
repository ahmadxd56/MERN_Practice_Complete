$(function(){
    loadRecipies();
});
function loadRecipies()
{
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes",
        method:"GET",
        success: function(response){
            console.log(response);
            var recipes = $("#recipies");
            recipes.empty();
            for (var i=0;i<response.length;i++)
            {
                var rec = response[i];
                recipes.append(`<div class="apiReci"><h3>${rec.title}</h3><p><button class="btn btn-danger btn-sm btndl">Delete</button>${rec.body}</p></div>`);
            }
        }
    });
}