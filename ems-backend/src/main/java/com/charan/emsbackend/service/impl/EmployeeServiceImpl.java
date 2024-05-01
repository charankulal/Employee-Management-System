package com.charan.emsbackend.service.impl;

import com.charan.emsbackend.dto.EmployeeDto;
import com.charan.emsbackend.entity.Employee;
import com.charan.emsbackend.mapper.EmployeeMapper;
import com.charan.emsbackend.repository.EmployeeRepository;
import com.charan.emsbackend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee= EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee=employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
