module.exports = function(app){

 var products = require('./../controllers/products.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/products/new')
	.get(products.new);
	//.post(users.requiresLogin, products.create);

  app.route('/products/all')
	.get(products.all);
  //.delete(users.requiresLogin, products.delete);
  
  app.route('/products/edit/:productId')
	.get(products.edit);
  //.delete(users.requiresLogin, products.delete);
   app.route('/products/:productId')
	.get(products.view)
	//.put(users.requiresLogin, products.update);
	 
  //.delete(users.requiresLogin, products.delete);
 app.route('/api/products')
	.get(products.list)
	.post(users.requiresLogin, products.create);

  app.route('/api/products/:productId')
	.get(products.read)
  .delete(users.requiresLogin, products.delete);

	app.route('/api/products/edit/:productId')
	.get(products.read)
	.put(users.requiresLogin, products.update);

app.param('productId', products.productByID);


}
