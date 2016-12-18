class ComicsController < ApplicationController
  def index
  end

  def show
    @comic = Comic.find(params[:id])
      respond_to do |format|
        format.html { render :show }
        format.json { render json: @comic}
      end
  end

end
