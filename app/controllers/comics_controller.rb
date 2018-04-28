class ComicsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json

  def index
    render json: Comic.all
  end

  def new
      comic = Comic.new
      page_attachments = comic.page_attachments.build
      render json: comic
  end

  def create
    # render json: { status: 'ok'}, notice: "This is not allowed. This site is under construction."
    comic = Comic.new(comic_params)
    comic.users << current_user
    if comic.save
      render json: comic
      # render json: { message:'you have successfully created a new comic', status: 'ok'}, notice: "You successfully created a new Comic!" and comic
    else
      render json: {errors: comic.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
      comic = Comic.find(params[:id])
      # page_attachments = comic.page_attachments.all
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

  # def update
  #     comic = Comic.find(params[:id])
  #     if comic.update(comic_params)
  #       render json: comic
  #     else
  #       render json: {errors: comic.errors.full_messages}, status: :unprocessable_entity
  #     end
  # end

  def upload
    if Comic.find(params[:id])
      comic = Comic.find(params[:id])
      if params[:cover].present? && params[:page_attachments_attributes].present?
        comic.update(cover: params[:cover])
        params[:page_attachments_attributes].each_with_index do |value, i|
          page_attachment = PageAttachment.new
          page_attachment.page = params[:page_attachments_attributes][i.to_s]
          page_attachment.comic_id = comic.id
          page_attachment.save
        end
        flash[:notice] = "You created a comic"
      else
        flash[:notice] = "There are no images"
      end
    else
      flash[:error] = "Comic book was not saved"
    end
    render json: comic
  end

  def destroy
    comic = Comic.find(params[:id])
    if current_user.role == "publisher" &&  current_user.id == comic.id
      if comic.page_attachments != nil
        comic.page_attachments.each do |page_attachment|
          page_attachment.page.remove!
          page_attachment.page.thumb.remove!

        end
      end
      comic.delete
      render json: comic
    else
      flash[:error] = "You are not allowed to delete this book"
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
                :cover=>{},
                :genre_ids => [],
                :page_attachments_attributes=> []
       )
    end
end
