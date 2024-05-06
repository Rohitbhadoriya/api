class OrderController {
    static newOrder = async (req, res) => {
        try {
            console.log(req.body)
            const { shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body
            const order = await OrderModel.create({
                shippingInfo,
                orderItems,
                paymentInfo,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice,
                paidAt: Date.now(),
                user: req.user._id

            })
            res
                .status(201)
                .json({ status: "success", message: "Order added Successfully 😃🍻", order });
        } catch (err) {
            console.log(err)
        }
    }
}
module.exports = OrderController;