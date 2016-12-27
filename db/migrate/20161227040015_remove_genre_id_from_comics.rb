class RemoveGenreIdFromComics < ActiveRecord::Migration[5.0]
  def change
    remove_column :comics, :genre_id, :integer
  end
end
