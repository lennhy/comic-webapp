class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action  :store_current_location, :unless => :devise_controller?

  before_action :authenticate_user!, only: [:new, :create]

  before_action :set_csrf_cookie

  respond_to :json
  
  # Thie part of angular allows CSRF cookies to post delete and update to the database
  # Note: Angular uses the acronym XSRF, but this is synonymous with CSRF.
  def set_csrf_cookie
    cookies['XSRF-TOKEN']=form_authenticity_token if protect_from_forgery?
  end

  # Run all our angular assets
  def index

  end

  protected
    def verified_request?
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end


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
