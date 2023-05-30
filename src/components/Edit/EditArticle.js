import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Bbutton from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {editArtc} from '../../redux/Actions/artclesActions'





const EditArticle = ({el}) => {
    const dispatch = useDispatch()
    const [editArt , setEditArt] = useState (el)

    const handleChange = (e) => {
        setEditArt({...editArt , [e.target.name]:e.target.value})
    }

    const handleEdit = () => {
        dispatch(editArtc(editArt))
        handleClose()
    }

    const [show, setShow] = useState(false);
    

   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     
      <Bbutton size="small" onClick={handleShow}  > Edit </Bbutton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="title"
                autoFocus
                value={editArt.title}
                onChange={handleChange}
              />

              <Form.Label>image</Form.Label>
              <Form.Control
                name="img"
                type="text"
                placeholder="image url"
                autoFocus
                value={editArt.img}
                onChange={handleChange}
              />

              <Form.Label>intro</Form.Label>
              <Form.Control
                name ='intro'
                type="text"
                placeholder="introduction"
                rows={3}
                as="textarea"
                autoFocus
                value={editArt.intro}
                onChange={handleChange}
              />
            
            </Form.Group>
            
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> description </Form.Label>
              <Form.Control as="textarea" rows={3} name='description' value={editArt.description} onChange={handleChange}/>
            </Form.Group>
          
          
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditArticle;