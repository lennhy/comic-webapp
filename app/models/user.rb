class User < ApplicationRecord
  has_many :comics, through: :comic_users
  has_many :comic_users
  has_many :ratings

  has_attached_file :avatar,
   :default_url=> "/images/:style/missing.png",
   :default_style => :medium,
   :styles => {
     large: "1000x1000>",
     medium: "300x300>",
     thumb: "100x100#"
     }



  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

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
