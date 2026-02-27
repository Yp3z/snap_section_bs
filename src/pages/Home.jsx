import React from 'react'
import "../stylesheets/Home.css"

export const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6" >
                        <div className='d-flex flex-column justify-content-center h-100 gap-5'>
                            <div>

                            <h1>Make<br/>remote work</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis doloribus sed dolor deleniti officiis repellat, dolorum animi saepe neque recusandae </p>
                            <a href='http://www.jango.com' className="btn btn-dark">Learn more</a>
                            </div>

                            <div className='d-flex align-items-center gap-3'>
                                <img src="./public/clickup.jpeg" height="25" alt="" />
                                <img src="./public/linear.jpeg" height="25" alt="" />
                                <img src="./public/stripe.jpeg" height="25" alt="" />
                                <img src="./public/wiz.jpeg" height="25" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">

                                <img src="./public/ratas.png"  className="img-cropped" alt="" />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}