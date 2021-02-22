import {
    Box,
    CloseButton,
    Wrap,
    WrapItem,
    Circle,
    Text,
} from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Box align="right">
                <CloseButton size="lg" as={LinkRouter} to="/" />
            </Box>
            <Box mx={10} bg="transparent">
                <Wrap justify="center">
                    <WrapItem>
                        <Circle size="35px" bg="#fff" color="#16a085">
                            <Text fontSize="4xl" pb={1} align="center">
                                <strong>あ</strong>
                            </Text>
                        </Circle>
                    </WrapItem>
                    <WrapItem>
                        <Text fontSize="2xl" align="center">
                            <strong>
                                <em>Hiragana Quiz</em>
                            </strong>
                        </Text>
                    </WrapItem>
                </Wrap>
            </Box>
        </>
    );
};

export default Header;
