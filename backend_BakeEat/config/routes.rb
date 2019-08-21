Rails.application.routes.draw do
  get "/recipes", to: "recipes#index"
  get "/recipes/filter/:category", to: "recipes#filter"
  get "/recipes/:id", to: "recipes#show"
  post "/recipes/submit", to: "recipes#create"
  delete "recipes/:id", to: "recipes#destroy"
  
  get "/categories", to: "categories#index"
  
  get "/reviews", to: "reviews#index"
  get "/reviews/:recipe_id", to: "reviews#show"
  post "/reviews/submit", to: "reviews#create"
  delete "reviews/:id", to: "reviews#destroy"
end
