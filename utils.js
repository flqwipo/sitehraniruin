// Функция для форматирования дат
export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('ru-RU', options);
}

// Функция для динамического добавления проектов на страницу
export function renderProjects(projects) {
    const container = document.querySelector('.projects-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project');

        const title = document.createElement('h3');
        title.textContent = project.title;
        projectItem.appendChild(title);

        const description = document.createElement('p');
        description.textContent = project.description;
        projectItem.appendChild(description);

        const date = document.createElement('p');
        date.textContent = Завершено: ${formatDate(project.completedDate)};
        projectItem.appendChild(date);

        container.appendChild(projectItem);
    });
}

// Функция для отправки данных с формы
export async function submitForm(formData) {
    try {
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Ошибка при отправке формы');
        }

        const result = await response.json();
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами скоро.');
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке формы. Попробуйте позже.');
    }
}

// Функция для валидации формы (проверка обязательных полей)
export function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}