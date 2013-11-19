Ext.define('app.store.CategoriesData', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.SessionStorage'
    ],

    xtype: 'xtypeCategoriesDataStore',

    config: {
        model: 'app.model.CategoryEntity',
        storeId: 'idCategoriesDataStore',
        autoLoad: true,
        sorters: [{
            property: 'title',
            direction: 'ASC'
        }],
        proxy: {
            type: 'sessionstorage',
            id: 'categoriesproxy'
        },
        data: [{
            department: 'design',
            title: 'Print Design',
            slug: 'print-design'
        }, {
            department: 'design',
            title: 'Art Design',
            slug: 'art-design'
        }, {
            department: 'digital',
            title: 'PHP',
            slug: 'php'
        }, {
            department: 'digital',
            title: 'CMS',
            slug: 'cms'
        }]
    }
});