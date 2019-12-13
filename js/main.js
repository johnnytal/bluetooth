var gameMain = function(game){
  
};

gameMain.prototype = {
    create: function(){
		ble.scan([], 10, success, failure); //services, seconds, success, failure
	}
};

function success(device){
	alert(JSON.stringify(device));
}
