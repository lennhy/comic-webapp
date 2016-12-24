class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
        t.integer :user_id
        t.integer :comic_id
        t.integer :stars, :default=> 0
    end
  end
end
