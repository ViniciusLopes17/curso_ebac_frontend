$(document).ready(function(){
    const addToDoButton = $('#addbtn');
    const toDoContainer = $('#toDoContainer');
    const inputField = $('#input');

    $(addToDoButton).click(function(){
        const paragraph = $('<p></p>').appendTo('.to-dos');
        $(paragraph).addClass('paragraph-styling');
        $(paragraph).text($('#input').val());
        $(toDoContainer).append($(paragraph));

        $(inputField).val("");

        $(paragraph).click(function(){
            $(paragraph).css('text-decoration', 'line-through')
        })
        $(paragraph).dblclick(function(){
            $(toDoContainer).remove(paragraph);
        })
    })

})