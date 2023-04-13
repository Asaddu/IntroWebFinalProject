function createComment(displayName, commentText) {
    let newComment = $('<div>').addClass('comment');
    let icon = $('<img>').attr('src', 'icon.png').addClass('commentIcon');
    let name = $('<p>').text(displayName).addClass('displayName');
    let commentContent = $('<div>').addClass('commentContent');
    let commentTextElement = $('<p>').text(commentText);
    let editBtn = $('<button>').text('Edit');
    let deleteBtn = $('<button>').text('Delete');
    let editArea = $('<div>').addClass('editArea').hide();

    let editInput = $('<input>').attr('type', 'text').addClass('editInput').val(commentText);
    let editSubmitBtn = $('<button>').text('Submit');
    editArea.append(editInput, editSubmitBtn);

    let commentHeader = $('<div>').addClass('commentHeader');
    let commentNameActions = $('<div>').addClass('commentNameActions');
    let commentActions = $('<div>').addClass('commentActions');
    let commentDetails = $('<div>').addClass('commentDetails');

    commentHeader.append(icon, commentDetails);
    commentNameActions.append(name, commentActions);
    commentContent.append(commentTextElement);
    commentActions.append(editBtn, deleteBtn);
    commentDetails.append(commentNameActions, commentContent, editArea);

    newComment.append(commentHeader);
    $('.commentsSection').prepend(newComment);

    deleteBtn.on('click', function () {
        newComment.remove();
    });

    editBtn.on('click', function () {
        editArea.toggle();
    });

    editSubmitBtn.on('click', function () {
        let updatedText = editInput.val();
        if (updatedText) {
            commentTextElement.text(updatedText);
            editArea.hide();
        }
    });
}

$('#submitComment').on('click', function () {
    let displayName = $('#inputDisplayName').val();
    let commentText = $('#inputComment').val();

    if (displayName && commentText) {
        createComment(displayName, commentText);
        $('#inputDisplayName').val('');
        $('#inputComment').val('');
    }
});
