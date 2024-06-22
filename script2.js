// toggle sidebar
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});
// ---------------------------------------------------------------------------------

// document.addEventListener: It's a way to listen for specific events and execute a function when those events occur.
// place our JavaScript code inside the 'DOMContentLoaded' event listener, ensure that the DOM elements we want to interact with are available.
// when we reload page, every changes will be constant
document.addEventListener('DOMContentLoaded', () => {
    function loadEmployeeCards() {
        const cardsData = JSON.parse(localStorage.getItem('employeeCards')) || []; //JSON commonly used for transmitting data in web applications between a server and a client.
        cardsData.forEach(data => createCard(data));
    }

    function saveEmployeeCards() {
        const cards = document.querySelectorAll('#container .card');
        const cardsData = Array.from(cards).map(card => ({
            name: card.querySelector('.card-title.name').innerText,
            department: card.querySelector('.card-title.department').innerText,
            salary: card.querySelector('.card-title.salary').innerText,
            phone: card.querySelector('.card-title.phone').innerText
        }));
        localStorage.setItem('employeeCards', JSON.stringify(cardsData));
    }

    function createCard(data) {
        const newCard = document.createElement('div');
        newCard.classList.add('card', 'mb-3');
        newCard.innerHTML = `
            <div class="row g-0">
                <div class="emp-img col-md-4">
                    <img src="photos/person.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title name">${data.name}</h3>
                        <h3 class="card-title department">${data.department}</h3>
                        <h3 class="card-title salary">${data.salary}</h3>
                        <h3 class="card-title phone">${data.phone}</h3>
                    </div>
                </div>
            </div>
            <button class="delete-emp">حذف الموظف</button>
            <button class="edit-emp">تعديل البيانات</button>

        `;
        document.getElementById('container').appendChild(newCard);
        newCard.querySelector('.delete-emp').addEventListener('click', deleteCard);
    }

    function deleteCard(event) {
        const card = event.target.closest('.card');
        card.remove();
        saveEmployeeCards();
    }

    function addNewEmployeeCard() {
        const data = {
            name: 'الاسم: ',
            department: 'القسم: ',
            salary: 'الراتب: ',
            phone: 'رقم الهاتف: '
        };
        createCard(data);
        saveEmployeeCards();
    }

    document.getElementById('addDivButton').addEventListener('click', addNewEmployeeCard);
    loadEmployeeCards();
});
// ------------------------------------------------------------------------------------------------
