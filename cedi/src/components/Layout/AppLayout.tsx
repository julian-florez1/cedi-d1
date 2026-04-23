import { Outlet } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'
import { useState } from 'react'

function AppLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen overflow-hidden">

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className={`
        fixed md:static inset-y-0 left-0 z-30 h-full
        transition-transform duration-300
        md:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <SideNav onClose={() => setSidebarOpen(false)} />
            </div>

            <main className="flex-1 overflow-y-auto bg-gray-100 w-full">
                <div className="md:hidden p-4 bg-white shadow">
                    <button onClick={() => setSidebarOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="p-4">
                    <Outlet />
                </div>
            </main>

        </div>
    )
}

export default AppLayout