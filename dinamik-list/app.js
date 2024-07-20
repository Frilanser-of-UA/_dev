let list = document.querySelectorAll('.list');
if(list.length > 0){
    list.forEach(el =>{
        let num = el.getAttribute('data-num'); // сколько не перенесеться елементов
        let itemsSumm =  Array.from(el.children);
        let items =  itemsSumm.slice(num);
        let newList = document.createElement('ul');
            newList.className = 'list new';
        for (let el of items){
            newList.appendChild(el); 
        }
        if(itemsSumm.length > num){
            let parentEl = el.parentNode;
            parentEl.appendChild(newList);
        }
    });
}

const headerNav = document.querySelector('.list');
if (headerNav)  {
    headerNav.addEventListener("mouseover", function (e) {
        let targetItem = e.target;
        if (targetItem.closest('.list-item')) {
            targetItem.closest('.list-item').classList.add('hover')
        }
    });
    headerNav.addEventListener("mouseout", function (e) {
        let targetItem = e.target;
        if (targetItem.closest('.list-item')) {
            targetItem.closest('.list-item').classList.remove('hover')
        }
    });
}
