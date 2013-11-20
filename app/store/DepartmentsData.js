Ext.define('app.store.DepartmentsData', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.SessionStorage'
    ],

    xtype: 'xtypeDepartmentDataStore',

    config: {
        model: 'app.model.DepartmentEntity',
        storeId: 'DepartmentDataStore',
        autoLoad: true,
        sorters: [{
            property: 'title',
            direction: 'ASC'
        }],
        proxy: {
            type: 'sessionstorage',
            id: 'departmentproxy'
        },
        data: [{
            title: 'Design',
            slug: 'design'
        }, {
            title: 'Digital',
            slug: 'digital'
        }]
    }
});