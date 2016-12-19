class Genre < ApplicationRecord
  has_many :comics, through: :comic_genres
  has_many :comic_genres
end
