class TeamMember{
    name;
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}




class Support extends TeamMember{   //ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor         
    designation = 'Support Web Dev';
    groupSupportTime;
    constructor(name, address, time){
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession(){         // class er vitore function likhte "function" keyword lekha lage na
        console.log(this.name, 'Start a support session');
    }           

}

class StudentCare extends TeamMember {
    designation = 'Care Web Dev';
    buildARoutine(){
        console.log(this.name, 'build a routine');
    }
}




class Neptune extends TeamMember{
    designation = 'App developer';
    codeEditor;
    constructor(name, address, editor){
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name, 'release Neptune version ', version);
    }
}



const human = new Support('human being','dhaka', `${11} AM`);
const aMan = new Support('a man of no where', 'who knows', `${11} PM`);
console.log(human);
console.log(aMan);

const alvi = new StudentCare('Alvee khan', 'Kuwet');
console.log(alvi);

const zaraa = new Neptune('zannatul shefa zaraa', 'dhaka', 'android studio');
console.log(zaraa);
zaraa.releaseApp('1.5.3');
