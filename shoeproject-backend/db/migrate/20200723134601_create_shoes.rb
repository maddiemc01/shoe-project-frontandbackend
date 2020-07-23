class CreateShoes < ActiveRecord::Migration[6.0]
  def change
    create_table :shoes do |t|
      t.integer :size
      t.string :style
      t.integer :heel_height
      t.string :color
      t.boolean :open_toe
      t.references :user, foreign_key: true
    end
  end
end
