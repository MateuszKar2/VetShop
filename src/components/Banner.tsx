import logo from './../assets/images/logo.jpg';
import cat from './../assets/images/cat.jpg'
import dog from './../assets/images/dog.jpg'
import dog2 from './../assets/images/dog2.jpg'
import dog3 from './../assets/images/dog3.jpg'
import horse from './../assets/images/horse.jpg'
import horse2 from './../assets/images/horse2.jpg';

export const Logo = () => {

    return(
        <div>
            <img src={logo} alt="horse" loading="lazy" style={{ width: 100, height: 80 }}/>
        </div>
    )
}

export const Banner = () => {

    return(
        <div>
            <picture>
                <img src={horse2} alt="horse" loading="lazy" style={{ width: 600, height: 400 }}/>
            </picture>
        </div>
    )
}


export const Cat = () => {

    return(
        <div>
            <picture>
                <img src={cat} alt="horse" loading="lazy" style={{ width: 400, height: 300 }}/>
            </picture>
        </div>
    )
}
export const Dog = () => {

    return(
        <div>
            <picture>
                <img src={dog} alt="horse" loading="lazy" style={{ width: 340, height: 510 }}/>
            </picture>
        </div>
    )
}
export const Horse = () => {

    return(
        <div>
            <picture>
                <img src={horse} alt="horse" loading="lazy" style={{ width: 357, height: 446 }}/>
            </picture>
        </div>
    )
}
export const Dog3 = () => {

    return(
        <div>
            <picture>
                <img src={dog3} alt="horse" loading="lazy" style={{ width: 256, height: 160 }}/>
            </picture>
        </div>
    )
}
export const Dog2 = () => {

    return(
        <div>
            <picture>
                <img src={dog2} alt="horse" loading="lazy" style={{ width: 302, height: 403 }}/>
            </picture>
        </div>
    )
}