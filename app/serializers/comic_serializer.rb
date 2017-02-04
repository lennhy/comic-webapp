class ComicSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :issue, :volume, :page_count, :issue_date, :graphic_novel, :region,  :users,  :genres, :created_at, :pages
  has_many :users, serializer: UserSerializer
  has_many :genres, serializer: GenreSerializer
  has_many :ratings, serializer: RatingSerializer
  has_many :pages, serializer: PageSerializer

  has_one :region
end
