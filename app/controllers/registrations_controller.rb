# class RegistrationsController < Devise::RegistrationsController
#
#   def new
#   end
#
#   def create
#   end
#
#   def cancel
#   end
#
#   def show
#     user = User.find(params[:id])
#     render '/'
#   end
#
#   def edit
#   end
#
#   def update
#   end
#
#   def destroy
#   end
#
#   def roles
#     current_user.update_user_role(params[:user][:role], current_user)
#     if current_user.role == "publisher"
#       respond_to :html, :json
#     else
#       respond_to :html, :json, {errors: comic.errors.full_messages}, status: 402
#     end
#   end

end
# //                     root GET    /                         application#index
# //         new_user_session GET    /users/sign_in(.:format)  devise/sessions#new
# //             user_session POST   /users/sign_in(.:format)  devise/sessions#create
# //     destroy_user_session DELETE /users/sign_out(.:format) devise/sessions#destroy
# // cancel_user_registration GET    /users/cancel(.:format)   devise/registrations#cancel
# //        user_registration POST   /users(.:format)          devise/registrations#create
# //    new_user_registration GET    /users/sign_up(.:format)  devise/registrations#new
# //   edit_user_registration GET    /users/edit(.:format)     devise/registrations#edit
# //                          PATCH  /users(.:format)          devise/registrations#update
