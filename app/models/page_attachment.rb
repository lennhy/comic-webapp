class PageAttachment < ApplicationRecord
  mount_uploader :page, PageUploader
  belongs_to :comic
  has_one :page
  validates_uniqueness_of :page
end
