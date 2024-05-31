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





