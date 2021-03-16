const galleryThumbnailsTpl = (galleryList) => {
    return galleryList.map((item, index) => {
        const { url} = item
        return `<img class="thumbnails-item" data-id="${index}" src="${url}">`
    }).join('')
}
export default galleryThumbnailsTpl;