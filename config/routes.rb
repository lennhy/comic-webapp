Rails.application.routes.draw do
  root 'application#index'
  devise_for :users

  resources :comics [:index, :show, :new, :create, :update, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
