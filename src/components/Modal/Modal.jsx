import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalContactSelector, modalSelector } from 'store/modal/selectors';
import { closeModal } from 'store/modal/modalSlice';
import { Button, Grid, TextField } from '@mui/material';
import { editContactThunk, getAllThunk } from 'store/contacts/thunk';
import Notiflix from 'notiflix';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(modalSelector);
  const element = useSelector(modalContactSelector);
  const handleClose = () => dispatch(closeModal());

  const handleEdit = (id, body) => {
    dispatch(editContactThunk(id, body))
      .unwrap()
      .then(() => {
        dispatch(getAllThunk());
      })
      .catch(error => {
        Notiflix.Notify.failure('Edit failed');
        console.log(error);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      name: data.get('name'),
      number: data.get('number'),
    };
    handleEdit(element.id, body);
    handleClose();
  };

  return (
    isOpenModal && (
      <div>
        <Modal
          open={isOpenModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Enter edits
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    defaultValue={element.name}
                    name="name"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    fullWidth
                    label="Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputProps={{
                      inputMode: 'numeric',
                      pattern: '[0-9+]*',
                    }}
                    type="tel"
                    defaultValue={element.number}
                    name="number"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    fullWidth
                    label="Number"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ margin: '30px auto 20px', display: 'block' }}
              >
                Edit contact
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    )
  );
}
