const pubBtn = document.querySelector('#nav-item_pub');
const sciBtn = document.querySelector('#nav-item_social');
const pubList = document.querySelector('#link-list_pub');
const sciList = document.querySelector('#link-list_social');

function showList(btn, list) {
    btn.classList.add('nav-item_active');
    list.classList.add('link-container_active');
}
function HideList(btn, list) {
    btn.classList.remove('nav-item_active');
    list.classList.remove('link-container_active');
}

pubBtn.addEventListener('click', function() {
    showList(pubBtn, pubList); HideList(sciBtn, sciList);
});
sciBtn.addEventListener('click', function() {
    showList(sciBtn, sciList); HideList(pubBtn, pubList);
});