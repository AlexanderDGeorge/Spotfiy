json.extract! album, :id, :name, :year
json.artist album.artist.name
json.songIds album.songs.pluck(:id)
json.artistId album.artist.id
