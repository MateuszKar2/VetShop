// Strona główna

import { Banner, Logo } from "../components/Banner"
import { Blog } from "../components/Blog"
import { FoodAnimals } from "../components/FoodAnimals"
import { Newsletter } from "../components/Newsletter"
import { OurServices } from "../components/OurServices"
import { Testimonials } from "../components/Testimonials"
import { foodAnimals } from "../utils/data"


export const HomePage = () => {



    return(
        <>
            <Logo />
            <h2>"Your pet's health in the best hands"</h2>
            <Banner />
            <button>Go to the store</button>

            {/* section */}
            <div>Specjal offers</div>
            {/* karma, akcesoria, produkty w wyjątkowej cenie */}

            <FoodAnimals foods={foodAnimals}/>

            <div>
                {/* section -umów wizyte*/}
                <OurServices />


                {/* section -opinie klijentów*/}
                <Testimonials />
            </div>

                {/* section */}
                <Blog />

                {/* section */}
                <Newsletter />
        </>
    )
}





// Nagłówek: Logo + Menu nawigacyjne

// Baner powitalny: Duży obrazek i CTA (np. "Zobacz nasze produkty")

// Sekcja z popularnymi produktami: Obrazki + CTA

// Sekcja z usługami: Opis i linki do szczegółów

// Opinie klientów: Cytaty/recenzje

// Blog: Artykuły/porady

// Newsletter: Formularz subskrypcji

// Footer: Kontakt, linki do ważnych stron => Footer