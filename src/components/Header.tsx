import React from 'react'
import { FaShoppingCart } from "react-icons/fa";


export default function Header() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                    <div>
                        <FaShoppingCart />
                    </div>
                </div>
            </nav>

        </div>
    )
}
