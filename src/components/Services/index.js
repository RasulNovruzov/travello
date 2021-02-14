import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../../images/svg-1.svg'

const Services =()=> {
    return(
        <ServicesContainer>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Servicesh2</ServicesH2>
                    <ServicesP>lorem2lkslkdcs sdc sdc s kj uvbvbs dc2</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Servicesh2</ServicesH2>
                    <ServicesP>lorem2lkslkdcs sdc sdc skj uvbvbs dc2</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Servicesh2</ServicesH2>
                    <ServicesP>lorem2lkslkdcs sdc sdc soinvoinvdfnkvdkj kj uvbvbs dc2</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;