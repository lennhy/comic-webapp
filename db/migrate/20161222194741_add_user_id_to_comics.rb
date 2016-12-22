class AddUserIdToComics < ActiveRecord::Migration[5.0]
  def change
    add_column :comics, :user_id, :integer
  end
end
