import React from 'react';

const About = () => {
    return (
        <><><header>
            <h1>PS Design</h1>
        </header><nav class="navbar navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="../../index.html">P.S. Design</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                                <a href="../../index.html">Menu</a>
                            </h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Projects
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                        <li><a class="dropdown-item" href="./conceptual.html">Conceptual</a></li>
                                        <li><hr class="dropdown-divider"></></li>
                                        <li><a class="dropdown-item" href="./public.html">Public</a></li>
                                        <li><hr class="dropdown-divider"></></li>
                                        <li><a class="dropdown-item" href="./educational.html">Educational</a></li>
                                        <li><hr class="dropdown-divider"></></li>
                                        <li><a class="dropdown-item" href="./residential.html">Residential</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav></><div class="about-section">
                <h1>About Me</h1>
                <p>Some text about who we are and what we do.</p>
            </div><div class="card-group">

                <div class="card">
                    <div class="grow">
                        <img src="../img/j1.jpg" alt="Jane" style="width:100%">
                        </></div>
                    <div class="container">
                        <h2>Julijana Petrovic</h2>
                        <p class="title">CEO & Founder</p>
                        <p>We will add something here later</p>
                        <p>julijana@email.com</p>
                        <form method="get" action="contact.html">
                            <p><button class="button">Contact</button></p>
                        </form>
                    </div>
                </div>

                <div class="card">
                    <div class="grow">
                        <img src="../img/n1.jpg" alt="Jane" style="width:100%">
                        </></div>
                    <div class="container">
                        <h2>Nikola Stamenkovic</h2>
                        <p class="title">Levo smetalo</p>
                        <p>We will add something here later</p>
                        <p>nikola@email.com</p>
                        <form method="get" action="contact.html">
                            <p><button class="button">Contact</button></p>
                        </form>
                    </div>
                </div>

            </div><div class="row">
                <div class="column">
                    <div class="card">
                        <div class="grow">
                            <img src="../img/n1.jpg" alt="Jane" style="width:100%">
                            </></div>
                        <div class="container">
                            <h2>Nikola Stamenkovic</h2>
                            <p class="title">Levo smetalo</p>
                            <p>We will add something here later</p>
                            <p>nikola@email.com</p>
                            <form method="get" action="contact.html">
                                <p><button class="button">Contact</button></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>

    )
}

export default About;