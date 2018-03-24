class PageAttachment < ApplicationRecord
  mount_uploader :page, PageUploader
  belongs_to :comic
  has_one :page
end
