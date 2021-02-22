import { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Text,
    SimpleGrid,
    Button,
    Link,
    Circle,
    Center,
    ScaleFade,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import styles from "./MainMenu.module.css";

const MainMenu = () => {
    const [openApp, setOpenApp] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setOpenApp(true);
        }, 100);
    }, []);
    return (
        <Flex bg="#FAFAFA" justify="center" align="center" h="100vh">
            <ScaleFade initialScale={0.9} in={openApp}>
                <Box
                    bg="tomato"
                    borderRadius="lg"
                    maxWidth="400px"
                    m={3}
                    p={4}
                    color="white"
                    boxShadow="xl"
                    rounded="xl"
                >
                    <SimpleGrid columns={1} spacing={7}>
                        <Box mt={4} mx={10} bg="transparent">
                            <Center>
                                <Circle size="100px" bg="#fff" color="tomato">
                                    <Text
                                        className={styles.Logo}
                                        fontSize="6xl"
                                        pt={0}
                                        align="center"
                                    >
                                        <strong>森</strong>
                                    </Text>
                                </Circle>
                            </Center>

                            <Text fontSize="4xl" pt={0} align="center">
                                <strong>
                                    <em>Mori-Card</em>
                                </strong>
                            </Text>
                            <Text fontSize="sm" align="center">
                                0.1-beta
                            </Text>
                        </Box>
                        <Box bg="transparent" mx={4}>
                            <Text align="center">
                                Simple quiz app to learn Hiragana and Katakana
                                characters.
                            </Text>
                        </Box>
                        <Box align="center">
                            <SimpleGrid
                                columns={2}
                                color="tomato"
                                mx={4}
                                spacingX="20px"
                                spacingY="10px"
                            >
                                <Button
                                    as={LinkRouter}
                                    _hover={{
                                        bg: "#e74c3c",
                                        color: "#fff",
                                        shadow: "xl",
                                    }}
                                    shadow="md"
                                    size="lg"
                                    to="/hiragana"
                                >
                                    あ Hiragana
                                </Button>

                                <Popover>
                                    <PopoverTrigger>
                                        <Button
                                            _hover={{
                                                bg: "#e74c3c",
                                                color: "#fff",
                                                shadow: "xl",
                                            }}
                                            shadow="md"
                                            size="lg"
                                        >
                                            ア Katakana
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>
                                            Sorry, it isn't available yet!
                                        </PopoverHeader>
                                        <PopoverBody>
                                            Katakana quiz will be available
                                            soon.
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </SimpleGrid>
                        </Box>
                        <Box bg="transparent" mx={4} my={3}>
                            <Text align="center" fontSize="xs">
                                Crafted with ❤️ by{" "}
                                <Link
                                    href="https://adisaktijrs.github.io/"
                                    isExternal
                                >
                                    <strong>@adisaktijrs</strong>
                                </Link>
                            </Text>
                            <Text align="center" fontSize="xs">
                                with the power of React, React-Router, and
                                Chakra UI.
                            </Text>
                        </Box>
                    </SimpleGrid>
                </Box>
            </ScaleFade>
        </Flex>
    );
};

export default MainMenu;
