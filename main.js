let cloud = App.loadSpritesheet("cloud.png", 659, 400, [0], 6);

App.onJoinplayer.Add(function(){

	Map.putObject(5, 5, cloud);
})