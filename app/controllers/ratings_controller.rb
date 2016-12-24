class RatingsController < ApplicationController

  def create
    @rating = rating.new(rating_params)
    if @rating.save
        render json: @rating, status: 201, notice:"You have successfully rated this comic!"
    else
        render json: @rating, status: 200, notice: "You have already rated this comic!"
    end
  end

  private

    def rating_params
      params.require(:rating).permit(
      :stars,
      :comic_id,
      :user_id
      )
    end
end
