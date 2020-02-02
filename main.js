const urlArgs = Object.fromEntries([...window.location.href.matchAll(/[?&]+(?<a>[^=&]+)=(?<b>[^&]*)/gi)]
			 .map(list => list
			      .map(elem => decodeURIComponent(elem)))
			 .map(([_,...rest]) => rest));
document
    .getElementsByTagName('iframe')[0]
    .setAttribute('src',`https://www.youtube-nocookie.com/embed/${/.*watch\?v=(.*)/.exec(urlArgs['v'])[1]}`);
document
    .getElementsByTagName('h1')[0]
    .innerHTML = urlArgs['t'];
