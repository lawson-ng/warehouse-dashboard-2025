import React from "react";
import OrderStaffAllocation from "./components/OrderStaffAllocation";
import WarehouseDashboard from "./components/enhanced-warehouse-dashboard";
import WarehouseRealTimeDashboard from "./components/Real-Time-Dashboard";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto p-4">
      <WarehouseDashboard />
      <OrderStaffAllocation />
      <WarehouseRealTimeDashboard />
    </div>
  );
}

export default App;
