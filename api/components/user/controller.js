const TABLA = 'user';

module.exports = function (injectedStore){
    let store = injectedStore;
    if (!store) {
        store = require('./../../../store/dummy');
    }
 
    function list(){
        return store.list(TABLA);
    }

    function get(id){
        return store.get(TABLA, id);
    }

    function create(data){
        return store.upsert(TABLA, data);
    }

    return {
        list,
        get
    };
};
