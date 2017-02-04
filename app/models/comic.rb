class Comic < ApplicationRecord
  has_many :users, through: :comic_users
  has_many :genres, through: :comic_genres
  has_many :comic_users
  has_many :comic_genres
  has_many :ratings
  has_many :pages
  belongs_to :region

  has_attached_file :cover, :styles => {large: "1000x1000>", medium: "300x300>", thumb: "150x150#" },
                            :default_style => :thumb, :default_url=> "/images/:style/cover.png"

  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\z/

  validates :users, :title, :description, :issue, :volume, :page_count, :issue_date, :region_id,  presence: true
  validates_inclusion_of :graphic_novel, :in => [true, false]


   def pages_attributes(pages_attributes)
      pages_attributes.each do |image|
        if image.blank?

        else
          new_page = Page.new
          new_page.image  = decode_base64(image) # save resource and render response ...
          self.pages << new_page
        end
      end
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
