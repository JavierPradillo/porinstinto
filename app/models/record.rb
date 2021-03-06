class Record < ActiveRecord::Base
  # DECLARATIONS
  extend FriendlyId
  friendly_id :name, use: :slugged
  
  has_attached_file :photo, :styles => {:gallery => "300x300>"}, dependent: :destroy
  
  # RELATIONSHIPS
  has_many :songs, dependent: :destroy
  
  # VALIDATIONS
  validates_presence_of             :name,  :publish_date, :description
  validates_attachment_presence     :photo
  validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']

  # SCOPES
  default_scope  { order(:publish_date => :desc) }
  scope :album,  -> { where(own: true) }
  scope :single, -> { where(own: false) }
  scope :published, lambda{ |date = DateTime.now| where("publish_date <= ? ", date) }
  
  # METHODS
  def get_spotify_url
    spotify_id = spotify_link[-22..-1]
    return "https://embed.spotify.com/?uri=spotify:album:" + spotify_id
  end
end