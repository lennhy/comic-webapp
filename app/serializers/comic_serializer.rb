class ComicSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :issue, :volume, :page_count, :issue_date, :graphic_novel
end
# t.string :title
# t.text :description
# t.integer :issue
# t.integer :volume
# t.integer :page_count
# t.date :issue_date
# t.boolean :graphic_novel, :default=> false
