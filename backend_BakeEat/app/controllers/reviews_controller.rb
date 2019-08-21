class ReviewsController < ApplicationController
  
  def index
    render json: Review.all
  end

  def show
    reviews = Review.all.select do |review|
      review.recipe_id == params[:recipe_id].to_i
    end
    render json: reviews
  end

  def create
    new_review = Review.create(review_params)
    render json: new_review
  end

  # def destroy
  #   review = Review.find(params[:id])
  #   review.destroy
  #   render json: review
  # end

  private

  def review_params
    params.require(:review).permit(:content, :recipe_id)
  end

end
