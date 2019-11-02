$(function(){
  function buildHTML(comment) {
    var text = comment.comment ? `${comment.comment}` : "";
    var img = comment.image ? `<img class=comment__text--image src=${comment.image}>` : "";
    var html = `<div class="comments-space data-comment_id="${comment.id}">
                  <div class="comments-space__detail">
                    <p class="comments-space__detail--menber-name">
                      ${comment.user_name}
                    </p>
                    <p class="comments-space__detail--date">
                      ${comment.time}
                    </p>
                  </div>
                  <div class="comments__text">
                    <p class="comments__text--content">
                      ${text}
                    </p>
                      ${img}
                  </div>
                </div>`
    return html;
  }

  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.comment').append(html);
      $('#comment_comment').val('');
    })
    .fail(function(data){
      alert("エラーが発生したためメッセージは送信できませんでした")
    })
  })
});