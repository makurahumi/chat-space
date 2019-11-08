json.array! @comments do |comment|
  json.comment   comment.comment
  json.image     comment.image
  json.user_name comment.user.name
  json.time      comment.created_at
  json.id        comment.id
end