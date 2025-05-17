// Base de datos temporal de usuarios
const users = [
    { username: "admin", password: "admin123", role: "admin" }
];

// Función de login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        if(user.role === 'admin') {
            window.location.href = 'admin-panel.html';
        } else {
            window.location.href = 'index.html';
        }
    } else {
        alert('Credenciales incorrectas');
    }
});

// Función de logout
document.getElementById('logoutBtn')?.addEventListener('click', function() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
});
