
(function(){
	var content = document.getElementById('content');
	var html = '';
	var data = {
		title: 'Really cool people',
		people: [
			{
				name: 'Joseph',
				age: 20,
				email: 'Joseph@gmail.com'
			},
			{   name: 'Joel Ross',
				age: 32,
				email: 'Joelross@gmail.com'
			},
			{
				name: 'Andrew',
				age: 45,
				email: 'Andrew@hotmail.com'
			}
		]
	};

    var template = Handlebars.compile(document.getElementById('contact-template').innerHTML);
    
	content.innerHTML = template(data);

})();