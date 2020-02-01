
function getUrlArgs() {
    const args = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
				 (m,k,v) => {
				     args[k] = decodeURIComponent(v);
				     return m;
				 }
				);
    return args;
}

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-container', {
    height: '390',
    width: '640',
    videoId: getUrlArgs()['v']
  });
}

document.getElementsByTagName('h1')[0].innerHTML = getUrlArgs()['t'];
