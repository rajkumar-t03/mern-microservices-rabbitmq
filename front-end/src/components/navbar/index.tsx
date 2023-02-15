import React from "react";
import {
  Container,
  Logo,
  Text,
  Wrapper,
  Searchbox,
  Select,
  SearchIconWrapper,
} from "./styles";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  ArrowDropDown,
  RoomOutlined,
} from "@material-ui/icons";
import logo from '../../assets/logo.png'

const Navbar:React.FC = () => {
    return (
        <>
            <Container>
                    <Logo src={logo}/>

                    <Wrapper flexDirection="row"
                    alignItems="center">
                        <RoomOutlined/>


                        <Wrapper >
                        <Text fontSize=".7em">Deliver in 
                        </Text>
                        <Text >Chennai</Text>
                        </Wrapper>
                    </Wrapper>

                 {/* the search button */}
                    <Select>
                    <option value="All">All</option>
                    </Select>
                    <Searchbox/>
                    <SearchIconWrapper>
                        <SearchOutlined/>
                    </SearchIconWrapper>

                    <Wrapper>
                        <Text fontSize=".7em">Hello, Sign   in</Text>
                        <Wrapper flexDirection="row" alignItems="center">
                            <Text>Account & Lists </Text>
                            <ArrowDropDown/>
                        </Wrapper>
                    </Wrapper>


                    <Wrapper>
                        <Text fontSize=".7em">Returns</Text>
                        <Text >& Orders</Text>
                    </Wrapper>

                    <Wrapper flexDirection="row"
                    alignItems="center">
                        <Wrapper alignItems="center">
                        <Text color="#ff9900">0</Text>
                        <ShoppingCartOutlined/>
                        </Wrapper>

                        <Text>Cart</Text>
                    </Wrapper>


              </Container>
        </>
    )
}

export default Navbar