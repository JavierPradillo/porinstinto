class SongsController < ApplicationController
  load_and_authorize_resource

  def new
    @record = Record.find_by_slug(params[:record_id])    
  end 

  def create
    @record = Record.find_by_slug(params[:record_id])    
    @song = @record.songs.new(song_params)
    if @song.save
      flash[:success] = "Song succesfully created"
      redirect_to @record
    else
      flash[:error] = "Error: song couldn't be created"        
      redirect_to @record
    end
  end


  def edit
    @record = @song.record
  end

  def update
    @record = @song.record
    if @song.update_attributes(song_params)
      flash[:success] = "Song succesfully updated"
      redirect_to @record
    else
      flash[:error] = "Error: song couldn't be updated"
      render action: "edit"
    end
  end


  def destroy
    @record = @song.record
    @song.destroy
    flash[:success] = 'Song deleted'
    redirect_to @record
  end
  

  private

  def song_params
    params.require(:song).permit(:name, :lyrics, :track_order, :music_file, :url)
  end  
end
