//////////////////////////////////////
//  # Copyright © - 2° ano de T.I;
//  # Type: .js;
//////////////////////////////////////




// active function

document.querySelectorAll('.navbar-item a').forEach(isActive => {
    isActive.addEventListener('click', function(){
        document.querySelector('.navbar-menu').querySelector('.active').classList.remove('active')
        isActive.classList.add('active')
    })
});

// click navbar

document.querySelector('#mobile-menu').addEventListener('click',
    () => {
        document.querySelector('#mobile-menu').classList.toggle('is-active')
        document.querySelector('.navbar-menu').classList.toggle('active')
    }
);

// util's

getInsertDate = function(type){
    return document.querySelector(type).innerText = new Date().getFullYear();
};

// callback

getInsertDate('#date');