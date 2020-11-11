'use strict';

$('.radio-item').on('click', function() {
  $(this).addClass('check').siblings().removeClass('check');

})


$('input:checkbox').click(function(){
	if ($(this).is(':checked')) {
		$(this).parent().addClass('check');
	} else {
		$(this).parent().removeClass('check');
	}
});




$('input:checkbox').click(function(){
	if ($(this).is(':checked')){
		$('#agree').removeAttr('disabled');
	} else {
		$('#agree').attr('disabled', 'disabled'); 
	}
});





const buttons = Array.from(document.querySelectorAll('button'));
const consent = document.querySelector('.consent');
const main = document.querySelector('#main');


for (let btn of buttons) {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.closest('section') != main.lastElementChild) {
      e.currentTarget.closest('.form-item').classList.add('hidden');
      e.currentTarget.closest('.form-item').nextElementSibling.classList.remove('hidden');
    let nextSibChildren = e.currentTarget.closest('.form-item').parentElement.nextElementSibling.children;
      for (let child of nextSibChildren) {
        if (child.hasAttribute('data-state')) {  
          child.getAttribute('data-state') == "active" ? child.classList.remove('hidden') : null;
          child.getAttribute('data-state') == "hidden" ? child.classList.add('hidden') : null;
        }
      }
    } else {
     for (let item of document.querySelector('#main').children)
      item != main.lastElementChild ? item.classList.add('hidden') : null;
      main.lastElementChild.querySelector('.form-item[data-state="checked"]').classList.remove('hidden');
      main.lastElementChild.querySelector('.form-item[data-state="active"]').classList.add('hidden');

    }
  });
}




// Кнопки ПРОДОЛЖИТЬ. Рабочий вариант

// const buttons = Array.from(document.querySelectorAll('button'));
// const consent = document.querySelector('.consent');
// const main = document.querySelector('#main');

// for (let btn of buttons) {
//   btn.addEventListener('click', (e) => {
 
//     if (!e.currentTarget.closest('.consent')) {
//     e.currentTarget.closest('.form-item').classList.add('hidden');
//     e.currentTarget.closest('.form-item').nextElementSibling.classList.remove('hidden');
//     let nextSibChildren = e.currentTarget.closest('.form-item').parentElement.nextElementSibling.children;
    
//       for (let child of nextSibChildren) {
//         if (child.hasAttribute('data-state')) {  
//           child.getAttribute('data-state') == "active" ? child.classList.remove('hidden') : null;
//           child.getAttribute('data-state') == "hidden" ? child.classList.add('hidden') : null;
//         }
//       }
//     } else {
//     for (let item of document.querySelector('#main').children)
//       !item.classList.contains('consent') ? item.classList.add('hidden') : null;
//       consent.querySelector('.form-item[data-state="checked"]').classList.remove('hidden');
//       consent.querySelector('.form-item[data-state="active"]').classList.add('hidden');
//     }
//   });
// }




// const changeBtn = Array.from(document.querySelectorAll('.change'));
// for (let change of changeBtn) {
//   change.addEventListener('click', (e) => {
//     e.currentTarget.closest('.form-item').classList.add('hidden');
//     e.currentTarget.closest('section').querySelector('.form-item[data-state="active"]').classList.remove('hidden');
//     for (let items of Array.from(document.getElementsByClassName('.form-item'))) {
//       items.getAttribute('data-state') == "active" ? items.classList.add('hidden') : null;
//       items.getAttribute('data-state') == "hidden" ? items.classList.remove('hidden') : null;
  
//     }
    
//     // items.querySelector('.form-item[data-state="active"]').classList.add('hidden');
//     // items.querySelector('.form-item[data-state="hidden"]').classList.remove('hidden');
 
    
//   })
// }



// Кнопка ИЗМЕНИТЬ рабочая только в правильной очередности


const changeBtn = Array.from(document.querySelectorAll('.change'));
for (let change of changeBtn) {
  change.addEventListener('click', (e) => {
    e.currentTarget.closest('.form-item').classList.add('hidden');
    e.currentTarget.closest('section').querySelector('.form-item[data-state="active"]').classList.remove('hidden');
    if (e.currentTarget.closest('.choose')) {
      e.currentTarget.closest('section').nextElementSibling.querySelector('.form-item[data-state="active"]').classList.add('hidden');
      e.currentTarget.closest('section').nextElementSibling.querySelector('.form-item[data-state="hidden"]').classList.remove('hidden');
    } else {
    e.currentTarget.closest('section').nextElementSibling.querySelector('.form-item[data-state="active"]').classList.add('hidden');
    e.currentTarget.closest('section').nextElementSibling.querySelector('.form-item[data-state="hidden"]').classList.remove('hidden');
   }
  })
}
