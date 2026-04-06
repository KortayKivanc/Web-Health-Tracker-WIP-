

let water_value = 0; 
let step_amount = 100;
let sleep_score = 78;
let activity_score = 87;
let nutrition_score = 60;
let previous_sayfa;


window.onload = function() {
    document.getElementById('anasayfa').style.display = "flex";
    const ctx = document.getElementById('dailyChart');
    const dailyChartCanvas = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['08:00', '09:00', '10:00', '11:00', '12:00'],
            datasets: [{
                    label: 'Su',
                    data: [water_value, 400, 600, 800, 1000],
                    backgroundColor: 'rgba(14, 165, 233, 0.4)',
                    borderColor: 'rgba(14, 165, 233, 0.8)',
                    fill: true
                },
                {
                    label: 'Aktivite',
                    data: [activity_score, 60, 70, 80, 87],
                    backgroundColor: 'rgba(34, 197, 94, 0.4)',
                    borderColor: 'rgba(34, 197, 94, 0.8)',
                    fill: true
                },
                {
                    label: 'Uyku',
                    data: [sleep_score, 70, 75, 78, 80],
                    backgroundColor: 'rgba(168, 85, 247, 0.4)',
                    borderColor: 'rgba(168, 85, 247, 0.8)',
                    fill: true
                },
                {
                    label: 'Beslenme',
                    data: [nutrition_score, 55, 58, 60, 65],
                    backgroundColor: 'rgba(251, 146, 60, 0.4)',
                    borderColor: 'rgba(251, 146, 60, 0.8)',
                    fill: true
                }
            ]
        },
        options: {
            scales: {
                y: {
                    stacked: true
                },
                x: {
                    stacked: true
                }
            }
        }
    });
    const activityChart = new Chart(document.getElementById('activityChart'), {
        type: 'bar',
        data: {
            labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
            datasets: [{
                label: 'Adım',
                data: [6200, 8400, 5100, 9800, 7300, 4500, 11200],
                backgroundColor: 'rgba(14, 165, 233, 0.6)',
                borderRadius: 6,
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    const waterChart = new Chart(document.getElementById('waterChart'), {
        type: 'doughnut',
        data: {
            labels: ['Tüketilen Su', 'Kalan Su'],
            datasets: [{
                data: [water_value, 2000 - water_value],
                backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(200, 200, 200, 0.3)']
            }]
        },
        options: {
            maintainAspectRatio: false,
            circumference: 270,
            rotation: -135,
            cutout: '70%',

        }
    });
    const CalorieChart = new Chart(document.getElementById('CalorieChart'), {
        type: 'bar',
        data: {
            labels: ['Tüketilen Kalori', 'Kalan Kalori'],
            datasets: [{
                data: [water_value, 2000 - water_value],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(200, 200, 200, 0.3)']
            }]
        },
        options: {
            maintainAspectRatio: false
        }
    });

    const water_level_value = document.getElementById("drink-water");
    water_level_value.addEventListener('click', function() {
        water_value += 250;
        dailyChartCanvas.data.datasets[0].data[0] = water_value;
        dailyChartCanvas.update();

        waterChart.data.datasets[0].data[0] = water_value;
        if (2000 - water_value < 0) {
            waterChart.data.datasets[0].data[1] = 0;
        } else {
            waterChart.data.datasets[0].data[1] = 2000 - water_value;
        }
        waterChart.update();

    });
}

/* Tıklama Algılama */
for (let item of document.querySelectorAll(".navigator a"))
{
    item.addEventListener("click", function()
    {
        item.style.backgroundColor = "#176a80";
        if (previous_sayfa != null)
        {
            
            previous_sayfa.style.backgroundColor = "transparent";
            
        }
        previous_sayfa = item;
        console.log(item.dataset.page);
        for (let choosen_page of document.querySelectorAll(".page"))
        {
            choosen_page.style.display = "none";
        }
        document.getElementById(item.dataset.page).style.display = "flex";
    });
    
}
for (let item of document.querySelectorAll(".buttons-settings div"))
{
    item.addEventListener("click", function()
    {
        for (let choosen_page of document.querySelectorAll(".option-page"))
        {
            choosen_page.style.display = "none";
        }
        document.getElementById(item.dataset.page).style.display = "flex";
    });
}

let buton_item = document.getElementById("chat_button");
buton_item.addEventListener("click", function()
{
    let input = document.getElementById("chat_input").value;
    if (input != null && input != "")
    {
        const chat_msg_header = document.createElement("div");
        chat_msg_header.classList.add("nameTag");
        chat_msg_header.textContent = "Kullanıcı: "
        const chat_msg = document.createElement("div");
        chat_msg.classList.add("aiChat");
        chat_msg.textContent = input;
        document.querySelector(".chatbox").appendChild(chat_msg_header);
        document.querySelector(".chatbox").appendChild(chat_msg);
        document.getElementById("chat_input").value = "";
        let objDiv = document.getElementById(".chatbox_wrapper");
        objDiv.scrollTop = objDiv.scrollHeight;
    }
})