const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema
const orderSchema = new Schema({
  orderNumber: {
    type: String,
    unique: true,
    required: true,
  },
  itemId: {
    type: Schema.Types.ObjectId,
    ref: 'item', // Replace 'Item' with the actual model name for your items
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'customer', // Replace 'Customer' with the actual model name for your customers
    required: true,
  },
  deliveryVehicleId: {
    type: Schema.Types.ObjectId,
    ref: 'vehicle', // Replace 'DeliveryVehicle' with the actual model name for your delivery vehicles
    required: true,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
});


const OrderModel = mongoose.model('Order', orderSchema);


orderSchema.pre('save', async function (next) {
    if (this.isNew) {
      const lastOrder = await Order.findOne({}, {}, { sort: { orderNumber: -1 } });
      if (lastOrder) {
        const lastOrderNumber = parseInt(lastOrder.orderNumber, 10);
        const newOrderNumber = (lastOrderNumber + 1).toString().padStart(4, '0');
        this.orderNumber = newOrderNumber;
      } else {
        this.orderNumber = '0001';
      }
    }
    next();
  });

module.exports = {OrderModel};
