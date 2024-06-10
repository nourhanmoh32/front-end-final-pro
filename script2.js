
document.addEventListener('DOMContentLoaded', (event) => {
    // Function to handle the deletion of a card
    function deleteCard(event) {
        const card = event.target.closest('.card');
        card.remove();
    }

    // Add event listeners to all current delete buttons
    document.querySelectorAll('.delete-emp').forEach(button => {
        button.addEventListener('click', deleteCard);
    });

    //add a new employee card, can attach the event listener to the new delete button there
    function addNewEmployeeCard() {
        const newCard = document.createElement('div');
        newCard.classList.add('card', 'mb-3');
        newCard.style.maxWidth = '540px';
        newCard.innerHTML = `
            <div class="row g-0">
                <div class="emp-img col-md-4">
                    <img src="photos/businessman-illustration-flat-design_23-2147504754.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">الاسم:</h3>
                        <h3 class="card-title">القسم:</h3>
                        <h3 class="card-title">الراتب:</h3>
                        <h3 class="card-title">رقم الهاتف:</h3>
                    </div>
                </div>
            </div>
            <button class="delete-emp">حذف الموظف</button>
        `;
        document.getElementById('container').appendChild(newCard);

        // Add event listener to the new delete button
        newCard.querySelector('.delete-emp').addEventListener('click', deleteCard);
    }

    //add a new employee card when the "addDivButton" is clicked
    document.getElementById('addDivButton').addEventListener('click', addNewEmployeeCard);
});
// -------------------------------------------------------------------------------
// how i can keep the changes in my website even if i close and return open it?  طريقة السيرش ع شات عن حفظ التغييرات
function saveProfile() {
    const username = document.getElementById('username').value;

    // Save to local storage
    localStorage.setItem('username', username);

    // Optionally, send to server
    fetch('/saveProfile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username })
    }).then(response => response.json())
      .then(data => console.log('Profile saved:', data));
}

// Load profile data on page load
window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
    }
};