class ShoesController < ApplicationController
  def index
    shoes = Shoe.all
    render json: shoes.to_json
  end

  def create
    shoe = Shoe.create(shoe_params)
    render json: shoe.to_json
  end

  def destroy
    #deletes a specific shoe under a specific user
  end

private
  def shoe_params
    params.require(:shoe).permit(:size, :style, :heel_height, :color, :open_toe, :user_id)
  end
end