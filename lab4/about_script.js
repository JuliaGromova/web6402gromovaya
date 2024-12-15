document.addEventListener('DOMContentLoaded', () => {

    const addressElement = document.getElementById('address');
    const cat = document.getElementById('cat');
	const cat2 = document.getElementById('cat2');

    addressElement.addEventListener('click', () => {
        cat.classList.add('show');
		cat2.classList.add('show');

        setTimeout(() => {
            cat.classList.remove('show');
			cat2.classList.remove('show');
        }, 3000);
    });


    const form = document.getElementById('feedback-form');
	const phoneInput = document.getElementById('phone');
    const nameInput = document.getElementById('name');

    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim().length < 3) {
            nameInput.setCustomValidity('Имя должно содержать минимум 3 символа.');
        } else {
            nameInput.setCustomValidity('');
        }
    });

    phoneInput.addEventListener('input', () => {
        const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            phoneInput.setCustomValidity('Введите телефон в формате +7 (000) 123-45-67.');
        } else {
            phoneInput.setCustomValidity('');
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const petType = document.getElementById('pet-type').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !petType || !phone || !message) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

		if (!form.checkValidity()) {
            alert('Проверьте введённые данные.');
        }

        const formData = {
            name,
            petType,
            phone,
            message,
        };

        fetch('https://localhost:8000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка отправки данных');
                }
                return response.json();
            })
            .then((data) => {
                alert('Сообщение успешно отправлено!');
                form.reset();
            })
            .catch((error) => {
                console.error('Ошибка:', error);
                alert('Не удалось отправить сообщение. Попробуйте позже.');
            });
    });
		
});

