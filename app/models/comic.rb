class Comic < ApplicationRecord
  has_many :users, through: :comic_user
  has_many :genres, through: :comic_genre
  has_many :comic_users
  has_many :comic_genres
  belongs_to :region


end
