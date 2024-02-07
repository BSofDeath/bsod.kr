function ListShow(id) {
    const list = document.getElementsByClassName("linktree");
    const btn = document.getElementsByClassName("option");

    for (i = 0; i < list.length;  i++)
        if (list[i].classList.contains('visible'))
            list[i].classList.remove('visible');
    for (i = 0; i < btn.length;  i++)
        if (btn[i].classList.contains('active'))
            btn[i].classList.remove('active');

    document.querySelector('div#' + id).classList.add('visible');
    document.querySelector('li#' + id).classList.add('active');
}

const pBtn = document.querySelector('li#publishing');
const sBtn = document.querySelector('li#social');
const oBtn = document.querySelector('li#others');

pBtn.addEventListener('click', function() { ListShow(this.id);});
sBtn.addEventListener('click', function() { ListShow(this.id);});
oBtn.addEventListener('click', function() { ListShow(this.id);});

const randomNum = Math.floor(Math.random() * 100);
const script = `PC에 문제가 발생하여 다시 시작해야 합니다. 일부 오류 정보를\\A수집하고 있습니다. 그런 다음 자동으로 다시 시작합니다.\\A\\A ` + randomNum + `% 완료`
const newStyle = document.createElement('style');

newStyle.innerHTML = `#logo::after { content: '` + script + `'; }`;
document.head.appendChild(newStyle);