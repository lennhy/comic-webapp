class RatingSerializer < ActiveModel::Serializer
  attributes :id, :stars
  has_one :comic, serializer: ComicSerializer
end
