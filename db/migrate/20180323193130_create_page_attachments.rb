class CreatePageAttachments < ActiveRecord::Migration[5.0]
  def change
    create_table :page_attachments do |t|
      t.integer :comic_id
      t.string :page

      t.timestamps
    end
  end
end
