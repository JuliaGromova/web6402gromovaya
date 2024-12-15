document.addEventListener('DOMContentLoaded', () => {

	document.getElementById('update-prices-town1').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:8000/prices/town1');
        if (!response.ok) {
            throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
        }
        const data = await response.json();

        const container = document.getElementById('prices-container');
        container.innerHTML = `
            <div class="header">Тип услуги</div>
            <div class="header">Маленькие животные</div>
            <div class="header">Средние животные</div>
            <div class="header">Большие животные</div>
        `;

        data.prices.forEach(item => {
            container.innerHTML += `
                <div class="item">${item.service}</div>
                <div class="item">${item.small}</div>
                <div class="item">${item.medium}</div>
                <div class="item">${item.large}</div>
            `;
        });
    } catch (error) {
        console.error('Ошибка:', error);
    }
	});
	
	document.getElementById('update-prices-town2').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:8000/prices/town2');
        if (!response.ok) {
            throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
        }
        const data = await response.json();

        const container = document.getElementById('prices-container');
        container.innerHTML = `
            <div class="header">Тип услуги</div>
            <div class="header">Маленькие животные</div>
            <div class="header">Средние животные</div>
            <div class="header">Большие животные</div>
        `;

        data.prices.forEach(item => {
            container.innerHTML += `
                <div class="item">${item.service}</div>
                <div class="item">${item.small}</div>
                <div class="item">${item.medium}</div>
                <div class="item">${item.large}</div>
            `;
        });
    } catch (error) {
        console.error('Ошибка:', error);
    }
	});

});

