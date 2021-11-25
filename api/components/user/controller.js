const {nanoid} = require('nanoid');
const auth = require('./../auth');
const TABLA = 'user';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function create(body) {
        const user = {
            name: body.name,
            username: body.username,
        }

        if(body.id){
            user.id = body.id;
        }else{
            user.id = nanoid();
        }

        if(body.password || body.username){
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
            });
        }
        
        return store.upsert(TABLA, user);
    }
    
    function update(id, body){
        const rta = store.get(TABLA, id);
        return true;     
    }

    return {
        list,
        get,
        create,
        update,
    };
}

/*module.exports = (injectedStore) => {
    if(!injectedStore) injectedStore = require("../../../store/dummy");

    return {
        list: () => injectedStore.list('user'),
        get: id => injectedStore.get('user', id),
        create: data => injectedStore.upsert('user', data)
    };
};*/
