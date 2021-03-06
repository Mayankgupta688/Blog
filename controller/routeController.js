(function(routeConroller) {

  routeConroller.count = 0;

	routeConroller.init = function(app) {

		app.get('/', function(req, res) {
      routeConroller.count++;
		  res.render('index', {'count': routeConroller.count});
		});

		app.get('/about', function(req, res) {
      routeConroller.count++;
		  res.render('about', { 'count': routeConroller.count });
		});

    app.get('/iife-immediately-invoked-function-expressions-javascript-singleton-design-pattern-closures', function(req, res) {
      routeConroller.count++;
      res.render('iife', { 'count': routeConroller.count,'comment': 'IFEE' });
    });

    app.get('/javascript-module-pattern-design-singleton', function(req, res) {
      routeConroller.count++;
      res.render('module', { 'count': routeConroller.count, 'comment': 'Module'});
    });

    app.get('/singleton-design-pattern-javascript-module', function(req, res) {
      routeConroller.count++;
      res.render('singleton', { 'count': routeConroller.count, 'comment': 'Singleton'});
    });

    app.get('/function-and-variable-hoisting-javascript-closures', function(req, res) {
      routeConroller.count++;
      res.render('hoisting', { 'count': routeConroller.count, 'comment': 'Closures'});
    });

    app.get('/prototype-pattern-javascript-function-prototype', function(req, res) {
      routeConroller.count++;
      res.render('prototype', { 'count': routeConroller.count, 'comment': 'Prototype'});
    });

    app.get('/javascript-scopes-function-scope-global-scope', function(req, res) {
      routeConroller.count++;
      res.render('scopes', { 'count': routeConroller.count, 'comment': 'Scope'});
    });

    app.get('/create-javascript-object-string-literal-new-keyword-new-object', function(req, res) {
      routeConroller.count++;
      res.render('objects', { 'count': routeConroller.count, 'comment': 'NewObject'});
    });

    app.get('/delete-keyword-javascript-properties-object', function(req, res) {
      routeConroller.count++;
      res.render('delete', { 'count': routeConroller.count, 'comment': 'Delete'});
    });

     app.get('/javascript-function-chaining-jquery-chaining', function(req, res) {
      routeConroller.count++;
      res.render('chaining', { 'count': routeConroller.count, 'comment': 'Chaining'});
    });

     app.get('/node-aynch-execution-single-threaded-event-loop-callback-non-blocking-architecture', function(req, res) {
      routeConroller.count++;
      res.render('node', { 'count': routeConroller.count, 'comment': 'Node'});
    });

     

	};

})(module.exports);
