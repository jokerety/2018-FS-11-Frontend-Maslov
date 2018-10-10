const say = function (name) {
        var box = document.createElement('box');
        box.className = 'alert'
	    box.innerHTML = `Hello, ${name}!`;
        document.body.appendChild(box);
	};


export default say;
