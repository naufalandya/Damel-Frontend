import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { ChakraProvider } from '@chakra-ui/react';

function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  return (
    <ChakraProvider>
    <Modal style={{color :'black'}} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader style={{color :'black'}}>Confirm Logout</ModalHeader>
        <ModalCloseButton />
        <ModalBody style={{color :'black'}}>
          <p>Are you sure you want to logout?</p>
        </ModalBody>
        <ModalFooter>
          <Button style={{color :'black'}} colorScheme="gray" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button style={{color :'white'}} colorScheme="red" onClick={onConfirm}>
            Logout
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </ChakraProvider>
  );
}

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmationModal;
