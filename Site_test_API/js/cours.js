
var req=new XMLHttpRequest();
req.open("POST","https://lacliniqueduportable.vendhq.com/api/1.0/token",true);
req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
req.send("code=KOhmipfJPIfoNoRhFIYoFtEhah2uJ1pNX4qveKbG&client_id=IP59hTTaLwbJzwQy3lBXED7e3UZFEreT&client_secret=89hsyrksZwRdzpiWyEsohPxzv9GJm98h&grant_type=authorization_code&redirect_uri=http//screeb.io");
// Affiche la réponse reçue pour la requête
console.log(req.responseText);
