"use client";

import React, { useState } from 'react'
import "@/css/Login.css"
import { Link, useNavigate } from 'react-router';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '0x0e890800061A283Ca1359fA251824DA1f6581dDf' && password === '123123') {
            navigate('/home');

        } else {
            alert('Tài khoản hoặc mật khẩu không đúng.');
        }
    };
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div
                            className="card bg-dark text-white"
                            style={{ borderRadius: "1rem" }}
                        >
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <form onSubmit={handleSubmit}>
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">
                                            Please enter your login and password!
                                        </p>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="text"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <label className="form-label" htmlFor="typeEmailX">
                                                Email
                                            </label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                id="typePasswordX"
                                                className="form-control form-control-lg"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX">
                                                Password
                                            </label>
                                        </div>
                                        <button
                                            className="btn btn-outline-light btn-lg px-5"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
