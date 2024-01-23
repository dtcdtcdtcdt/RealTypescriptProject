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

    private _courseCount = 1
    readonly city: string = "Long Beach"
    constructor(
        public email: string,
        public name: string
        ){
    }

    private deleteToken(){
        console.log("token deleted")
    }

    get getAppleEmail(): string{
        return `${this.email}`
    }
    get courseCount(): number{
        return this._courseCount;
    }
    // setters do not have a return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("blah example")
        }
        this._courseCount = courseNum;
    }
}

const daniel = new User("daniel@gmail.com", "Daniel")
// daniel.city = "Long Beach"
// daniel.name 