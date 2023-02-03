let ul = document.querySelector('.tags-input ul');
let input = document.querySelector('.tags-input ul input');
let removeAll = document.querySelector('.removeAll button');

let tags = ['html','css','javascript'];

function showTags(){
    document.querySelectorAll('.tags-input li').forEach(li => li.remove());
    tags.forEach( (value, key ) =>{
        let newLi = document.createElement('li');
        newLi.innerText = value;
        let newRemove = document.createElement('div');
        newRemove.classList.add('remove');
        newRemove.setAttribute('onclick',`removeItem(${key})`);
        newLi.appendChild(newRemove);
        ul.appendChild(newLi);
    })
}
showTags();
function removeItem(key){
    delete tags[key];
    showTags();
}
removeAll.addEventListener('click',function(){
    tags=[];
    showTags();
})
input.addEventListener('keyup',function(event){
    if(event.key === 'Enter'){
        if(!tags.includes(this.value)){
            tags.push(this.value);
            showTags();
        }
        this.value = '';
    }
})
