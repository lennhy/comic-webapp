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
    user = current_user
    # user.avatar = params[:avatar]
    user.avatar = params[:avatar]
    binding.pry
    if user.update(user_params)

      # u.avatar.url # => '/url/to/file.png'
      # u.avatar.current_path # => 'path/to/file.png'
      # u.avatar_identifier # => 'file.png'
      render json: user
    end
  end

  private
    def user_params
      params.require(:user).permit(
        :name,
        :email,
        :avatar=> {}
      )
    end
end
