import { observer } from "mobx-react"
import store from "../../store/store.js"
import Login from "./Login"
import AdminHome from "./AdminHome"

const AdminPage = (observer(() => {


    return (
        <>
            {!store.isLogin ? <Login /> : <AdminHome/>}
        </>
    )
}))
  
  export default AdminPage