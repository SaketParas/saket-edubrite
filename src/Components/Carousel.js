import React, { Component } from 'react'

export class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.sekisui-sc.com/wp-content/uploads/bfi_thumb/Banners-Building-Abstract-okqiisx0u9gxau7z3js5zewykclkfla9kf7m7arh00.png" class="d-block w-100" alt="img" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cro-techsol.co.uk/wp-content/themes/fashion.photographer.ssl/images/timthumb/timthumb.php?src=https://cro-technology-solutions.runyourown.website/wp-content/uploads/sites/451/517/1578144853-world.jpeg&w=1300&h=200" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.marvell.com/content/dam/marvell/en/architecture/images/heroes/flc-mochi-hero.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel
