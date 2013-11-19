Ext.define('app.model.CategoryEntity', {
    extend: 'Ext.data.Model',

    config: {
        fields: [{
            name: 'title', type: 'string'
        }, {
            name: 'slug', type: 'string'
        }, {
            name: 'department', type: 'string'
        }, {
            name: 'image', type: 'string'
        }],

        idProperty: 'slug',

        belongsTo: 'DepartmentEntity',

        validations: [{
            type: 'presence', field: 'title'
        }, {
            type: 'presence', field: 'slug'
        }]
    }
});