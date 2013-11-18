Ext.define('app.controller.Departments', {
    extend: 'app.controller.Base',

    require: [
        'app.view.Main',
        'app.view.MainPreApp',
        'app.view.departments.DepartmentsContainerView'
    ],

    config: {
        refs: {
            mainView: 'xtypeMainView',
            mainPreAppView: 'xtypeMainPreApp'
        },
        control: {},
        routes: {
            'departments': 'navigateDepartmentsView',
            'department/:id': 'navigateDepartmentView'
        }
    },

    init: function () {
        this.callParent(arguments);

        console.log('INIT: app.controller.Departments');
    },

    launch: function (app) {
        this.callParent(arguments);

        console.log('LAUNCH: app.controller.Departments');
    },

    navigateDepartmentsView: function() {
        console.log('NAV: departments');

        //console.log(this.getMainView());

        //Ext.Viewport.add(Ext.create('app.view.departments.DepartmentsContainerView'));

        //this.getMainView().add(Ext.create('app.view.departments.DepartmentsContainerView'));

//        var thisObj = this;
//
//        var stid = setTimeout(function(){
//            thisObj.getMainView().add({xtype: 'xtypeDepartmentsContainerView'});
//
//        }, 3000);
    },

    navigateDepartmentView: function(id) {
        console.log('NAV: department/:id');
    }
});
