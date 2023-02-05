import React from 'react'
import { CardDetails } from '../components/card/'

const DetailsCourse = () => {
    return (
        <>


            <div className='text-center mb-5'>

                <header>
                    <hgroup>
                        <h1 className='font-italic mb-3'>The Road to Web3</h1>
                    </hgroup>
                </header>


                <img src="https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/62cc4c57a212fe57e2e0cbbb_road-to-web3.png" class="rounded mx-auto d-block h-50 w-50" alt="Cinque Terre"></img>

                <section>

                    <h6 className='mt-3 font-italic'>Describtions Of Course.</h6>

                    <p>Web3 University is partnering with Alchemy to bring you the best community-driven course in blockchain development.Web3 University is partnering with Alchemy to bring you the best community-driven course in blockchain development.Web3 University is partnering with Alchemy to bring you the best community-driven course in blockchain development.Web3 University is partnering with Alchemy to bring you the best community-driven course in blockchain development.</p>
                    <div className='mb-3'>
                        <button class="btn btn-outline-info my-2 my-sm-0 mr-3" type="submit">BUY NOW</button>
                        <a href="/addmodule" class="btn btn-outline-info">ADD MODULE</a>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Modules #1
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="form-group text-center mt-3 ">
                        <label for="exampleFormControlFile1">Add Module Video - </label>
                        <input type="file" class="text-center" id="exampleFormControlFile1"></input>
                    </div>
                                <CardDetails />
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Modules #2
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <CardDetails />
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Modules #3
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <CardDetails />
                            </div>
                        </div>
                    </div>
                    {/* <div className='mt-3'>
                    <button class="btn btn-outline-primary my-2 my-sm-0 mr-3" type="submit">ADD MODULE</button>
                    </div> */}
                </section>
            </div>
        </>
    )
}

export default DetailsCourse