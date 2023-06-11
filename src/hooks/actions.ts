import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { superJobActions } from "../store/super-job/super.slice"

const actions = {
    ...superJobActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}