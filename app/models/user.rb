class User < ApplicationRecord
  has_many :comics, through: :comic_users
  has_many :comic_users
  has_many :ratings


  has_attached_file :avatar, :styles => {large: "1000x1000>", medium: "300x300>", thumb: "150x150#" },
                            :default_style => :thumb, :default_url=> "/images/:style/cover.png"

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
  
  def decode_base64(image)
    Rails.logger.info 'decoding base64 file'
    # decode base64 string
    decoded_data = Base64.decode64( image[:base64])
    # create 'file' understandable by Paperclip
    data = StringIO.new(decoded_data)
    data.class_eval do
      attr_accessor :content_type, :original_filename
    end

    # set file properties
    data.content_type = image[:filetype] ##<StringIO:0x007f9be40a1d88>
    data.original_filename = image[:filename]

    # return data to be used as the attachment file (paperclip)
    data ##<StringIO:0x007fc91718b590 @content_type="image/jpeg", @original_filename="lenn.jpg">
  end


end
