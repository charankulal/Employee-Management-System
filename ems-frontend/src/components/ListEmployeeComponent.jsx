// import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData=[
        {
            "id":1,
            "firstName":"Ramesh",
            "lastName":"Salyan",
            "email":"ramesh@gmail.com"
        },
        {
            "id":2,
            "firstName":"Naveen",
            "lastName":"Kumar",
            "email":"naveen@gmail.com"
        },
        {
            "id":3,
            "firstName":"Chandan",
            "lastName":"Kumar",
            "email":"chandan@gmail.com"
        }
    ]

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-2">List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>Employee Firstname</th>
                <th>Employee Lastname</th>
                <th>Employee Email ID</th>
            </tr>
        </thead>
        <tbody>
            {
                dummyData.map(employee=>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
