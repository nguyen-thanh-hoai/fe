const btnf = document.querySelectorAll('.btn-f');
const pot = document.querySelectorAll('.pot');
const cash = document.querySelector('#cash');
let total = 1800;
let price = 0;
let selectF = '';

btnf.forEach(element => {
    element.addEventListener('click', function () {
        price = +this.textContent;
        selectF = this.id;
    });
});

pot.forEach(element => {
    element.addEventListener('click', function (){
        if(total >= price) {
            const selectPot = this.querySelector('.flower');
        if(selectPot.getAttribute('src') == '') {
            total -= price;
            selectPot.setAttribute('src', `public/images/${selectF}.png`);
            cash.textContent = total;
        }
        else
        {
            alert('da co hoa');
        }
        }
        else {
            alert('khong du tien');
        }
        
    });
});

