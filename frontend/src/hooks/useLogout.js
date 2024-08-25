import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout =()=>{
    const {dispatch} = useAuthContext()
    const {dispatch: workoutsDispatch} = useWorkoutsContext()
    const logout =()=>{
        //remove user form stotage

        localStorage.removeItem("user")

        dispatch({ type: 'LOGOUT' })
        workoutsDispatch({type:'SET WORKOUT',payload:null})


    }
    return {logout}
}