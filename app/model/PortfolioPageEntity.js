Ext.define('app.model.PortfolioPageEntity', {
    extend: 'Ext.data.Model',

    config: {
        fields: [ {
            name: 'slug', type: 'string'
        }, {
            name: 'portfolio', type: 'string'
        }, {
            name: 'image', type: 'string'
        }],

        idProperty: 'slug',

        belongsTo: 'PortfolioEntity',

        validations: [{
            type: 'presence', field: 'slug'
        }, {
            type: 'presence', field: 'portfolio'
        }]
    }
});