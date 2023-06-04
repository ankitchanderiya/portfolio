import React from 'react';

function Pricing(){
    return(
        <section id="pricing">

            <h2>QUALIFICATIONS</h2>

            <div class="row">
            <div class="col-lg-4 col-md-6 pricing-card">
                <div class="card">
                <div class="card-header">
                    <h3>Secondary (X)</h3>
                </div>
                <div class="card-body">
                    <h2>91.30%</h2>
                    <p>M.P Board</p>
                    <p>Year of completion: 2019</p>
                    {/* <p>Stream: Science</p> */}
                    <div class="d-grid gap-2">
                    <button type="button" class="btn btn-lg btn-block btn-primary btn2">View</button>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 pricing-card">
                <div class="card">
                <div class="card-header">
                    <h3>Senior Secondary (XII)</h3>
                </div>
                <div class="card-body">
                    <h2>91.40%</h2>
                    <p>M.P Board</p>
                    <p>Stream: Science</p>
                    <p>Year of completion: 2019</p>
                    <div class="d-grid gap-2">
                    <button type="button" class="btn btn-lg btn-block btn-primary btn2">View</button>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-4 pricing-card">
                <div class="card">
                <div class="card-header">
                    <h3>B.Tech</h3>
                </div>
                <div class="card-body">
                    <h2>8.6 CGPA</h2>
                    <p>MITS,GWALIOR</p>
                    <p>Computer Science and Engineering</p>
                    <p>2021 - 2025</p>
                    {/* <p>Unlimited App Usage</p> */}
                    <div class="d-grid gap-2">
                    <button type="button" class="btn btn-lg btn-block btn-primary btn2">View</button>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </section>
    );
}

export default Pricing;