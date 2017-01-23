class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :role, :avatar
  has_many :ratings, serializer: RatingSerializer
  has_many :comics, serializer: ComicSerializer

end
