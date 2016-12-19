class User < ApplicationRecord
  has_and_belongs_to_many :comics

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
