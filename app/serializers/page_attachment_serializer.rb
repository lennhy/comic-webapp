class PageAttachmentSerializer < ActiveModel::Serializer
  attributes :id, :page
  has_one :comic, serializer: ComicSerializer

end
