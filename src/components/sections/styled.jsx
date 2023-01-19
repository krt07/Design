import styled from 'styled-components';
import sectionBackgroundImg from '../images/background/backgroundImage.png';
import sectionBgImg from '../images/background/ sectionBgImg/sectionbg.png';

export const TopSection = styled.section`
    padding: 54px 0 0 0;
    max-width: 100%;
    height: auto;
    background: url(${sectionBackgroundImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    object-fit: cover;

    @media only screen and (min-width: 768px) {
        /* For  tablet: */
    }

    @media only screen and (min-width: 1024px) {
        /* For laptop: */
    }

    @media only screen and (max-width: 767px) {
        /* For mobile: */
    }
`;
export const HeadImagesWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
`;

// }

export const MenuImageWrapper = styled.div``;

export const Menu = styled.img`
    width: 37px;
    height: 16px;
`;

export const MiddleMenuImageWrapper = styled.div``;

export const ArtImage = styled.img`
    width: 203px;
    height: 98px;
`;

export const ShopBasketImageWrapper = styled.div``;
export const ShopImg = styled.img`
    width: 13px;
    height: 13px;
    background: rgb(41, 40, 40);
    padding: 20px;
    border-radius: 40px;
`;

export const HeadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2.88px;
    margin-top: 80px;
`;

export const Heading = styled.div`
    display: inline-block;
    margin-left: 10px;
`;

export const Description = styled.p`
    color: #fff;
    font-size: 22px;
    font-family: 'Graphik';
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    text-transform: uppercase;

    @media only screen and (max-width: 767px) {
        font-size: 16px;
        text-align: center;
    }
`;

export const Title = styled.h2`
    font-size: 71px;
    margin: 10px 0px 0 0;
    letter-spacing: normal;
    font-stretch: normal;
    font-family: 'Graphik';
    font-weight: bold;
    font-style: normal;
    text-transform: uppercase;
    color: #d8cf91;

    @media only screen and (max-width: 767px) {
        font-size: 52px;
        text-align: center;
    }
`;

export const ButtonImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    position: relative;
    text-align: center;
    margin-top: 28px;
`;

export const ButtonLink = styled.a`
    color: #fff;
`;

export const ButtonImage = styled.img`
    max-width: 280px;
    height: 60px;

    @media only screen and (max-width: 767px) {
        max-width: 260px;
        height: 60px;
    }
`;

export const SpanText = styled.span`
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.31;
    letter-spacing: normal;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    font-family: 'Graphik';
    font-size: 16px;
    font-weight: bold;
`;

export const SocialIconWrapper = styled.div`
    position: relative;
    top: 0;
    right: 0;
`;

export const FaceBookIconWrapper = styled.a``;

export const FacebookIcon = styled.img`
    width: 13px;
    height: 25px;
    margin: 0 5.9px 47.2px 5.9px;
`;

export const InstagramIconWrapper = styled.a``;

export const InstagramIcon = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
`;

export const ArrowWrapper = styled.div`
    width: 57px;
    height: 69px;
    margin: 187px 437px 0 504px;
    opacity: 0.6;
`;

export const Arrow = styled.img`
    width: 23px;
    height: 12px;
    background: rgb(41, 40, 40);
    padding: 20px 10px;
    border-radius: 60px;
    position: absolute;
    bottom: 0;
    margin: auto;
    right: 0;
    left: 0;
`;
export const SecondSection = styled.section`
    max-width: 100%;
    padding: 19px 35px 142px 139px;
    object-fit: contain;
    background-image: url(${sectionBgImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
export const Welcome = styled.h2`
    /* width: 392px;
    height: 76px; */
    text-transform: uppercase;
    font-size: 76px;
    margin: 0 0 0 0;
    line-height: 0.51;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #1c1b1c;
`;

export const Introduction = styled.h2`
    /* width: 880px;
    height: 84px; */

    font-size: 84px;
    margin: 0 0 0 0;
    display: block;
    font-weight: normal;
    line-height: 0.96;
    letter-spacing: 16px;
    text-align: center;
    font-family: 'Graphik';
    font-weight: bold;
    font-stretch: normal;
    color: #4b4b4b;
    text-align: center;
    text-transform: uppercase;
`;
export const ContentElement = styled.p`
    font-family: Graphik;
    max-height: 306px;
    font-size: 22px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.77;
    letter-spacing: normal;
    text-align: left;
    color: #d8d8d8;
`;

export const Content = styled.div`
    border-left: solid 4px #d8cf91;
`;
export const TitleSection = styled.div`
    padding: 67px;
    background-color: #161515;
    max-width: 100%;
`;

export const TitleSubHeading = styled.h2`
    font-size: 84px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 16px;
    text-align: center;
    font-family: Graphik;
    font-weight: bold;
    font-stretch: normal;
    color: #4b4b4b;
`;
export const TitleHeading = styled.h2`
    font-size: 74px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    text-transform: uppercase;
    color: #1c1b1c;
`;
