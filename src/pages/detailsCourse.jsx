import React from 'react'
import { Card } from '../components/card'

const DetailsCourse = () => {
    return (
        <>
            {/* <div class="card sticky-top text-center">
                <div class="card-body">
                    <h5 class="card-title">Publish Entire Course Video</h5>
                    <p class="card-text">You can publish own courses and make money easly.</p>
                    <a href="/dashboard/add-course" class="btn btn-primary">Add Videos</a>
                </div>
            </div> */}


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
                        <button class="btn btn-outline-info my-2 my-sm-0 mr-3" type="submit">ADD MODULE</button>
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
                                <Card />
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
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
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
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
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