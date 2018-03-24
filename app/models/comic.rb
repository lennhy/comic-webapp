class Comic < ApplicationRecord
  # mount_uploader :page, PageUploader
  mount_uploader :cover, CoverUploader
  has_many :page_attachments
  accepts_nested_attributes_for :page_attachments

  has_many :users, through: :comic_users
  has_many :genres, through: :comic_genres
  has_many :comic_users
  has_many :comic_genres
  has_many :ratings
  belongs_to :region

  def page_attachments_attributes(page)
    page_attachments_attributes.values.each do |page|
      page = PageAttachment.find_or_create_by(page)
      self.page_attachments << page
    end
  end
  # has_attached_file :cover, :styles => {large: "1000x1000>", medium: "300x300>", thumb: "150x150#" },
  #                           :default_style => :thumb, :default_url=> "/images/:style/cover.png"

  # validates_attachment_content_type :cover, content_type: /\Aimage\/.*\z/

  # validates :users, :title, :description, :issue, :volume, :page_count, :issue_date, :region_id,  presence: true
  # validates_inclusion_of :graphic_novel, :in => [true, false]


   # def pages_attributes(pages_attributes)
   #    pages_attributes.each do |image|
   #      if image.blank?
   #
   #      else
   #        new_page = Page.new
   #        new_page.image  = decode_base64(image) # save resource and render response ...
   #        self.pages << new_page
   #      end
   #    end
   #  end


end
