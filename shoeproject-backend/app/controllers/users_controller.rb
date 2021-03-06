require "pry"
class UsersController < ApplicationController
  def index
    users = User.all
    render json: users.to_json
    # include: { :shoes
    # }
  end

  def create
    # make a new user card
    user = User.create(user_params)
    render json: user.to_json
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user.to_json
  end

private

  def user_params
    params.require(:user).permit(:name, :image_url)
  end
end
