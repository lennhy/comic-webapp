class Page < ApplicationRecord
  belongs_to :comic
  # validates :pages, presence: true

  has_attached_file :illustration, :styles => {large: "1000x1000>", medium: "300x300>", thumb: "150x150#" },
                            :default_style => :thumb, :default_url=> "/images/:style/cover.png"

  validates_attachment_content_type :illustration, content_type: /\Aimage\/.*\z/

end
