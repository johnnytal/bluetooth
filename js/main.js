var gameMain = function(game){
  
};

gameMain.prototype = {
    create: function(){
    	game.stage.backgroundColor = '#afa';
    	
		ble.scan([], 15, success, failure); //services, seconds, success, failure
	}
};

function success(device){
	game.stage.backgroundColor = '#faf';
	
	alert(JSON.stringify(device));
	
	setTimeout(function(){
		ble.connect(device.id, connectCallback, disconnectCallback);
	}, 5000);
}

function failure(e){
	game.stage.backgroundColor = '#000;
	
	alert(e);
}

function connectCallback(){
	game.stage.backgroundColor = '#bfb;
	
	alert('connected!');
}

function disconnectCallback(){
	alert('disconnected!');
}
