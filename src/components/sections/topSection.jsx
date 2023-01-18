import React from 'react';
import headImg from '../images/tabImg/tab.png';
import subArt from '../images/artByRaff/artByRaff.png';
import shopBasket from '../images/shopBasket/shop.png';
import buttonImg from '../images/buttons/buttonImg.png';
import facebookImg from '../images/facebook/facebook.png';
import instagramImg from '../images/instagram/instagram.png';
import arrow from '../images/arrows/arrows.png';
// import {
//     StyledSection,
//     StyledHeadImg,
//     StyledMenuImgTop,
//     StyledSubMenuImg,
//     StyledHeadMiddleImg,
//     StyledSubArtImg,
//     StyledHeadShopBasketImg,
//     StyledShopImg,
//     Heading,
//     Sentence,
//     H2Color,
//     Button,
//     ImgButton,
//     TextSpan,
//     SocialIcon,
//     Facebook,
//     Instagram,
//     Arrow,
// } from './styled';
import * as Styled from './styled';

const TopSection = () => {
    return (
        <Styled.Section>
            <Styled.HeadImagesWrapper>
                <Styled.MenuImageWrapper>
                    <Styled.Menu src={headImg} alt="Menu" />
                </Styled.MenuImageWrapper>
                <Styled.MiddleMenuImageWrapper>
                    <Styled.ArtImage src={subArt} alt="art by raff" />
                </Styled.MiddleMenuImageWrapper>
                <Styled.ShopBasketImageWrapper>
                    <Styled.ShopImg src={shopBasket} alt="shop" />
                </Styled.ShopBasketImageWrapper>
            </Styled.HeadImagesWrapper>

            <Styled.HeadingWrapper>
                <Styled.Heading>
                    <Styled.Description>
                        technique in which pigments are mixed with hot
                    </Styled.Description>
                    <Styled.Title>Acrylic painting</Styled.Title>
                </Styled.Heading>
            </Styled.HeadingWrapper>

            <Styled.ButtonImageWrapper>
                <Styled.ButtonLink href="https://www.w3schools.com/">
                    <Styled.ButtonImage src={buttonImg} alt="button" />
                    <Styled.SpanText>ABOUT ME</Styled.SpanText>
                </Styled.ButtonLink>
            </Styled.ButtonImageWrapper>

            <Styled.SocialIconWrapper>
                <Styled.FaceBookIconWrapper href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjc0MDE4NDczLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D">
                    <Styled.FacebookIcon src={facebookImg} alt="facebook" />
                </Styled.FaceBookIconWrapper>
                <Styled.InstagramIconWrapper href="https://www.instagram.com/">
                    <Styled.InstagramIcon src={instagramImg} alt="instagram" />
                </Styled.InstagramIconWrapper>
            </Styled.SocialIconWrapper>

            <Styled.ArrowWrapper>
                <Styled.Arrow src={arrow} alt="dropDown" />
            </Styled.ArrowWrapper>
        </Styled.Section>
    );
};

export default TopSection;
