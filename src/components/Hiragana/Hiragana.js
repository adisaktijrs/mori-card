import { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Text,
    SimpleGrid,
    Button,
    Link,
    Circle,
    Avatar,
    Center,
    ScaleFade,
    Wrap,
    WrapItem,
    LinkBox,
    LinkOverlay,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Select,
    CloseButton,
} from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import { hiragana1 } from "../../data/hiragana";

const MainMenu = () => {
    const [openApp, setOpenApp] = useState(false);
    const [gameOption, setGameOption] = useState({
        level: 1,
        time: 5,
        question: 10,
    });
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        setTimeout(() => {
            setOpenApp(true);
        }, 200);
    }, []);

    const handleTime = (e) => {
        const name = e.target.name;
        const time = parseInt(e.target.value);
        setGameOption({ ...gameOption, [name]: time });
    };

    const handleQuestion = (e) => {
        const name = e.target.name;
        const question = parseInt(e.target.value);
        setGameOption({ ...gameOption, [name]: question });
    };

    const randomKana = (level) => {
        return Math.floor(Math.random() * Math.floor(level.length)) ;
    }

    const kanaLevel1 = randomKana(hiragana1);

    return (
        <Flex bg="#FAFAFA" justify="center" align="center" h="100vh">
            <ScaleFade initialScale={0.9} in={openApp}>
                <Box
                    bg="#16a085"
                    borderRadius="lg"
                    maxWidth="400px"
                    m={3}
                    p={4}
                    color="white"
                    boxShadow="xl"
                    rounded="xl"
                >
                    <SimpleGrid columns={1} spacing={3}>
                        <Box align="right">
                            <CloseButton size="lg" as={LinkRouter} to="/" />
                        </Box>
                        <Box mx={10} bg="transparent">
                            <Wrap justify="center">
                                <WrapItem>
                                    <Circle
                                        size="35px"
                                        bg="#fff"
                                        color="#16a085"
                                    >
                                        <Text
                                            fontSize="4xl"
                                            pb={1}
                                            align="center"
                                        >
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
                        <Box>
                            <Text align="center">Choose your level!</Text>
                        </Box>

                        <LinkBox
                            as="article"
                            maxW="sm"
                            p="2"
                            mx="2"
                            borderWidth="1px"
                            rounded="lg"
                        >
                            <Heading size="lg" my="1">
                                <LinkOverlay
                                    style={{ cursor: "pointer" }}
                                    onClick={onOpen}
                                >
                                    🥱 EASY
                                </LinkOverlay>
                            </Heading>
                            <Text>Test few character groups only.</Text>
                            <Text>(Aぁ, Kaか, Saさ, Taた, Naな group)</Text>
                        </LinkBox>

                        <Modal
                            closeOnOverlayClick={false}
                            isOpen={isOpen}
                            onClose={onClose}
                            size="md"
                            isCentered
                        >
                            <ModalOverlay />
                            <ModalContent mx="2">
                                <ModalHeader>Game Option</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl id="time">
                                        <FormLabel>
                                            Time of each question
                                        </FormLabel>
                                        <Select
                                            name="time"
                                            value={gameOption.time}
                                            onChange={handleTime}
                                        >
                                            <option value={5}>5 seconds</option>
                                            <option value={10}>
                                                10 seconds
                                            </option>
                                            <option value={20}>
                                                20 seconds
                                            </option>
                                        </Select>
                                    </FormControl>
                                    <FormControl mt={2} id="question">
                                        <FormLabel>Total question</FormLabel>
                                        <Select
                                            name="question"
                                            value={gameOption.question}
                                            onChange={handleQuestion}
                                        >
                                            <option value={10}>
                                                10 questions
                                            </option>
                                            <option value={20}>
                                                20 questions
                                            </option>
                                            <option value={30}>
                                                30 questions
                                            </option>
                                        </Select>
                                    </FormControl>
                                    <Text mt={4}>Ready to play?</Text>
                                </ModalBody>
                                <ModalFooter>
                                    <Button bg="#16a085" mr={3} color="white">
                                        Yes, I am!
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                        <LinkBox
                            as="article"
                            maxW="sm"
                            p="2"
                            mx="2"
                            borderWidth="1px"
                            rounded="lg"
                        >
                            <Heading size="lg" my="1">
                                <LinkOverlay
                                    style={{ cursor: "pointer" }}
                                    onClick={() => alert("lol")}
                                >
                                    😧 MEDIUM
                                </LinkOverlay>
                            </Heading>
                            <Text>
                                Test all basic characters of Hiragana/Gojūon.
                            </Text>
                            <Text>(Aぁ - Nん)</Text>
                        </LinkBox>

                        <LinkBox
                            as="article"
                            maxW="sm"
                            p="2"
                            mx="2"
                            mb="3"
                            rounded="lg"
                            bg="#159279"
                        >
                            <Heading size="lg" my="1">
                                <LinkOverlay
                                // style={{ cursor: "pointer" }}
                                // onClick={() => alert("lol")}
                                >
                                    😵 HARD
                                </LinkOverlay>
                                <Text fontSize="sm">(Not available yet)</Text>
                            </Heading>
                            <Text>
                                Test all characters of Hiragana, including 20
                                dakuon, 5 handakuon, 36 yōon, 1 sokuon and 6
                                additional letters.
                            </Text>
                        </LinkBox>
                    </SimpleGrid>
                </Box>
            </ScaleFade>
        </Flex>
    );
};

export default MainMenu;
