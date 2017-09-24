function go_back(defaultLocation) {
    if (! (document.referrer === "" || typeof(document.referrer) !== "string") ) {
    	if (document.referrer.indexOf('senxskutocnost.sng.sk') !== -1) {
    		history.go(-1);
        	return false;
    	}
    	else {
    		window.location.href = defaultLocation;
    	}
    } else {
        window.location.href = defaultLocation;
    }
}