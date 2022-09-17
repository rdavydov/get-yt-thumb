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
}

function downloadImage(url, name) {
    fetch(url)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => console.error('downloadImage error'));
}

function download() {
    downloadImage(document.getElementById('img').src, "get-yt-thumb.jpg");
}
