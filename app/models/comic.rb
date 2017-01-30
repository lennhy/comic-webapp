class Comic < ApplicationRecord
  has_many :users, through: :comic_users
  has_many :genres, through: :comic_genres
  has_many :comic_users
  has_many :comic_genres
  has_many :ratings
  has_many :pages

  belongs_to :region
  has_many :pages


  validates :users, :title, :description, :issue, :volume, :page_count, :issue_date, :region_id,  presence: true
  validates_inclusion_of :graphic_novel, :in => [true, false]
end
