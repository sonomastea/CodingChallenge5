//U05721483
//Employee and Manager Calculation Challenge
//Step 1
class Employee {
    const(name, salary) {
        this.name=name 
        this.salary=salary
        console.log(`Employee name: ${this.name}), Monthly Salary:$
        {this.salary}`);
    }
    calculateAnnualSalary(){
        this.salary*12;

    }
       
  

}

//Step 2
class Manager extends Employee{
    constructor ( name,salary,department){
        super(name,salary);
        this.department=department;
}
}

calculateAnnualSalary() ; {
    const annualSalary=super.calculateAnnualSalary();
    const bonus = annualSalary*0.15;
    const totalAnnualSalary=  (annualSalary+bonus); 
    console.log(`Bonus: ${bonus}`);
    console.log(`The total annual salary with bonus is ${totalAnnualSalary}`);
}
const manager1 = new Manager(`Bob Ross`, 6600, `Digital Marketing`);
const manager2 = new Manager (`Debbie Little`, 7205, `Finance`);

console.log(`{manager1.name}'s Annual Salary: ${manager1.calculateAnnualSalary}`);
console.log(`${manager2.name}'s Annual Salary: ${manager2.calculateAnnualSalary});








