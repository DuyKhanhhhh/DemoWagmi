import { searchProduct } from '@/redux/Slices/ProductSlice';
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';


export default function Header() {
    const dispatch = useDispatch();
    const handleSeach = (event) => {
        dispatch(searchProduct(event.target.value))
    }
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={'/home'} className="navbar-brand">Navbar</Link>
                    <form className="d-flex" role="search">
                        <input
                            onChange={handleSeach}
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>
                    <div>
                        <Link to={'/cart'}>
                            <FaShoppingCart />
                        </Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}
