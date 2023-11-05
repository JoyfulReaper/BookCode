// This listing emphasizes the similarities between Typescript and C#, but is not the way that TS classes are usually defined
// export class TodoItem {
//     public id: number;
//     public task: string;
//     public complete: boolean;
//     public constructor(id: number, task: string, complete: boolean = false) {
//         this.id = id;
//         this.task = task;
//         this.complete = complete;
//     }
//     public printDetails(): void {
//         console.log(`${this.id}\t${this.task} ${this,this.complete ? "\t(complete)": ""}`);
//     }
// }
//Revised to use TS feat ures that allows more concise code
export class TodoItem {
    id;
    task;
    complete;
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this, this.complete ? "\t(complete)" : ""}`);
    }
}
