function fullPage() {
    const fullPage = document.querySelector('#fullpage');
    fullPage.style.backgroundImage = 'url(' + document.getElementById('img').src + ')';
    fullPage.style.display = 'block';
}

function dynamicUrl() {
    let url = document.getElementById('url').value;
    let id = url.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|shorts\/|embed\/|v\/)?)([\w\-]+)(\S+)?$/)[6];
    let imgUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    let img = document.getElementById('img');
    img.src = imgUrl;

    return imgUrl;
}

function download() {
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = dynamicUrl();
    link.download = 'get-yt-thumb.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
