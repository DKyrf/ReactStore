import {useRef, useContext, useState} from "react"
import ElectronicsBTN from "../UI/ElectronicsBTN"
import UserContext from "../../store/user-context"
import OrderContext from "../../store/order-context"
import FormInput from "./FormInput"

const LoginForm = (props) => {
    const [isActive, setIsActive] = useState(false)

    const userCTX = useContext(UserContext);
    const orderCTX = useContext(OrderContext)

    const userName = useRef(null);
    const userMail = useRef(null);     
    const userCity = useRef(null); 
    const userAdress = useRef(null); 
    const userPhone = useRef(null); 

    const submitHandler = (event) => {
        event.preventDefault();

        const user = {
            id: `${userCity.current.value.toLowerCase()}_${Math.random()}`,
            name: userName.current.value,
            mail: userMail.current.value,
            city: userCity.current.value,
            adress: userAdress.current.value,
            phone: userPhone.current.value
        };

        userCTX.createOrder(user);
        orderCTX.resetHandler();

        event.target.reset()
        props.formController()
        
    };

    const handleValidity = isValid => setIsActive(isValid)

    const classButton = isActive 
    ? "" 
    : "invalid";


    return (

        <form onSubmit={submitHandler}>
            <FormInput validityHandler = {handleValidity} ref={userName} type="text" id="userName" content="User Name"/>
            <FormInput validityHandler = {handleValidity} ref={userMail} type="text" id="email" content="Email"/>
            <FormInput validityHandler = {handleValidity} ref={userCity} type="text" id="city" content="City"/>
            <FormInput validityHandler = {handleValidity} ref={userAdress} type="text" id="adress" content="Adress"/>
            <FormInput validityHandler = {handleValidity} ref={userPhone} type="text" id="phone" content="Phone number"/>

            <ElectronicsBTN disabled={!isActive} className={classButton}>MAKE ORDER</ElectronicsBTN>

        </form>
    )
}

export default LoginForm