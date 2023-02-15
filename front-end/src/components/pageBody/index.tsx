import React,{ useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    Container, 
    LeftContainer, 
    RightContainer, 
    Wrapper, 
    Image, 
    Text, 
    Paragraph,
    ProductContainer,
    ImageContainer,
    BoldText
} from "./styles"
import {KeyboardArrowLeft} from '@material-ui/icons';
//import {departmentList, productDetails} from "./PageInfo";
import {fetchProducts} from '../../slice/slice'

const PageBody = () => {
    const productsSold = useAppSelector(state => state.getProducts)
    const dispatch = useAppDispatch();
    console.log('productsSold:',productsSold.products);
    const displayProducts = JSON.parse(JSON.stringify(productsSold.products))

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])
    
    return (
        <Container>
            <LeftContainer>
                <BoldText>Department</BoldText >
                {displayProducts.map((item: { productName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>(
                    <Paragraph> <KeyboardArrowLeft/>{item.productName}</Paragraph>
                ))}
            </LeftContainer>
            <RightContainer>

                <ProductContainer>
                {displayProducts.map((item: { image: string | undefined; productName: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; sellerInfo: { firstName: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; }; startingPrice: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; bidEndDate: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; available: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; }) =>(
                    <Wrapper 
                    flexDirection="column"
                    >
                        <ImageContainer>
                            <Image src={item.image}/>
                        </ImageContainer>
                        <Text>{item.productName}</Text>
                        <Text fontSize=".8em" color="grey" >{item.sellerInfo.firstName}</Text>

                        <Wrapper 
                        alignItems="center"
                        margin=".3em 0 .3em 0"
                        >
                            <Text fontSize="1.3em">{item.startingPrice }</Text>
                            <Text color="grey">{ item.bidEndDate}</Text>
                        </Wrapper>
                        <Text>{item.available}</Text>

                    </Wrapper>
                ))}
                </ProductContainer>
            </RightContainer>
        </Container>
    )
}

export default PageBody