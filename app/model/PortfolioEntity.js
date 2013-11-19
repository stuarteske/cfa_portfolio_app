Ext.define('app.model.PortfolioEntity', {
    extend: 'Ext.data.Model',

    config: {
        fields: [ {
            name: 'slug', type: 'string'
        }, {
            name: 'title', type: 'string'
        }, {
            name: 'category', type: 'string'
        }, {
            name: 'image', type: 'string'
        }, {
            name: 'selectorImage', type: 'string'
        }],

        idProperty: 'slug',

        belongsTo: 'CategoryEntity',

        hasMany: {
            model: 'PortfolioPageEntity', name: 'portfolioPage'
        },

        validations: [{
            type: 'presence', field: 'title'
        }, {
            type: 'presence', field: 'slug'
        }, {
            type: 'presence', field: 'category'
        }]
    }
});