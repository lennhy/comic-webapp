class PageAttachmentSerializer < ActiveModel::Serializer
  attributes :id :comic_id, :page
  has_one :comic, serializer: ComicSerializer

end
