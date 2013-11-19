Ext.define('app.model.DepartmentEntity', {
    extend: 'Ext.data.Model',

    config: {
        fields: [{
            name: 'title', type: 'string'
        }, {
            name: 'slug', type: 'string'
        }],

        idProperty: 'slug',

        //belongsTo: 'Company',

        hasMany: {
            model: 'CategoryEntity', name: 'category'
        },

        validations: [{
            type: 'presence', field: 'title'
        }, {
            type: 'presence', field: 'slug'
        }]
    }
});