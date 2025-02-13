class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t. string :name
      t.integer :category_id
      t.string :ingredients
      t.string :procedure
      t.string :picture

      t.timestamps
    end
  end
end
