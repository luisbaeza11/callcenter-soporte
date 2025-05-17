// Verificar rol de admin
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if(!currentUser || currentUser.role !== 'admin') {
        window.location.href = 'login.html';
    }
    
    // Mostrar formulario para agregar usuarios
    document.getElementById('addUserBtn').addEventListener('click', function() {
        document.getElementById('userForm').style.display = 'block';
    });
    
    // Guardar nuevo usuario
    document.getElementById('saveUserBtn').addEventListener('click', function() {
        const newUser = {
            username: document.getElementById('newUsername').value,
            password: document.getElementById('newPassword').value,
            role: document.getElementById('userRole').value
        };
        
        users.push(newUser);
        alert('Usuario agregado correctamente');
        document.getElementById('userForm').style.display = 'none';
        renderUsersList();
    });
    
    function renderUsersList() {
        // Lógica para mostrar lista de usuarios
    }
});
