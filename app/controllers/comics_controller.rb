
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
# picture_params = params[:picture]
# encoded_picture = picture_params[:data]
# content_type = picture_params[:content_type]
# image = Paperclip.io_adapters.for("data:#{content_type};base64,#{encoded_picture}")
# image.original_filename = picture_params[:filename]
# @picture.image = image
    binding.pry
    comic = Comic.new(comic_params)
    comic.pages = decode_base64
    comic.users << current_user
    if comic.save
      render json: { message:'you have successfully created a new comic', status: 'ok'}, notice: "You successfully created a new Comic!"
    else
      render json: {errors: comic.errors.full_messages}, status: :unprocessable_entity
    end
  end
# Paperclip::AdapterRegistry::NoHandlerErrors
  # def decode_base64
  #  decoded_data = Base64.decode64(params[:comic][:pages][:base64])
  #  data = StringIO.new(decoded_data)
  #  data
  # end
  # Paperclip::AdapterRegistry::NoHandlerError (No handler found for [{}, {}, {}, {}]):


   def decode_base64
      binding.pry
      decoded_data = params[:comic][:pages].map { |page| Base64.decode64(page[:base64]) }
      data = decoded_data.map { |d|  StringIO.new(d) }
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
                # :pages_attributes=> [:filetype, :filename, :filesize, :base64],
                :pages => []
        )
    end
end
