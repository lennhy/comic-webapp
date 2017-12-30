class AddPagesToComics < ActiveRecord::Migration[5.0]
  def change
    add_column :comics, :pages, :json
  end
end
