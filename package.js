Package.describe({
    summary: "A Javascript MVW Framework"
});

Package.on_use( function(api) {
    api.use('deps');

    api.add_files(['angular.js','client.js'], 'client');
    api.add_files('server.js', 'server');
});