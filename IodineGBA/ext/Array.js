// For 1D arrays only
Array.prototype.equals = function(other) {
	if (this.length === other.length) {
		for (i = 0; i < this.length; i++) {
			if (this[i] !== other[i]) {
				return false;
			}
		}
	}
	else {
		return false;	
	}
	
	return true;
}

// Includes indexOf for IE
if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(needle) {
        for(var i = 0; i < this.length; i++) {
            if(this[i] === needle) {
                return i;
            }
        }
        return -1;
    };
}