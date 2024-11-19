let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

function fetchData(itemId) {
    fetch('https://your-server-url/get_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item_id: itemId })
    })
    .then(response => response.json())
    .then(data => {
        // Обработка полученных данных
        console.log(data);
        // Вывод данных на страницу
        document.getElementById('usercard').innerText = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
}

btn1.addEventListener("click", function () {
    item = "1";
    fetchData(item);
});

btn2.addEventListener("click", function () {
    item = "2";
    fetchData(item);
});

btn3.addEventListener("click", function () {
    item = "3";
    fetchData(item);
});

btn4.addEventListener("click", function () {
    item = "4";
    fetchData(item);
});
