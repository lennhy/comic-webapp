class Genre < ApplicationRecord
  has_many :comics, through: :comic_genre
  has_many :comic_genres
end
