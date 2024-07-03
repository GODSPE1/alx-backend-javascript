var student1 = {
    firstName: 'Jonathan',
    lastName: 'Ivan',
    age: 45,
    location: 'San Francisco',
};
var student2 = {
    firstName: 'Guillaume',
    lastName: 'Doe',
    age: 45,
    location: 'Columbia',
};
var studentsList = [
    student1,
    student2
];
var table = document.createElement('table');
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var row = studentsList_1[_i];
    var newRow = table.insertRow();
    var newCell = newRow.insertCell();
    newCell.textContent = row.firstName;
    newCell = newRow.insertCell();
    newCell.textContent = row.location;
}
document.body.appendChild(table);
