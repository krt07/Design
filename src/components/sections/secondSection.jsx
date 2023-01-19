import React from 'react';
import * as Styled from './styled';

const SecondSection = () => {
    return (
        <>
            <Styled.SecondSection>
                <Styled.Welcome>Welcome</Styled.Welcome>
                <Styled.Introduction>Introduction</Styled.Introduction>
                <Styled.Content>
                    <Styled.ContentElement>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Styled.ContentElement>
                    <Styled.ContentElement>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </Styled.ContentElement>
                </Styled.Content>
            </Styled.SecondSection>
            <Styled.TitleSection>
                <Styled.TitleHeading>Acrylic painting</Styled.TitleHeading>
                <Styled.TitleSubHeading>Handpainting</Styled.TitleSubHeading>
            </Styled.TitleSection>
        </>
    );
};

export default SecondSection;
