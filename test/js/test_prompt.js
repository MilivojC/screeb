var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP) --> évite l'apparition de javascript malicieux
    fs = require('fs'),  // ????????????? Utilisé nulle part
    prompt = require('prompt');


  var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-\*]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        hidden: true,
        replace: '8======D',
        default: 'kikou'
      }
    }
  };
 
  // 
  // Start the prompt 
  // 
  prompt.start();
 
  // 
  // Get two properties from the user: email, password 
  // 
  prompt.get(schema, function (err, result) {
    // 
    // Log the results. 
    // 
    console.log('Command-line input received:');
    console.log('  name: ' + result.name);
    console.log('  password: ' + result.password);
  });