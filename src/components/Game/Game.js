import React, { Component } from "react";
import {
    Box,
    Flex,
    Text,
    SimpleGrid,
    ScaleFade,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react";
import { hiragana1 } from "../../data/hiragana";

class Game extends Component {
    state = {
        openApp: false,
        answer: "",
        question: this.props.questionArr[0],
        num: 1,
        userAnswer: [],
        openResult: false,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ openApp: true });
        }, 200);
    }

    render() {
        const randomOption = () => {
            let a = [];
            let randomPosition = Math.floor(Math.random() * 3);
            for (let i = 0; i < 3; i++) {
                let b = Math.floor(Math.random() * hiragana1.length);
                a.push(b);
            }
            a.splice(randomPosition, 0, this.state.question);
            let uniqArr = [...new Set(a)];

            while (uniqArr.length < 4) {
                uniqArr.push(Math.floor(Math.random() * hiragana1.length));
            }

            return uniqArr;
        };

        let answerOption = randomOption();

        const answerHandler = (e) => {
            let joined = this.state.userAnswer.concat(e.target.value);
            this.setState({ userAnswer: joined });

            if (this.state.num < this.props.gameOption.totalQuestion) {
                this.setState({
                    question: this.props.questionArr[this.state.num],
                });

                answerOption = randomOption();
            }
            let nums = this.state.num + 1;
            this.setState({ num: nums });

            if (this.state.num === this.props.gameOption.totalQuestion) {
                console.log(this.state.userAnswer);
                console.log(this.props.questionArr);
                this.setState({ openResult: true });
            }
        };

        const answerButton = answerOption.map((item, idx) => {
            return (
                <Box
                    key={idx}
                    bg="white"
                    fontSize="2xl"
                    borderRadius={5}
                    as="button"
                    px={7}
                    py={3}
                    m={1}
                    _hover={{
                        shadow: "lg",
                    }}
                    _active={{
                        bg: "#48dbfb",
                        color: "#fff",
                    }}
                    _focus={{
                        outline: "none",
                        boxShadow: "none",
                    }}
                    shadow="md"
                    onClick={answerHandler}
                    value={hiragana1[item].romaji}
                >
                    {hiragana1[item].romaji}
                </Box>
            );
        });

        const result = this.props.questionArr.map((item, idx) => {
            let result = 0;
            if (hiragana1[item].romaji === this.state.userAnswer[idx]) {
                result++;
            }
            return result;
        });

        const resultScore = result.reduce((a, b) => a + b);
        let textResult = "Great! I adore how smart u r ❤️";
        if (resultScore < Math.floor(this.props.gameOption.totalQuestion / 2)) {
            textResult = "Seriously dude?! 😡😡";
        } else if (
            resultScore < Math.floor(this.props.gameOption.totalQuestion / 1.3)
        ) {
            textResult =
                "Pretty good, i believe u can make it even better next time 😉";
        }

        const resultTable = this.props.questionArr.map((item, idx) => {
            let mark = "😍✨";
            if (hiragana1[item].romaji !== this.state.userAnswer[idx]) {
                mark = "😡👎🏻";
            }
            return (
                <Tr key={idx}>
                    <Td>
                        {hiragana1[item].kana} - {hiragana1[item].romaji}
                    </Td>
                    <Td>{this.state.userAnswer[idx]}</Td>
                    <Td>{mark}</Td>
                </Tr>
            );
        });

        return (
            <Flex bg="#FAFAFA" justify="center" align="center" h="100vh">
                <ScaleFade initialScale={0.9} in={this.state.openApp}>
                    <Box
                        bg="#2d98da"
                        borderRadius="lg"
                        width="320px"
                        m={3}
                        p={4}
                        color="white"
                        boxShadow="xl"
                        rounded="xl"
                    >
                        <SimpleGrid columns={1} spacing={7}>
                            <Box>
                                <Text
                                    ml={4}
                                >{`${this.state.num}/${this.props.gameOption.totalQuestion}`}</Text>
                            </Box>
                            <Box bg="transparent" mx={4}>
                                <Text fontSize="8xl" align="center">
                                    {hiragana1[this.state.question].kana}
                                </Text>
                            </Box>

                            <Text align="center">
                                Choose your answer below!
                            </Text>

                            <Box align="center">
                                <SimpleGrid
                                    columns={2}
                                    color="#2d98da"
                                    mx={4}
                                    mb={3}
                                    spacingX="20px"
                                    spacingY="20px"
                                >
                                    {answerButton}
                                </SimpleGrid>
                            </Box>
                        </SimpleGrid>
                    </Box>
                    <Modal
                        closeOnOverlayClick={false}
                        isOpen={this.state.openResult}
                        onClose={() => this.setState({ openResult: false })}
                        mx={3}
                        closeOnEsc={false}
                        scrollBehavior="inside"
                    >
                        <ModalOverlay />
                        <ModalContent mx={3}>
                            <ModalHeader>Your Result</ModalHeader>
                            <ModalBody pb={6}>
                                <Table variant="simple" size="sm">
                                    <Thead>
                                        <Tr>
                                            <Th>Question</Th>
                                            <Th>Your answer</Th>
                                            <Th>Mark</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>{resultTable}</Tbody>
                                </Table>
                                <Text align="center" mt={3}>
                                    <strong>
                                        {"You got " +
                                            resultScore +
                                            "/" +
                                            this.props.gameOption
                                                .totalQuestion +
                                            ". " +
                                            textResult}
                                    </strong>
                                </Text>
                            </ModalBody>

                            <ModalFooter>
                                <Button
                                    colorScheme="blue"
                                    mr={3}
                                    onClick={() =>
                                        this.props.setStartGame(false)
                                    }
                                >
                                    Bring me back!
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </ScaleFade>
            </Flex>
        );
    }
}

export default Game;
