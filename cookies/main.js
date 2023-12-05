const mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);
const input = document.createElement('input');
mainDiv.appendChild(input);
const button = document.createElement('button');
button.innerText = 'add';
mainDiv.appendChild(button);
const ul = document.createElement('ul');
mainDiv.appendChild(ul);

button.onclick = function main() {

    const li = document.createElement('li');
    ul.appendChild(li);
    const span = document.createElement('span');
    span.innerText = input.value;
    li.appendChild(span);
    const check = document.createElement('input');
    check.type = 'checkbox';
    li.appendChild(check);
    const edit = document.createElement('button');
    edit.innerText = 'Edit';
    li.appendChild(edit);
    const dele = document.createElement('button');
    dele.innerText = 'Delete';
    li.appendChild(dele);

    edit.onclick = () => {
        const pro = prompt('Edit');
        span.innerText = pro;
    }


    dele.onclick = () => {
        check.checked ? li.remove() : alert('invalied');
    }

}