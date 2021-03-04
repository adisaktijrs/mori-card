import React, { Component } from "react";
import {
    Box,
    Flex,
    Text,
    SimpleGrid,
    ScaleFade,
    Tr,
    Td,
} from "@chakra-ui/react";
import { hiragana1, hiragana2 } from "../../data/hiragana";
import ModalScore from "./ModalScore";

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
        }, 100);
    }

    render() {
        const level = this.props.gameOption.level === 1 ? hiragana1 : hiragana2;
        const randomOption = () => {
            let a = [];
            let randomPosition = Math.floor(Math.random() * 3);
            for (let i = 0; i < 3; i++) {
                let b = Math.floor(Math.random() * level.length);
                a.push(b);
            }
            a.splice(randomPosition, 0, this.state.question);
            let uniqArr = [...new Set(a)];

            while (uniqArr.length < 4) {
                uniqArr.push(Math.floor(Math.random() * level.length));
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
                    value={level[item].romaji}
                >
                    {level[item].romaji}
                </Box>
            );
        });

        const result = this.props.questionArr.map((item, idx) => {
            let result = 0;
            if (level[item].romaji === this.state.userAnswer[idx]) {
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
            let mark = "😍";
            if (level[item].romaji !== this.state.userAnswer[idx]) {
                mark = "👎🏻";
            }
            return (
                <Tr key={idx}>
                    <Td>
                        {idx + 1}. {level[item].kana} - {level[item].romaji}
                    </Td>
                    <Td>{this.state.userAnswer[idx]}</Td>
                    <Td>{mark}</Td>
                </Tr>
            );
        });

        const closeButtonHandler = () => {
            this.setState({ openResult: false });
        };

        const backToMenuHandler = () => {
            this.props.setStartGame(false);
        };

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
                                    {level[this.state.question].kana}
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
                    <ModalScore
                        openResult={this.state.openResult}
                        closeButtonHandler={closeButtonHandler}
                        resultTable={resultTable}
                        resultScore={resultScore}
                        textResult={textResult}
                        backToMenuHandler={backToMenuHandler}
                        totalQuestion={this.props.gameOption.totalQuestion}
                    />
                </ScaleFade>
            </Flex>
        );
    }
}

export default Game;
