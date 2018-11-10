import React from 'react'
import { Link } from 'react-router-dom'

// function onlyText(sponsor) {
//     const link = sponsor.link;
//     const img = sponsor.img;

//     return !link && !img;
// }

// function onlyImage(sponsor) {
//     const link = sponsor.link;
//     const img = sponsor.img;

//     return img && !link;
// }

// function linkAndNotImage(sponsor) {
//     const link = sponsor.link;
//     const img = sponsor.img;

//     return link && !img;
// }

// function linkAndImage(sponsor) {
//     const link = sponsor.link;
//     const img = sponsor.img;

//     return link && img;
// }

export const Sponsor = ({sponsor}) => {
    const link = sponsor.link;
    const img  = sponsor.img;

    // const sponsorsToLineBreak = [
    //     'goteborgs-stad-kulturstod',
    //     'kulturradet',
    //     'kulturskolan'
    // ];
    
    const onlyText = !link && !img;
    const onlyImage = img && !link;
    const linkAndNotImage = link && !img;
    const linkAndImage = link && img;

    // const lineBreak = sponsorsToLineBreak.indexOf(sponsor.slug) > -1;
    
    if (onlyText) {
        return (
            <div id={sponsor.slug} className="sponsor only-text">
                <span>{sponsor.name}</span>
            </div>
        );
    }

    if (onlyImage) {
        return (
            <div id={sponsor.slug} className="sponsor">
                <img src={sponsor.img} alt=""/>
            </div>
        );
    }

    if (linkAndNotImage) {
        return (
            <div id={sponsor.slug} className="sponsor only-text">
                <Link to={sponsor.link}>
                    <span>{sponsor.name}</span>
                </Link>
            </div>
        );
    }

    if (linkAndImage) {
        return (
            <div id={sponsor.slug} className="sponsor">
                <Link to={sponsor.link}>
                    <img src={sponsor.img} alt=""/>
                </Link>
            </div>
        );
    }
}

export default Sponsor;
