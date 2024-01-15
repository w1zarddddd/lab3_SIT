async function getResponse() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
        const content = await response.json();

        const tableBody = document.querySelector(".data");

        content.forEach(task => {
            const row = document.createElement("tr");

            const userIdCell = document.createElement("td");
            userIdCell.textContent = task.userId;
            row.appendChild(userIdCell);

            const titleCell = document.createElement("td");
            titleCell.textContent = task.title;
            row.appendChild(titleCell);

            const statusCell = document.createElement("td");
            statusCell.textContent = task.completed ? 'Завершено' : 'В процессе';
            row.appendChild(statusCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

getResponse();
