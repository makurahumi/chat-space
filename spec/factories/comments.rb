FactoryBot.define do
  factory :comment do
    comment {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/spec/fixtures/test.jpg")}
    user
    group
  end
end