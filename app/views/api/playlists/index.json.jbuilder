@playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :id, :name, :song_ids
      json.user playlist.user, :id, :username
    end
end
