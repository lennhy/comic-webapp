class ComicSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :issue, :volume, :page_count, :issue_date, :graphic_novel, :region_id
  has_many :users, serializer: UserSerializer
  has_many :genres
  has_one :region
end
