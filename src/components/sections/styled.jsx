import styled from 'styled-components';
import sectionBackgroundImg from '../images/background/backgroundImage.png';

export const Section = styled.section`
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
