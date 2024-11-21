package com.lioc.backend.service;

import com.lioc.backend.model.Customer;
import com.lioc.backend.repository.CustomerRepository;
import jakarta.transaction.Transactional;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Log4j2
@Service
@Transactional
public class CustomerService {

    private CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    //Find all
    public List<Customer> getAll() {
        List<Customer> customers = customerRepository.findAll();
        return customers;
    }

    //Search
    public Customer searchCustomer(String nic) {
        Customer c = customerRepository.findByNic(nic);
        if (c == null) {
            log.error("Searched for a non-existing customer");
            throw new NoSuchElementException("No Customer Found with the NIC : " + nic);
        } else {
            log.info("Searched for a customer");
            return c;
        }
    }

    //Insert
    public String addCustomer(Customer customer) {
        Customer c = customerRepository.findByNic(customer.getNic());
        if (c == null) {
            customerRepository.save(customer);
            log.info("Added new customer");
            return "Customer added Successfully";
        } else {
            log.error("Inserted an already existing customer");
            throw new NoSuchElementException("customer found with the NIC : " + customer.getNic());
        }
    }

    //update
    public String updateCustomer(Customer customer, String nic) {
        try {

            Customer c = new Customer();
            c.setMobile(customer.getMobile());

            customerRepository.save(c);
            log.info("Updated a customer");
            return "Customer Updated Successfully";
        } catch (IllegalArgumentException e) {
            log.error("Tried to update a non-existing customer");
            throw new NoSuchElementException("customer not found with the NIC : " + customer.getNic());
        }
    }

    //Delete
    public String deleteCustomer(String nic) {
        Customer c = customerRepository.findByNic(nic);
        if (c == null) {
            throw new NoSuchElementException("customer not found with the id : " + nic);
        } else {
            customerRepository.delete(c);
            return "Customer Deleted Succesfully";
        }
    }

}
