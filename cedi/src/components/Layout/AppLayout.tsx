import { Outlet } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'

function AppLayout() {
    return (
        <div className="flex h-screen">
            <SideNav />
            <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout