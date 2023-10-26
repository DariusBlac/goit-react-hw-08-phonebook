import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { openModal } from 'store/modal/modalSlice';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: theme => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: theme =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: theme =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export const ContactItem = ({ name, number, onClickDelete, id, el }) => {
  const dispatch = useDispatch();

  const isOpenModal = body => {
    dispatch(openModal(body));
  };

  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <Item
          sx={{
            width: '300px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <h3>{name}:</h3>
          <h3 style={{ marginLeft: '10px' }}>{number}</h3>
        </Item>
        <Item
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '35px',
          }}
        >
          <Button
            variant="text"
            type="button"
            startIcon={<Edit />}
            onClick={() => isOpenModal(el)}
          >
            Edit
          </Button>
        </Item>
        <Item
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '35px',
          }}
        >
          <Button
            variant="text"
            type="button"
            startIcon={<DeleteIcon />}
            onClick={() => onClickDelete(id)}
          >
            Delete
          </Button>
        </Item>
      </Box>
    </div>
  );
};
