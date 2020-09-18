import React from 'react';
import './sidebar.scss'

function Sidebar() {
    return (
        <aside className="navbar navbar-vertical navbar-vertical-fixed navbar-expand-xl">
            <div className="logo">
                <a href="/">
                    <span className="logo-icon">W</span>
                    <span>Wisent</span>
                </a>
            </div>
            <div className="sidebar pt-3">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-4 text-muted">
                    <span>Main Menu</span>
                </h6>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">
                            <span className="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path d="M9 22V14H15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                </svg>
                            </span>
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span className="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 20V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M12 20V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M6 20V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                            </span>
                            Statistics </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span className="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
<path
    d="M21 16V7.99999C20.9996 7.64927 20.9071 7.3048 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26999L13 2.26999C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.26999L4 6.26999C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.3048 3.00036 7.64927 3 7.99999V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.27002 6.96001L12 12.01L20.73 6.96001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
<path d="M12 22.08V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                            </span>
                            Products </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span className="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
<path
    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path
    d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                            </span>
                            Customers </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span className="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
<path d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
<path d="M8 2V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 6V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                            </span>
                            Tenants </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span className="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
<path
    d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path
    d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                            </span>
                            Reports </a>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="/"> Current month </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"> Last quarter </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
