// Function to generate the unique final information row for each employee type based on the employee data being used
let roleUniqueData = (employee) => {
    if(employee.getRole() === "Manager") {
        return `Office #: ${employee.officeNumber}`
    } else if(employee.getRole() === "Engineer") {
        return `Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>`
    } else if(employee.getRole() === "Intern") {
        return `School: ${employee.school}`
    }
}

// Function to create the individual employee cards
let employeeCards = (employees) => {
    // Empty string that will ultimately include the html code for all employee cards
    let htmlString = "";
    // Loop through the array of employee objects and for each one generate the html code for their card object, then add that code to the htmlString variable for an ever growing string value
    employees.forEach((employee) => {
        htmlString = htmlString.concat(`
        <div class="card my-5 mx-4 border border-dark border-3" style="width: 18rem; height: 23rem">
            <div class="card-body bg-primary text-light">
                <h5 class="card-title text-center fs-2 fst-italic">${employee.name}</h5>
                <p class="card-text fs-3"><i class="fa-solid ${employee.getIcon()} fa-beat text-dark"></i> ${employee.getRole()}</p>
            </div>
            <ul class="list-group bg-secondary py-4 px-3 rounded-0" style="height: 15rem">
                <li class="list-group-item rounded-top border-dark">Employee ID: ${employee.id}</li>
                <li class="list-group-item border-dark">Email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
                <li class="list-group-item border-dark rounded-bottom">${roleUniqueData(employee)}</li>
            </ul>
        </div>`);
    })
    // Return the final complete string value
    return htmlString
}

// Main html generator function, calls for the employeeCards function to generate the individual cards for each employee
let generateHTML = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    
        <script src="https://kit.fontawesome.com/49fc406ccc.js" crossorigin="anonymous"></script>
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <nav class="navbar bg-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand mx-auto fs-1 fw-bold" href="#">My Team</a>
                </div>
            </nav>
        </header>
    
        <main>
            <div class="container p-5 d-flex flex-wrap justify-content-around">
    
                ${employeeCards(data)}
                
            </div>
        </main>
        
    </body>
    </html>`
}

// Exports the generateHTML function to allow data to be sent to it
module.exports = generateHTML;