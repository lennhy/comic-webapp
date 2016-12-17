class CreateComics < ActiveRecord::Migration[5.0]
  def change
    create_table :comics do |t|
      t.string :title
      t.description :text
      t.issue :integer
      t.volume :integer
      t.page_count :integer
      t.issue_date :date

      t.timestamps
    end
  end
end
