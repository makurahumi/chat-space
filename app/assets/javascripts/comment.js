$(function(){
  function buildHTML(comment) {
    var text = comment.comment ? `${comment.comment}` : "";
    var img = (comment.image.url) ? `<img class="comment__text--image" src=${comment.image.url}>` : "";
    var html = `<div class="comments-space" data-comment_id="${comment.id}">
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
      $('.main-comment').append(html);
      $('.main-comment').animate({scrollTop: $('.main-comment')[0].scrollHeight});
      $("input").attr('disabled',false);
      $('form')[0].reset();
    })
    .fail(function(data){
      alert("コメント送信に失敗しました");
    })
  });

  let reloadComments = function() {
    let last_comment_id = $('.comments-space:last').data("comment_id");
    let group_id = $(".main-comment").data("group_id");
    $.ajax({
      url: `/groups/${group_id}/api/comments`,
      type: "get",
      dataType: "json",
      data: {last_id: last_comment_id}
    })

    .done(function(comments){
      let insertHTML = '';
        comments.forEach(function(comment){
        insertHTML = buildHTML(comment);
        $('.main-comment').append(insertHTML);
        $('.main-comment').animate({scrollTop: $('.main-comment')[0].scrollHeight});
      })
    })
    .fail(function(){
      alert("更新に失敗しました");
    });
 };
  if ($('.main-comment').length) {
    autoReload = setInterval(reloadComments, 5000);
  } else {
    clearInterval(autoReload);
  }
});