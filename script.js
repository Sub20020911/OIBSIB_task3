let input = document.querySelector('.entered_item');
let addbtn= document.querySelector('.add-list');
let tasks = document.querySelector('.task_list');


input.addEventListener('keyup', () =>{
    if(input.value.trim() !== 0){
        addbtn.classList.add('active')
    }else{
        addbtn.classList.remove('active')
    }
})

addbtn.addEventListener('click', () => {
    if (input.value.trim() !== 0) {
           let new_item = document.createElement('div');
           new_item.classList.add('item');
           new_item.innerHTML = `
           <p> ${input.value} </p>
           <div class="item_btn">
               <i class="fa-solid fa-pen-to-square"></i>
               <i class="fa-sharp fa-solid fa-circle-xmark"></i>
           </div>
           `
           tasks.appendChild(new_item);
           input.value = '';
        }else{
            alert('Please Enter a Task')
        }
})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-circle-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})