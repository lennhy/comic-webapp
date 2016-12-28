class RatingSerializer < ActiveModel::Serializer
  attributes :id, :stars
  has_many :comics, serializer: ComicSerializer
end
