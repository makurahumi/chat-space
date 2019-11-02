json.id          @comment.id
json.comment     @comment.comment
json.image       @comment.image.url
json.user_name   @comment.user.name
json.time  @comment.created_at.strftime("%Y/%m/%d %H:%M")
