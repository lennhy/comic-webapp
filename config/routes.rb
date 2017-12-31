  Rails.application.routes.draw do

  root 'application#index'

  devise_for :users

  patch '/users/:id/edit' => 'users#edit'

  # json serialzer apis
  get '/users/:id', to: 'users#show'
  get '/users', to: 'users#index'

  post '/' => 'users#roles'

  get '/ratings' => 'ratings#index'
  post '/ratings' => 'ratings#create'

  get '/regions' => 'regions#index'
  get '/genres' => 'genres#index'

  # add reader to comic
  patch '/comics/:id', to: 'comics#add'

  resources :comics, only: [:index, :show, :new, :create, :update, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
