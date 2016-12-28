class User < ApplicationRecord
  has_many :ratings
  has_many :comics, through: :comic_users
  has_many :comic_users
  has_many :comics, through: :ratings, foreign_key: :comic_id
  # bingo


  devise :database_authenticatable, :registerable, :validatable # to enable devise authentication

  after_initialize :set_default_user_role

  enum :role=> [:reader, :publisher ]

  def update_user_role(params, user)
    user.role = params
    user.save

  end

  def set_default_user_role
    self.role  ||= 0  # --will set the default user to reader only if it's nil
  end


end
