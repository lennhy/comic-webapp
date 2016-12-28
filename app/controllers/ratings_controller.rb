class RatingsController < ApplicationController

  def create
    new_rating = Rating.new(rating_params)
    new_rating.user_id = current_user.id
    old_rating = Rating.find_by(comic_id: params[:comic_id], user_id: current_user.id)

    if old_rating.update(rating_params)
        render json: old_rating, status: 204, notice:"You have successfully updated this comic!"

    else
        new_rating.save
        render json: new_rating, status: 201, notice:"You have successfully rated this comic!"

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
