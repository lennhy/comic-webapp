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


# Paperclip::AdapterRegistry::NoHandlerError (No handler found for ["maxresdefault.jpg", "lenn.jpg", "CHAPPELLE_02_0204_RICKJAMES_640x360.jpg", "maxresdefault.jpg", "lenn.jpg", "CHAPPELLE_02_0204_RICKJAMES_640x360.jpg", "maxresdefault.jpg", "lenn.jpg", "CHAPPELLE_02_0204_RICKJAMES_640x360.jpg"]):
  def create
    comic = Comic.new(comic_params)
    comic.pages = decode_base64 # save resource and render response ...

    comic.users << current_user
    binding.pry
    if comic.save
      render json: { message:'you have successfully created a new comic', status: 'ok'}, notice: "You successfully created a new Comic!"
    else
      render json: {errors: comic.errors.full_messages}, status: :unprocessable_entity
    end
  end

# # Paperclip::AdapterRegistry::NoHandlerErrors
#   def decode_base64
#    decoded_data = Base64.decode64(params[:comic][:pages][:base64])
#    data = StringIO.new(decoded_data)
#    data
  # end
  # Paperclip::AdapterRegistry::NoHandlerError (No handler found for [{}, {}, {}, {}]):
  #
  # def decode_base64
  #     Rails.logger.info 'decoding base64 file'
  #     # decode base64 string
  #     pages = params[:comic][:pages]
  #     decoded_data = pages.map { |page| Base64.decode64(page[:base64]) }
  #
  #     # create 'file' understandable by Paperclip
  #     data = decoded_data.map { |d|  StringIO.new(d) } #[#<StringIO:0x007f9bf80ca670>, #<StringIO:0x007f9bf80ca5d0>, #<StringIO:0x007f9bf80ca558>]
  #
  #     # data[0].content_type  = params[:comic][:pages][0][:filetype]
  #     set_attributes = data.each do |d|
  #       d.class_eval do
  #           attr_accessor :content_type, :original_filename
  #       end
  #     end
  #     binding.pry
  #
  #     # set file properties
  #     set_data = set_attributes.map do |md|
  #        pages.map do |page|
  #          md.content_type = page[:filetype]
  #          md.original_filename = page[:filename]
  #        end
  #     end
  #     # return data to be used as the attachment file (paperclip)
  #     set_data
  # end

  def decode_base64
    # decode base64 string
    Rails.logger.info 'decoding base64 file'
    decoded_data = Base64.decode64( params[:comic][:pages][:base64])
    # create 'file' understandable by Paperclip
    data = StringIO.new(decoded_data)
    data.class_eval do
      attr_accessor :content_type, :original_filename
    end

    # set file properties
    data.content_type = params[:comic][:pages][:filetype] ##<StringIO:0x007f9be40a1d88>
    data.original_filename = params[:comic][:pages][:filename]
    binding.pry

    # return data to be used as the attachment file (paperclip)
    data ##<StringIO:0x007fc91718b590 @content_type="image/jpeg", @original_filename="lenn.jpg">
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
      # raise params.inspect
      params.require(:comic).permit(
                :title,
                :description,
                :issue,
                :volume,
                :page_count,
                :issue_date,
                :graphic_novel,
                :region_id,
                :pages,
                :genre_ids => []
        )
    end
end
