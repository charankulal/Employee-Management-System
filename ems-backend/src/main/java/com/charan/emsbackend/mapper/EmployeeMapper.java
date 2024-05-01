package com.charan.emsbackend.mapper;

import com.charan.emsbackend.dto.EmployeeDto;
import com.charan.emsbackend.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee)
    {
        return new EmployeeDto(
                employee.getId(), employee.getFirstName(), employee.getLastName(), employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto)
    {
        return new Employee(employeeDto.getId(), employeeDto.getFirstName(), employeeDto.getLastName(), employeeDto.getEmail());
    }
}
