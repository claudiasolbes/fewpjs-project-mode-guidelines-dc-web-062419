class RecipesController < ApplicationController

  def index
    render json: Recipe.all
  end

  def filter
    category_id = Category.find_by(name: params[:category]).id
    category_recipes = Recipe.all.select do |recipe|
      recipe.category_id == category_id
    end
    render json: category_recipes
  end

  def show
    recipe_id = Recipe.find_by(id: params[:id])
    recipes = Recipe.all.select do |recipe|
      recipe_id == recipe.id
    end
    render json: recipe_id
  end

  def create
    new_recipe = Recipe.create(recipe_params)
    render json: new_recipe
  end

  def destroy
    recipe = Recipe.find(params[:id])
    recipe.destroy
    render json: recipe
  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :category_id, :ingredients, :procedure, :picture)
  end

end
