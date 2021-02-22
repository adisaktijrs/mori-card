import { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Text,
    SimpleGrid,
    ScaleFade,
    LinkBox,
    LinkOverlay,
    Heading,
    useDisclosure,
} from "@chakra-ui/react";
import { hiragana1, hiragana2 } from "../../data/hiragana";
import Game from "../Game/Game";
import Header from "./Header";
import Level from "./Level";

const MainMenu = () => {
    const [openApp, setOpenApp] = useState(false);
    const [gameOption, setGameOption] = useState({
        level: 1,
        time: 5,
        totalQuestion: 10,
    });
    const [startGame, setStartGame] = useState(false);

    // Generate 'unique' random questions.
    // I know it's a mess and not really generate unique questions.
    // I'll fix it later, if i wish tbh lol
    const level = gameOption.level === 1 ? hiragana1 : hiragana2;
    const randomArr = (option, max) => {
        let arr = [];
        for (let i = 0; i < max; i++) {
            let a = Math.floor(Math.random() * option.length);
            arr.push(a);
        }
        return arr;
    };
    let rawQuestionArr = randomArr(level, gameOption.totalQuestion);
    let questionArr = [...new Set(rawQuestionArr)];
    while (questionArr.length < gameOption.totalQuestion) {
        questionArr.push(Math.floor(Math.random() * level.length));
    }

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        setTimeout(() => {
            setOpenApp(true);
        }, 100);
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

    return (
        <Flex bg="#FAFAFA" justify="center" align="center" h="100vh">
            {startGame ? (
                <Game
                    questionArr={questionArr}
                    gameOption={gameOption}
                    setStartGame={setStartGame}
                />
            ) : (
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
                            <Header />
                            <Box>
                                <Text align="center">Choose your level!</Text>
                            </Box>

                            <Level
                                onOpen={onOpen}
                                onClose={onClose}
                                isOpen={isOpen}
                                handleQuestion={handleQuestion}
                                handleTime={handleTime}
                                gameOption={gameOption}
                                setStartGame={setStartGame}
                                setGameOption={setGameOption}
                                level={1}
                                levelName="🥱 EASY"
                                levelFirstText="Test few character groups only."
                                levelSecondText="(Aぁ, Kaか, Saさ, Taた, Naな group)"
                            />

                            <Level
                                onOpen={onOpen}
                                onClose={onClose}
                                isOpen={isOpen}
                                handleQuestion={handleQuestion}
                                handleTime={handleTime}
                                gameOption={gameOption}
                                setStartGame={setStartGame}
                                setGameOption={setGameOption}
                                level={2}
                                levelName="😧 MEDIUM"
                                levelFirstText="Test all basic characters of Hiragana/Gojūon."
                                levelSecondText="(Aぁ - Nん)"
                            />

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
                                    <LinkOverlay>😵 HARD</LinkOverlay>
                                    <Text fontSize="sm">
                                        (Not available yet)
                                    </Text>
                                </Heading>
                                <Text>
                                    Test all characters of Hiragana, including
                                    20 dakuon, 5 handakuon, 36 yōon, 1 sokuon
                                    and 6 additional letters.
                                </Text>
                            </LinkBox>
                        </SimpleGrid>
                    </Box>
                </ScaleFade>
            )}
        </Flex>
    );
};

export default MainMenu;
