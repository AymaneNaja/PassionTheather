
import { createSlice } from "@reduxjs/toolkit"

const Navslice = createSlice({
    name: 'navslice',
    initialState: [
        { name: 'DashBoard', href: '/', current: true },
        { name: 'Discover', href: '/Discover', current: false },
        { name: 'Find', href: '/Find', current: false },
        { name: 'Genres', href: '/genres', current: false },
    ],
    reducers: {
        changeNavigation: (state, { payload }) => {
            const newNav = state.map((nav) => {
                if (nav.name === payload.name) {
                    return { ...nav, current: false }
                } else {
                    return { ...nav, current: true }
                }
            })
            return newNav
        }
    }

})

export const { changeNavigation } = Navslice.actions
export default Navslice.reducer