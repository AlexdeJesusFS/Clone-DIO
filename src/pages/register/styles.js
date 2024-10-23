import styled from 'styled-components'
import { Button } from '../../components/Button'
 

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 110px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
`

export const Column = styled.div`
    width: 374px;
    height: 450px;
    flex-shrink: 0;
`

export const Title = styled.h2`
    width: 388px;
    left: 65px;
    margin-top: ${({margin_top}) => margin_top || '0px'};

    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    text-align: left;
`

export const Text = styled.p`
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    margin-bottom: 15px;
    width: 372px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
`

export const TextLogin = styled.p`
    color: ${({color}) => color || '#fff'};
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    ${({link}) => link &&`
        cursor: pointer;
        text-decoration: underline;
    `}
`

export const RegisterButton = styled(Button)`
    margin: 500px 0;
`
