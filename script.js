function fullPage() {
    const fullPage = document.querySelector('#fullpage');
    fullPage.style.backgroundImage = 'url(' + document.getElementById('img').src + ')';
    fullPage.style.display = 'block';
}

function dynamicUrl(type) {
    let url = document.getElementById('url').value;
    let id = url.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|shorts\/|embed\/|v\/)?)([\w\-]+)(\S+)?$/)[6];
    let imgUrl;
    if (type === 1)
        imgUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    else if (type === 2)
        imgUrl = `https://img.youtube.com/vi_webp/${id}/maxresdefault.webp`;
    else
        imgUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    let img = document.getElementById('img');
    img.src = imgUrl;

    return imgUrl;
}

function download() {
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = document.getElementById('img').src;
    link.download = 'get-yt-thumb.jpg';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
