// Created by EL-Basheer 09/08/2018 6:12pm GMT
class AishaBirthday {
    constructor(name, day, month, year){
        this.name = name;
        this.day = day;
        this.month = month;
        this.year = year;     
    }
    birthdayEvent(){
        let birthdayCard;
        if (typeof this.day === 'number' && typeof this.month === 'number' && typeof this.year === 'number') {
            birthdayCard = 'Opps! Its not a number, Try again.';
            return birthdayCard;
        } else if (typeof this.day === 'boolean' && typeof this.month === 'boolean' && typeof this.year === 'boolean'){
            birthdayCard = 'Opps! This is not a boolean value';
            return birthdayCard;
        } else {
            birthdayCard = `Happy Birthday ${this.name}, Wishing you Long Life, Allah Guidance, Protection and Prosperity!:)`;
            return birthdayCard;
        }
    }
}
let celebrate = new AishaBirthday('Aisha Humairah', 'Friday 24', 'August', 2018);
celebrate.birthdayEvent();
console.log(celebrate.birthdayEvent());
