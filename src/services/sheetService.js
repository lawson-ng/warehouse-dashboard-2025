// Thêm hàm này vào sheetService.js

// Lýu nhi?u ðõn hàng cùng lúc
export const batchSaveOrders = async (orders) => {
  if (!orders || orders.length === 0) return true;

  try {
    // Chuy?n ð?i format ð? phù h?p v?i Google Sheets
    const formattedOrders = orders.map(order => {
      // Chu?n b? d? li?u ðõn hàng ð? lýu vào Sheets
      return {
        id: order.id,
        name: order.name,
        customer: order.customer,
        transporter: order.transporter,
        phone: order.phone,
        amount_total: order.amount_total,
        cod_total: order.cod_total,
        shipment_id: order.shipment_id,
        shipment_code: order.shipment_code,
        ecom_recipient_code: order.ecom_recipient_code,
        date_order: order.date_order,
        detail: order.detail,
        address: order.address,
        district: order.district,
        city: order.city,
        ward: order.ward,
        note: order.note,
        sla_code: order.sla?.code,
        sla_level: order.sla?.level,
        deadline: order.deadline,
        time_left: order.timeLeft,
        status: order.status,
        assigned_staff_id: order.assigned_staff_id,
        last_updated: new Date().toISOString()
      };
    });

    // G?i batch request ð?n Google Sheets
    const response = await fetch(`${SHEETS_API_URL}?action=batchWrite&sheet=Orders`, {
      method: 'POST',
      body: JSON.stringify(formattedOrders)
    });

    const result = await response.json();
    return result.status === 'success';
  } catch (error) {
    console.error('Error saving batch orders:', error);
    return false;
  }
};

// Lýu nhi?u ho?t ð?ng cùng lúc
export const batchSaveActivities = async (activities) => {
  if (!activities || activities.length === 0) return true;

  try {
    // Ch? l?y các ho?t ð?ng chýa ðý?c x? l?
    const newActivities = activities.filter(a => !a.processed);

    if (newActivities.length === 0) return true;

    // G?i batch request ð?n Google Sheets
    const response = await fetch(`${SHEETS_API_URL}?action=batchWrite&sheet=Activities`, {
      method: 'POST',
      body: JSON.stringify(newActivities.map(a => ({ ...a, processed: true })))
    });

    const result = await response.json();
    return result.status === 'success';
  } catch (error) {
    console.error('Error saving batch activities:', error);
    return false;
  }
};
