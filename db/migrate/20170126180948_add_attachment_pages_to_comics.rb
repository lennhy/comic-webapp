class AddAttachmentPagesToComics < ActiveRecord::Migration
  def self.up
    change_table :comics do |t|
      t.attachment :pages
    end
  end

  def self.down
    remove_attachment :comics, :pages
  end
end
