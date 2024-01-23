 abstract class TakePhotoClass {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        // some complex calculation
        return 8;
    }
 }

 class InstagramClass extends TakePhotoClass {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia!");
    }
 }

 const theGram = new InstagramClass("front", "portrait", 3);