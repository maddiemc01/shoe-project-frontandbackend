class ChangeColumnInShoeTable < ActiveRecord::Migration[6.0]
  def change
    remove_column :shoes, :size
    remove_column :shoes, :heel_height
    add_column :shoes, :size, :string
    add_column :shoes, :heel_height, :string
  end
end
