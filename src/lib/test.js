const say = function (name) {
  const box = document.createElement('box');
  box.className = 'alert';
	    box.innerHTML = `Hello, ${name}!`;
  document.body.appendChild(box);
};


export default say;


// geolocation Promise для тех асинхронных которые вызываются раз обычно (геолокация, файлы)
function getPosition(options) {
  return new Promise((resolve, rej) => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      }, // ~ resolve,
      (error) => {
        rej(error);
      }, // ~ rej,
      options,
    );
  });
}

export default getPosition; //export ссылки

//html c 'input' class
//file js
const input = document.querySelector('input');
input.addEventListener('change', function(event) => {
    const files = event.target.files;
    const url = URL.createObjectURL (files[0]);
    const image = new Image;
    image.onload = () => URL.revokeObjectURL(url);
    image.src = url;
    document.body.appendChild(image);

});
