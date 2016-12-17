class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action  :store_current_location, :unless => :devise_controller?

  before_action :authenticate_user!, only: [:show, :new, :create]

  private

  # devise store the current location so we can redirect to it after loggin in or out.
  def store_current_location
    store_location_for(:user, request.url)
  end

  # Overwriting the sign_out redirect path method
  def after_sign_out_path_for(resource_or_scope)
    new_user_session_path
  end

end
