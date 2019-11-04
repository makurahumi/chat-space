$(function() {
  
  var search_list = $("#user-search-result")
  
  function appendUser(user) {
    let html = `
              <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name"${user.name}">追加</div>
              </div>
              `;
    search_list.append(html);
  }

  function appendNoUser(){
    let html = `
              <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">ユーザーが見つかりません</p>
              </div>
              `;
    search_list.append(html);
  }

  function addDeleteUser(name, id){
    let html = `
              <div class="chat-group-user">
                <input name="group[user_ids][]" type="hidden value="#{user.id}">`
  }

  $("#user-search-field").on("keyup",function() {
    let input = $("#user-search-field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      search_list.empty();

      if (users.length !== 0) {
        users.forEach(function(user) {
          appendUser(user);
        });
      }
      else{
        appendNoUser();
      }
    })
    .fail(function() {
      alert("通信エラーです。ユーザーが表示できません");
    });
  });
});

$(document).on('click', ".chat-group-user__btn--add", function(){

});
