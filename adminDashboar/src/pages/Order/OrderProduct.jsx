import {useSelector} from 'react-redux'
import './Order.css'
export default function OrderProducts(){
    const cart = useSelector((state) =>
    state.order.orders.find((orders) => orders._id ),
    );
    const userOrder=useSelector((state)=>
    state.user.users.find((users)=>users._id === cart.userId)
    )
    console.log(cart)
    return(
       <>
           <div className='container'>
             <div className="containers">

              <div className="userBox">
                  <p>Customer Order</p>
                  <h5>{userOrder.fullName}</h5>
                  <span>{userOrder.email}</span>
                  <img src={userOrder.img} alt="" />
              </div>
              <div className="boxBuy">
              {cart.products.map((item)=>
              <div className="productBuy" key={item._id}>
                  <div className="boxImg" >
                  <img src={item.img} alt="" />
                  </div>
                  <div className="boxTitle">
                      <h4>ProductID :{item._id}</h4>
                      <h4>Size:{item.size}</h4>
                      <h4>Price:{item.price}</h4>
                      <h4>Quantum:{item.quantum}</h4>
                  </div>
              </div>
              )}             
              <div className="total">
                  <h3>Quanity:{cart.quantity}</h3>
                  <h3>Total:{cart.total} $</h3>
              </div>
              </div>
             </div>
           </div>
       </>
    )
}