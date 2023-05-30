import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import {addArticle} from '../../redux/Actions/artclesActions'
import '../Header/header.css'





const AddArticle = () => {

    const dispatch = useDispatch()





    const [show, setShow] = useState(false);
    const [newArticle , setnewArticle] = useState({
        view : false ,
        img:'',
        title:'',
        intro:'',
        description:'',
        iLike : false
    })


    

    const handleChange = (e) => {
        setnewArticle({...newArticle,[e.target.name] : e.target.value })
    }

    const handleAdd = () => {
        dispatch(addArticle(newArticle))
        handleClose()
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button className="nav-btn" onClick={handleShow} >
        Add Article
      </Button>

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
                placeholder="name@example.com"
                autoFocus
                onChange={handleChange} 
              />

              <Form.Label>image</Form.Label>
              <Form.Control
                name="img"
                type="text"
                placeholder="image url"
                autoFocus
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
                onChange={handleChange} 
              />
            
            </Form.Group>
            
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> description </Form.Label>
              <Form.Control as="textarea" rows={3} name='description' onChange={handleChange}/>
            </Form.Group>
          
          
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddArticle;
