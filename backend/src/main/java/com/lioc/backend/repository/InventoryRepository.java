package com.lioc.backend.repository;

import com.lioc.backend.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<Inventory,Integer> {

    Inventory findByInventoryId(int inventoryId);
}
