Package.describe({
    name: 'pwix:collection-behaviours',
    version: '2.0.0',
    summary: 'Define and attach behaviours to collections',
    git: 'https://github.com/trychlos/pwix-collection-behaviours'
});

Package.onUse( function( api ){
    api.versionsFrom([ '1.0', '2.9.0', '3.0-rc.0' ]);

    api.use([
        'check',
        'coffeescript@1.0.1 || 2.7.0',
        'mongo'
    ]);

    api.addFiles([
        'lib/behaviours.coffee',
        'lib/mongo.coffee'
    ]);

    api.export( 'CollectionBehaviours' );
});
