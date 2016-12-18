class CreateComicUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :comic_users do |t|
      t.integer :comic_id
      t.integer :user_id

      t.timestamps
    end
  end
end
