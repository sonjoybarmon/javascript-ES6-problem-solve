const normalPerson = {
    name: 'sonjoy',
    age : 20,
    salary : 100000,
    getNameAge : function(){
        console.log(this.name,this.age);
    },
    getSalary : function(tk){
        this.salary = this.salary - tk ;
        return this.salary;
    }
};
normalPerson.getNameAge();
const result = normalPerson.getSalary(30000) +' tk';
console.log(result);

const vipPerson = {
    name: 'sree',
    age : 20,
    salary : 150000,
};
const applySalary = normalPerson.getSalary.apply(vipPerson,[2000]);
console.log(applySalary);

const callSalary = normalPerson.getSalary.call(vipPerson , 60000);          //just koto bad dite hobe oita dile hoi,
console.log(callSalary);
const vipSalary = normalPerson.getSalary.bind(vipPerson);
console.log(vipSalary(80000));

