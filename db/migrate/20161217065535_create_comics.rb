class CreateComics < ActiveRecord::Migration[5.0]
  def change
    create_table :comics do |t|
      t.string :title
      t.text :description
      t.integer :issue
      t.integer :volume
      t.integer :page_count
      t.integer :region_id
      # t.integer :cover_id
      t.date :issue_date
      t.boolean :graphic_novel, :default=> false

      t.timestamps
    end
  end
end
