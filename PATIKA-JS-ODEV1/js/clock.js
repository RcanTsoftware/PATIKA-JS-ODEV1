//Kullancı Adını Alıp Ekrana Yazdırma 
let ad = prompt("Lütfen Adınızı Giriniz : ");
let yeni_isim = document.querySelector('#myName').innerHTML += `${ad}`;



function showTime()
{   
    let zaman = new Date();
    let tarih = zaman.getDay();

    if (tarih == 1)
    {
        document.querySelector('#myClock').innerHTML = zaman.toLocaleTimeString() + "  " + "Pazartesi";
    }
    else if (tarih == 2)
    {
        document.querySelector('#myClock').innerHTML = zaman.toLocaleTimeString() + "  " + "Salı";
    }
    else if (tarih == 3)
    {
        document.querySelector('#myClock').innerHTML = zaman.toLocaleTimeString() + "  " + "Çarşamba";
    }
    else if (tarih == 4)
    {
        document.querySelector('#myClock').innerHTML = zaman.toLocaleTimeString() + "  " + "Perşembe";
    }
    else if (tarih == 5)
    {
        document.querySelector('#myClock').innerHTML = zaman.toLocaleTimeString() + "  " + "Cuma";
    }
    else if (tarih == 6)
    {
        document.querySelector('#myClock').innerHTML = zaman.toLocaleTimeString() + "  " + "Cumartesi";
    }
    else if (tarih == 7)
    {
        document.querySelector('#myClock').innerHTML = zaman.toLocaleTimeString() + "  " + "Pazar";
    }
    else
    {
        document.querySelector('#myClock').innerHTML = zaman.toLocaleTimeString() + "  " + "Geçersiz Gün";
    }

}

setInterval(showTime , 1000);



