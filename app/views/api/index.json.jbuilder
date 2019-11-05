json.array! @comments do |comment|
  json.id        comment.id
  json.comment   comment.comment
  json.image     comment.image
  json.user_name comment.user.name
  json.time      comment.created_at
end