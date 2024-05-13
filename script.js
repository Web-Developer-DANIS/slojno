
let users = {};


for (let i = 1; i <= 10; i++) {
    let id = i;
    

    let name = prompt(`Введите имя пользователя ${i}:`);
    
    // Возраст пользователя
    let age = prompt(`Введите возраст пользователя ${i}:`);
    
    while (!name.trim()) {
        name = prompt(`Имя не может быть пустым. Введите имя пользователя ${i}:`);
    }
    

    users[id] = {
        Имя: name,
        Возраст: age
    };
}


for (let id in users) {
    console.log(`Пользователь - ${id}`);
    console.log(`Имя - ${users[id].Имя}`);
    console.log(`Возраст - ${users[id].Возраст}`);
}


console.log(users);
