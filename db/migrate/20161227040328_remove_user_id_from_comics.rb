class RemoveUserIdFromComics < ActiveRecord::Migration[5.0]
  def change
    remove_column :comics, :user_id, :integer
  end
end
