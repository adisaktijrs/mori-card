import {
    LinkBox,
    Heading,
    LinkOverlay,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Select,
    ModalFooter,
    Button,
} from "@chakra-ui/react";

const Level = ({
    onOpen,
    onClose,
    isOpen,
    handleQuestion,
    handleTime,
    gameOption,
    setStartGame,
}) => {
    const closeAndExecute = () => {
        setStartGame(true);
        onClose();
    };
    return (
        <>
            <LinkBox
                as="article"
                maxW="sm"
                p="2"
                mx="2"
                borderWidth="1px"
                rounded="lg"
            >
                <Heading size="lg" my="1">
                    <LinkOverlay style={{ cursor: "pointer" }} onClick={onOpen}>
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
                                Time per question{" "}
                                <Text fontSize="xs">(not yet available)</Text>
                            </FormLabel>
                            <Select
                                isDisabled={true}
                                name="time"
                                value={gameOption.time}
                                onChange={handleTime}
                            >
                                <option value={5}>5 seconds</option>
                                <option value={10}>10 seconds</option>
                                <option value={20}>20 seconds</option>
                            </Select>
                        </FormControl>
                        <FormControl mt={2} id="question">
                            <FormLabel>Total question</FormLabel>
                            <Select
                                name="totalQuestion"
                                value={gameOption.totalQuestion}
                                onChange={handleQuestion}
                            >
                                <option value={10}>10 questions</option>
                                <option value={20}>20 questions</option>
                                <option value={30}>30 questions</option>
                            </Select>
                        </FormControl>
                        <Text mt={4}>Ready to play?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            bg="#16a085"
                            mr={3}
                            color="white"
                            onClick={() => closeAndExecute()}
                        >
                            Yes, I am!
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Level;
