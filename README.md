# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# DB design

## users table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|mail|string|null: false, unique: true|
|password|string|null: false, unique: true|

### Association
- has_many :groups, through: :users_groups
- has_many :users_groups
- has_many :comments

## users_groups table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groups table
|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false, unique: true|

### Association
- has_many :users, through: :user_groups
- has_many :users_groups
- has_many :comments, through: groups_comments
- has_many :groups_comments

## groups_comments table
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|comment_id|integer|null: false, foreign_key: true|

### Asociation
- belongs_to :group
- belongs_to :comment

## comments table
|Column|Type|Option|
|------|----|------|
|comment|text|null: false|
|image|string||
|user_id|integer|null: false, foreign_key: true|

### Asociation
- has_many :groups, through: groups_comments
- has_many :groups_comments
- belongs_to :user