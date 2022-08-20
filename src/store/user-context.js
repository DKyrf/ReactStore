import { createContext } from "react"

const UserContext = createContext({
    usersArray: [],
    createOrder: (user, order) => {},
})

export default UserContext