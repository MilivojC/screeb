
var jquery = require('jQuery');
/*var json = jquery.getJSON("tickets.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});
*/

//var json = require('JSON');
//var json_file = require('./tickets.json'); //(with path)
//$.getJSON('./tickets.json');
// console.log(json)

//JSON.parse(json_file);


$(function() {
  $.getJSON('tickets.json',function(data){
/*    $('#zone').append('Prénom : ' + data.Prenom + '<br>');
    $('#zone').append('Nom : ' + data.Nom + '<br>');
    $('#zone').append('Age : ' + data.Age + '<br>');*/
  });
});