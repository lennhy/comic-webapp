class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :role, :ratings, :comics, :avatar
  has_many :ratings, serializer: RatingSerializer
  has_many :comics, serializer: ComicSerializer

end
