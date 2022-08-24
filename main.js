App.onSay.Add(function(player, text){
    App.showCenterLabel(text);
})

App.onJoinPlayer.Add(function(player){
	
		player.sprite = spartan; 
	  // 플레이어 속성이 변경되었으므로 호출해서 실제 반영해준다.
		player.sendUpdated();

})