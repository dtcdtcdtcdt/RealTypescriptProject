// class User {
//     public email: string
//     // private can only be used within the class
//     private name: string
//     private readonly city: string = "Long Beach"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

// How it's generally done, without this keywords
class User {
    constructor(public email: string, public name: string) {
    }
}

const daniel = new User("daniel@gmail.com", "Daniel")
// daniel.city = "Long Beach"
// daniel.name 