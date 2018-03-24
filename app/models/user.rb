class User < ApplicationRecord
  mount_uploader :avatar, AvatarUploader
  has_many :comics, through: :comic_users
  has_many :comic_users
  has_many :ratings

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
