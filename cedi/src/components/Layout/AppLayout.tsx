import { Outlet } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'

function AppLayout() {
    return (
        <div className='flex h-screen'>
            <SideNav />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout