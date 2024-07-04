interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract: boolean;
    [propName: string]: any;
}


interface Directors extends Teacher {
    numberOfReports: number;
}

type printTeacherFunction = (firstName: string, lastName: string) => string;
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};


interface StudentClassInterface {
    firstName: string;
    lastName: string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }


    workOnHomework(): string {
      return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}


