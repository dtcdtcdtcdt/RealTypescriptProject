class User {
    email: string
    name: string
    readonly city: string = "Long Beach"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const daniel = new User("daniel@gmail.com", "Daniel")
// daniel.city = "Long Beach"