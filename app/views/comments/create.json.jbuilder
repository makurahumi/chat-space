json.id          @comment.id
json.(@comment, :comment, :image)
json.user_name   @comment.user.name
json.time  @comment.created_at.strftime("%Y/%m/%d %H:%M")
