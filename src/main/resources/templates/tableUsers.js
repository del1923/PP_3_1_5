// <!---------------- ФУНКЦИЯ ПОЛУЧЕНИЯ ВСЕХ ЮЗЕРОВ----------------------->

const URLTableUsers = 'http://localhost:8080/api/admin/users/';
function getAllUsers() {
    fetch(URLTableUsers)
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            let dataOfUsers = '';
            let rolesString = ''; // Здесь будет результат функции rolesToString

            const tableUsers = document.getElementById('tableUsers');

            for (let user of users) {

                rolesString = rolesToString(user.roles);

                dataOfUsers += `<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.surname}</td>
                        <td>${user.age}</td>
                        <td>${user.email}</td>
                        <td>${rolesString}</td> 

                       
                        <td>
                            <button type="button" class="btn btn-info" id="${'#editModal' + user.id}"
                            onclick="getEditModal(${user.id})">
                                Edit
                            </button>
                        </td>

                        
                        <td>
                            <button type="button" class="btn btn-danger" id="${'#deleteModal' + user.id}"
                            onclick="getDeleteModal(${user.id})">
                                Delete
                            </button>
                        </td>
                    </tr>`;
            }
            tableUsers.innerHTML = dataOfUsers;
        })
}

getAllUsers()

function rolesToString(roles) {
    let rolesString = '';
    for (const element of roles) {
        rolesString += (element.name.toString().replace('ROLE_', '') + ', ');
    }
    rolesString = rolesString.substring(0, rolesString.length - 2);
    return rolesString;
}