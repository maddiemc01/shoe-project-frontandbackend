class ShoesController < ApplicationController
  def index
    shoes = Shoe.where(user_id: params[:user_id])
    render json: shoes.to_json
  end

  def create
    shoe = Shoe.create(shoe_params)
    render json: shoe.to_json
  end

  def destroy
    shoe = Shoe.find(params[:id])
    shoe.destroy
    render json: user.to_json
  end

private

  def shoe_params
    params.require(:shoe).permit(:size, :style, :heel_height, :color, :name, :user_id)
  end
end
