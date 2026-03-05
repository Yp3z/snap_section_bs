import React from 'react'

export const About = () => {
    return (
        <>


            <div>
                <div class="container">
                    <div class="row">
                        <div className="col-12 bg-secondary mt-5 shadow-lg p-3 bg-body-tertiary rounded">
                            <h3 className='mt-3 ms-5'>Join our community</h3>
                            <p className='ms-5'>30-day, hassle-free money back guaratee</p>
                            <p className='ms-5'>Gain access to our full library of tutorials along with expert code reviews. <br />Perfect for any developers who are serious about honing their skills.</p>

                        </div>

                        <div class="col-6 bg-primary text-white shadow-lg p-5 rounded">
                            <h3 className='mt-3 ms-5'>Monthly Subscription</h3>
                            <h1 className='ms-5'>$29 <h4>per month</h4> </h1>
                            <p className='ms-5'>Full access for less than $1 a day</p>
                            <button className='ms-5' type="button" class="btn btn-success w-100">Sign Up</button>
                        </div>
                        <div class="col-6 bg-info shadow-lg p-3 rounded text-white">
                            <h3 className='mt-3 ms-5'>Why Us</h3>
                            <p className='ms-5'> Tutorials by industry expert <br /> Peer & expert code review <br /> Coding exercises <br />Access to our GitHub repos <br />Community decks <br />New videos every week</p>
                        </div>
                    </div>
                </div>

            </div>

        </>


    )
}