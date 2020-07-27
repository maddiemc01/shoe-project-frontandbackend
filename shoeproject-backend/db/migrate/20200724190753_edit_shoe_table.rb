class EditShoeTable < ActiveRecord::Migration[6.0]
  def change
    remove_column :shoes, :open_toe
    add_column :shoes, :name, :string
  end
end
