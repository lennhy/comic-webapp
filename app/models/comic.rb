class Comic < ApplicationRecord
  has_many :users, through: :comic_users
  has_many :genres, through: :comic_genres
  has_many :comic_users
  has_many :comic_genres
  belongs_to :region
  has_many :ratings

  # accepts_nested_attributes_for :genres, :reject_if => lambda { |c| c[:name].blank? }
  
  validates :title, :description, :issue, :volume, :page_count, :issue_date, :region_id,  :users, presence: true
  validates_inclusion_of :graphic_novel, :in => [true, false]
end
