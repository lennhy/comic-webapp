class ComicsController < ApplicationController

  def index
    render json: Comic.all
  end

  def new
      comic = Comic.new
      render json: comic
  end

  def create
      comic = Comic.new(comic_params)
      comic.user_id = current_user.id
      if comic.save
        render json: { status: 'ok'}
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
        render json: {errors: comic.errors.full_messages}, status: :unprocessable_entity
      end
  end

  private
    def comic_params
      params.require(:comic).permit(:title, :description, :issue, :volume, :page_count, :issue_date, :graphic_novel, :region_id, :genre_ids=>[])
    end
end
