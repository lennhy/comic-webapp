class UsersController < ApplicationController

  def show
    user = User.find(params[:id])
    render json: user
  end

  def roles
    current_user.update_user_role(params[:user][:role], current_user)
    if current_user.role == "publisher"
      render json: user
    else
      render json: {errors: comic.errors.full_messages}, status: 402
    end
  end

end
