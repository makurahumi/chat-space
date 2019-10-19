Rails.application.routes.draw do
  devise_for :users
  root 'comments#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :comments, only: [:index]
  end
end
