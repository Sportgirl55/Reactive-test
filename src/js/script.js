'use strict';

// переключени радиокнопок

$('.radio-item').on('click', function() {
  $(this).addClass('check').siblings().removeClass('check');

})

// переключение чекбоксов


$('input:checkbox').click(function(){
	if ($(this).is(':checked')) {
		$(this).parent().addClass('check');
	} else {
		$(this).parent().removeClass('check');
	}
});


// Проверка чекбоксов на заполненность
// Работает только для одного чекбокса, а нужно для двух

$('input:checkbox').click(function(){
	if ($(this).is(':checked')){
		$('#agree').removeAttr('disabled');
	} else {
    $('#agree').attr('disabled', 'disabled'); 
 	}
});


// Лучший рабочий вариант
// Переключение секций

const buttons = Array.from(document.querySelectorAll('button'));
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


// Кнопки "Изменить"

const changeBtn = Array.from(document.querySelectorAll('.change'));
for (let change of changeBtn) {
  change.addEventListener('click', (e) => {
    document.querySelectorAll('.form-item[data-state="active"]').forEach(function (elem) {
      elem.classList.add('hidden');
    })
    document.querySelectorAll('.form-item[data-state="checked"]').forEach(function (elem) {
      elem.classList.add('hidden');
    })
    document.querySelectorAll('.form-item[data-state="hidden"]').forEach(function (elem) {
      elem.classList.remove('hidden');
    })

    e.currentTarget.closest('.form-item').classList.add('hidden');
    e.currentTarget.closest('section').querySelector('.form-item[data-state="active"]').classList.remove('hidden');
    if (e.currentTarget.closest('section').previousElementSibling != null) {
      e.currentTarget.closest('section').querySelector('.form-item[data-state="hidden"]').classList.add('hidden');
      e.currentTarget.closest('section').previousElementSibling.querySelector('.form-item[data-state="checked"]').classList.remove('hidden');
    } 
  })
}





  // $('#check-1').on('change', function(){
  //   if($(this).is(':checked')){
  //     $('button').prop('disabled', false);
  //   } else {
  //     $('button').prop('disabled', true);
  //   }
  // });

  // $('#check-2').on('change', function(){
  //   if($(this).is(':checked')){
  //     $('button').prop('disabled', false);
  //   } else {
  //     $('button').prop('disabled', true);
  //   }
  // });





  // document.getElementById('check-1').addEventListener('click', function (e) {
  //   document.getElementById('agree').disabled = !e.target.checked
  // })
  // document.getElementById('check-2').addEventListener('click', function (e) {
  //   document.getElementById('agree').disabled = !e.target.checked
  // })

// let checkboxes = document.getElementsByClassName('check-item');
// document.getElementById('agree').addEventListener ('click', function () {
//    if (document.getElementById('check-1').checked === true) {

   
//       this.removeAttribute("disabled");
//     }  
//   })

