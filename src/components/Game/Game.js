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
    Progress,
} from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import { hiragana1 } from "../../data/hiragana";

const Game = (props) => {
    const [openApp, setOpenApp] = useState(false);
    let [time, setTime] = useState(5);
    let arr = [];

    useEffect(() => {
        setTimeout(() => {
            setOpenApp(true);
        }, 200);
    }, []);

    useEffect(() => {
        if (!time) return;
        console.log("aa" + time);

        const timeUpdate = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        return () => clearInterval(timeUpdate);
    }, [time]);

    let timeBarColor = "whatsapp";
    if (time < 3) {
        timeBarColor = "red";
    }

    let answerText = "Choose your answer!";
    if (time === 0) {
        console.log("stop");
        answerText = "See! You're so damn slow";
    }

    const randomKana = (level) => {
        return Math.floor(Math.random() * Math.floor(level.length));
    };

    // const kanaAnswer = randomKana(hiragana1);
    const kanaAnswer = 2;

    const answerPosition = 2;
    const answer = ["KA", "A", "KI"];
    answer.splice(answerPosition, 0, hiragana1[kanaAnswer].romaji);
    const answerButton = answer.map((item, idx) => {
        return (
            <Button
                key={idx}
                _hover={{
                    bg: "#48dbfb",
                    color: "#fff",
                    shadow: "xl",
                }}
                shadow="md"
                m={1}
                size="lg"
            >
                <Text fontSize="2xl" px={4}>{item}</Text>
            </Button>
        );
    });

    return (
        <Flex bg="#FAFAFA" justify="center" align="center" h="100vh">
            <ScaleFade initialScale={0.9} in={openApp}>
                <Box p={4} m={3} bg="#2d98da" borderRadius="lg">
                    <Progress
                        colorScheme={timeBarColor}
                        isAnimated={true}
                        hasStripe
                        value={time}
                        min={0}
                        max={5}
                    />
                </Box>

                <Box
                    bg="#2d98da"
                    borderRadius="lg"
                    maxWidth="400px"
                    m={3}
                    p={4}
                    color="white"
                    boxShadow="xl"
                    rounded="xl"
                >
                    <SimpleGrid columns={1} spacing={7}>
                        <Box bg="transparent" mx={4}>
                            <Text fontSize="8xl" align="center">
                                {hiragana1[kanaAnswer].kana}
                            </Text>
                        </Box>

                        <Text align="center">
                            {answerText}
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
            </ScaleFade>
        </Flex>
    );
};

export default Game;
