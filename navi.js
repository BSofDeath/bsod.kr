function show(id) {
    const list = document.getElementsByClassName("linktree");
    const btn = document.getElementsByClassName("button");

    for (i = 0; i < list.length;  i++) {
        if (list[i].classList.contains('visible')) {
            list[i].classList.remove('visible');
        }
    }
    for (i = 0; i < btn.length;  i++) {
        if (btn[i].classList.contains('active')) {
            btn[i].classList.remove('active');
        }
    }

    document.querySelector('div#' + id).classList.add('visible');
    document.querySelector('li#' + id).classList.add('active');
}

const pBtn = document.querySelector('li#publishing');
const sBtn = document.querySelector('li#social');
const oBtn = document.querySelector('li#others');

pBtn.addEventListener('click', function() {
    show(this.id);
});

sBtn.addEventListener('click', function() {
    show(this.id);
});

oBtn.addEventListener('click', function() {
    show(this.id);
});