class ComicsController < ApplicationController

  def index
    comics = Comic.find(params[:id])
    render json: comics
  end

  def new
      comic = Comic.new
      render json: comic
  end

  def create
      comic = Comic.new(comic_params)
      if comic.save
        render json: comic
      else
        render json: {errors: comic.errors.full_messages}, status: 402
      end
  end

  def show
      comic = Comic.find(params[:id])
      render json: comic
  end

  def update
      comic = Comic.find(params[:id])
      if comic.update(comic_params)
        render json: comic
      else
        render json: {errors: comic.errors.full_messages}, status: 402
      end
  end

  private
    def comic_params
      params.require(:comic).permit(:id, :title, :description, :issue, :volume, :page_count, :issue_date, :graphic_novel)
    end
end
