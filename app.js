function display(storage, elt) {
    var files = navigator.getDeviceStorage(storage);
    var cursor = files.enumerate();
    console.log(cursor);
    cursor.onsuccess = function () {
	var file = this.result;
	console.log(file);
	if (file != null) {
  	    var imageElement = document.createElement("img");
	    imageElement.setAttribute("height", 100);
	    imageElement.setAttribute("width", 100);
	    imageElement.setAttribute("src", window.URL.createObjectURL(file));
	    elt.appendChild(imageElement);
	    this.done = false;
	}
	else {
	    this.done = true;
	}
	
	if (!this.done) {
	    this.continue();
	}
    }
    cursor.onerror = function(e) {
	console.log(e);
    }
}
window.onload = function() {
    var pictures = document.getElementById('pictures');
    var sd = document.getElementById('sd');
    display("pictures", pictures);
    display("sdcard", sd);
}
