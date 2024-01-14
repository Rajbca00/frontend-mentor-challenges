function toggleCollapse(event) {
    let target = event.currentTarget
    console.log(target)
    var ansElement = target.closest('.qn').nextElementSibling;
    var imgElement = target.querySelector('img');
    if (ansElement) {
        ansElement.classList.toggle('collapsed');
        console.log('collapsed')
    }
    if (imgElement) {
        console.log(imgElement.src)
        if (imgElement.src.includes('/assets/images/icon-plus.svg')) {
            imgElement.src = './assets/images/icon-minus.svg';
        }
        else {
            imgElement.src = './assets/images/icon-plus.svg';
        }
    }
}