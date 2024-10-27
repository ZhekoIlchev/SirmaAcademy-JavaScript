class Employee {
  constructor(name, salary, position, department) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }
}

class Company {
  departments = new Map();

  addEmployee(name, salary, position, department) {
    let employee = new Employee(name, salary, position, department);

    if (!this.departments.has(employee.department)) {
      this.departments.set(department, [employee]);
    } else {
      this.departments.get(department).push(employee);
    }
  }

  bestDepartment() {
    let bestDepartment;
    let bestAvgSalary = 0;

    for (let [key, value] of this.departments) {
      let currentAvgSalary = 0;

      for (const employee of value) {
        currentAvgSalary += employee.salary;
      }

      currentAvgSalary = currentAvgSalary / value.length;

      if (currentAvgSalary > bestAvgSalary) {
        bestAvgSalary = currentAvgSalary;
        bestDepartment = key;
      }
    }

    console.log(`Best department is: ${bestDepartment}`);
    console.log(`Average salary: ${bestAvgSalary}`);

    let employees = this.departments.get(bestDepartment);
    employees.sort((a, b) => {
      if (a.salary !== b.salaru) {
        return b.salary - a.salary;
      }

      return a.name.localCompare(b.name);
    });

    let employeesInfo = "";
    for (const employee of employees) {
      employeesInfo += `${employee.name} ${employee.salary} ${employee.position}\n`;
    }

    return employeesInfo;
  }
}

let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "support", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
console.log(c.bestDepartment());