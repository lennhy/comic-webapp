
class ComicsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json

  def index
    render json: Comic.all
  end

  def new
      comic = Comic.new
      render json: comic
  end

  def create
    comic = Comic.new(comic_params)
    comic.users << current_user
    if comic.save
      render json: { message:'you have successfully created a new comic', status: 'ok'}, notice: "You successfully created a new Comic!"
    else
      render json: {errors: comic.errors.full_messages}, status: :unprocessable_entity
    end
  end

  # po = Base64.decode64(params[:comic][:pages][0][:base64])

  def decode_base64
    binding.pry
   decoded_data = Base64.decode64(params[:comic][:pages][:base64])
   data = StringIO.new(po)
   data
  end

  def show
      comic = Comic.find(params[:id])
      render json: comic
  end

  def add
      comic = Comic.find(params[:id])
      if comic.users.map { |e| e !=  current_user }
        comic.users << current_user
        render json: { status: 'ok'}, notice: "You successfully added a new Comic to your account yo!"
    else
      render json: {errors: comic.errors.full_messages}, status: :unprocessable_entity
    end
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
      params.require(:comic).permit(
                :title,
                :description,
                :issue,
                :volume,
                :page_count,
                :issue_date,
                :graphic_novel,
                :region_id,
                :genre_ids => [],
                :pages=> decode_base64
        )
    end
end
