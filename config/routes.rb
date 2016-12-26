  Rails.application.routes.draw do
  root 'application#index'

  devise_for :users

  # json serialzer apis
  get '/users/:id', to: 'users#show'

  post '/' => 'users#roles'

  get '/ratings' => 'ratings#index'
  post '/ratings' => 'ratings#create'

  get '/regions' => 'regions#index'
  get '/genres' => 'genres#index'

  resources :comics, only: [:index, :show, :new, :create, :update, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
