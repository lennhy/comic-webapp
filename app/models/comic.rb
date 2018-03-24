class Comic < ApplicationRecord
  mount_uploader :cover, CoverUploader
  has_many :page_attachments, dependent: :delete_all
  accepts_nested_attributes_for :page_attachments

  has_many :users, through: :comic_users
  has_many :genres, through: :comic_genres
  has_many :comic_users
  has_many :comic_genres
  has_many :ratings
  belongs_to :region


end
