class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def roles
    current_user.update_user_role(params[:user][:role], current_user)
    if current_user.role == "author"
      flash[:notice]= "You are now an #{current_user.role}"
      redirect_to root_path
    else
      flash[:notice]= "You are now a #{current_user.role}"
    end
  end

  def edit
    binding.pry
    user = current_user
    if user.update(user_params)
      render json: user
    end
  end

  private
    def user_params
      params.require(:user).permit(:avatar)
    end
end
