class AddAttachmentPublisherToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :publisher
    end
  end

  def self.down
    remove_attachment :users, :publisher
  end
end
