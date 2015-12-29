   // Configurable paths for the application
   var appConfig = {
       app: '.',
       dist: 'dist',
       hostname: '0.0.0.0',
       port: 9009,
       url: function(file) {
           file = file || 'mocks/index.html';
           return 'http://' + this.hostname + ':' + this.port + '/' + file;
       },
       livereload: 35729,
       verbose: true
   };
   module.exports = {
       options: {
           port: '<%= appConfig.port %>',
           // Change this to '0.0.0.0' to access the server from outside.
           hostname: '<%= appConfig.hostname %>',
           livereload: '<%= appConfig.livereload %>',
           base: '<%= appConfig.app %>'
       },
       proxies: [{
           context: '/apps', // When the url contains this...
           host: 'madhu.noip.me', // Proxy to this host
           port: 8080,
           https: false,
           changeOrigin: true,
           xforward: false,
           headers: {
               "x-custom-added-header": "value"
           }
       }, {
           context: '/services/api/', // When the url contains this...
           host: 'madhu.noip.me', // Proxy to this host
           port: 8080,
           https: false,
           changeOrigin: true,
           xforward: false,
           headers: {
               "x-custom-added-header": "value"
           }
       }],
       livereload: {
           options: {
               open: {
                   target: appConfig.url()
               },
               middleware: function(connect, options) {
                   if (!Array.isArray(options.base)) {
                       options.base = [options.base];
                   }

                   var middlewares = [];
                   // Setup the proxy
                   middlewares.push(require("grunt-connect-proxy/lib/utils").proxyRequest);
                   // Serve static files.
                   options.base.forEach(function(base) {
                       middlewares.push(connect.static(base));
                   });
                   /* */
                   middlewares.push(connect.static('.tmp'));
                   middlewares.push(connect().use(
                       '/vendor',
                       connect.static('./vendor')
                   ));
                   middlewares.push(connect.static(appConfig.app));

                   return middlewares;
               }
           }
       },
       test: {
           options: {
               port: 7001,
               middleware: function(connect) {
                   return [
                       connect.static('.tmp'),
                       connect.static('test'),
                       connect().use(
                           '/vendor',
                           connect.static('./vendor')
                       ),
                       connect.static(appConfig.app)
                   ];
               }
           }
       },
       dist: {
           options: {
               open: true,
               base: 'dist'
           }
       }
   }