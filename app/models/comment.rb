class Comment < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :comment, presence: true, unless: :image?
  
  mounnt_uploader :image, ImageUploader
end