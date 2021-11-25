const db = {
    'user':[
        {id: '1', name: 'Alej'},
        {id: '2', name: 'Pablo'},
        {id: '3', name: 'Amelie'},
    ]
};

async function list(tabla){
    return db[tabla];
}

async function get(tabla, id){
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data){
    if(!db[tabla]){
        db[tabla] = [];
    }
    db[tabla].push(data);
    console.log('dummy', db);
}
async function remove(tabla, id){
    return true;
}
async function update(){
    return true;
}

module.exports = { list, get, upsert, remove, update }
