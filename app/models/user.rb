class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :validatable # to enable devise authentication

  after_initialize :set_default_user_role

  enum :role=> [:reader, :publisher ]

  def set_default_user_role
    self.role  ||= 0  # --will set the default user to reader only if it's nil
  end

end
