import React from 'react'
import Navbar from './Navbar'
import "../styles/index.scss"

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Navbar />

        <div className="content">
            {children}
        </div>

        <footer>
            <p>Copyright &copy; 2022 Alan Jones</p>
        </footer>
    </div>
  );
}
