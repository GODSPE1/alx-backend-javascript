interface Person {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Person = {
    firstName: 'Jonathan',
    lastName: 'Ivan',
    age: 45,
    location: 'San Francisco',
};

const student2: Person = {
    firstName: 'Guillaume',
    lastName: 'Doe',
    age: 45,
    location: 'Columbia',
}

var studentsList = [
    student1,
    student2
  ]
  
  var table = document.createElement('table');

  for (let row of studentsList) {
    let newRow = table.insertRow();

    let newCell = newRow.insertCell();
    
    newCell.textContent = row.firstName;

    newCell = newRow.insertCell();
    newCell.textContent = row.location;
  }

  document.body.appendChild(table);
