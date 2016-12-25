class RatingsController < ApplicationController

  def create
    @rating = rating.new(rating_params)
    @rating.user_id = current_user.id
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
      :comic_id
      )
    end
end
