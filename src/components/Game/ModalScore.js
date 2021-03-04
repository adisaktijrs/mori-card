import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Text,
    ModalFooter,
    Button,
} from "@chakra-ui/react";

const ModalScore = (props) => {
    return (
        <Modal
            closeOnOverlayClick={false}
            isOpen={props.openResult}
            onClose={props.closeButtonHandler}
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
                                <Th>Ur answer</Th>
                                <Th>Mark</Th>
                            </Tr>
                        </Thead>
                        <Tbody>{props.resultTable}</Tbody>
                    </Table>
                    <Text align="center" mt={3}>
                        <strong>
                            {"You got " +
                                props.resultScore +
                                "/" +
                                props.totalQuestion +
                                ". " +
                                props.textResult}
                        </strong>
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={props.backToMenuHandler}
                    >
                        Bring me back!
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalScore;
