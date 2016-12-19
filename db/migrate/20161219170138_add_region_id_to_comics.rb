class AddRegionIdToComics < ActiveRecord::Migration[5.0]
  def change
    add_column :comics, :region_id, :integer

  end
end
