class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def profile_pic
    current_user.update(user_params)
  end

  def show
    @user = User.find(params[:id])
     respond_to do |format|
       format.html { render :show }
       format.json { render json: @user}
     end
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

  private
raise params
    def user_params
      params.require(:user).permit(:avatar);
    end

end
