Задание 8

let users = new Map();
users.set("Муравей 1", "бревно 1");
users.set("Муравей 2", "бревно 2");
users.set("Муравей 3", "бревно 3");
users.set("Муравей 4", "бревно 4");
users.set("Муравей 5", "Бревно 5");

for (let user of users.keys()){
    console.log(user + " несет " + users.get(user));
}