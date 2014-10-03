class AddAttachmentPhotoToAdmins < ActiveRecord::Migration
  def self.up
    change_table :admins do |t|
      t.attachment :photo
    end
  end

  def self.down
    remove_attachment :admins, :photo
  end
end
