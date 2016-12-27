class Rating < ApplicationRecord
  belongs_to :comic
  belongs_to :user

  validates_uniqueness_of :comic, scope: :user_id

end
