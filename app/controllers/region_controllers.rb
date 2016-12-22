class RegionsController < ApplicationController

  def index
    render json: Region.all
  end
