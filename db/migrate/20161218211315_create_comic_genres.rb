class CreateComicGenres < ActiveRecord::Migration[5.0]
  def change
    create_table :comic_genres do |t|
      t.integer :comic_id
      t.integer :genre_id
      
      t.timestamps
    end
  end
end
