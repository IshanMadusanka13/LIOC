package com.lioc.backend.util.enums;

public enum EmployeeRoles {
    INVENTORY_MANAGER("Inventory Manager"),
    SUPPLIER_MANAGER("Supplier Manager"),
    SALES_MANAGER("Sales Manager");

    private final String roleName;

    EmployeeRoles(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleName() {
        return roleName;
    }
}
