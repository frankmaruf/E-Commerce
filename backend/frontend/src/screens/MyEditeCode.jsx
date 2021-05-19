import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProductDetails, updateProduct} from "../actions/productActions";
import {PRODUCT_UPDATE_RESET} from "../constants/productConstants"
import FormContainer from "../components/FormContainer";
import {deleteProduct} from "../actions/productActions"

//Have to add an extra delete Button beside Update Button

const ProductEditeScreen = ({ match, history }) => {
    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
  
    const dispatch = useDispatch();
  
    const productDetails = useSelector((state) => state.productDetails);
    const { error, loading, product } = productDetails;

    const productUpdate = useSelector((state) => state.productUpdate);
    const { error:errorUpdate, loading:loadingUpdate, success:successUpdate } = productUpdate;

    const productDelete = useSelector(state=>state.productDelete)
    const {loading:loadingDelete, error:errorDelete, success:successDelete} = productDelete


    useEffect(() => {
      
      if(successDelete){
        history.push("/admin/productslist")
      }

      if(successUpdate){
        dispatch({
          type:PRODUCT_UPDATE_RESET
        })
        history.push("/admin/productslist")
      }
      else{
        if(!product.name || product._id !== Number(productId)){
          dispatch(listProductDetails(productId))
      }else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setDescription(product.description)

      } 
      }
    },[product,productId,history,dispatch,successUpdate, successDelete]);
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description

      }))
    };

    const deleteHandler = (id,name) => {
      if (window.confirm(`Are you sure you want to delete this Products(${id}, ${name})?`)){
          dispatch(deleteProduct(id))
      }
      
  }
  
    return (
        <React.Fragment>
            <div>
        <Link to="/admin/productslist">Go Back</Link>
        <FormContainer>
          <h1>Edit Product</h1>

          {
            loadingUpdate && <Loader/>
          }
          {
            errorUpdate && <Message variant="danger">{errorUpdate}</Message>
          }
          {loadingDelete && <Loader />}
          {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Form onSubmit={submitHandler}>

              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Product Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Product Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="brand">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                ></Form.Control>
              </Form.Group>


              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="countInStock">
                <Form.Label>CountInStock</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Product Stock"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>
              

              <Row>
              <Button type="submit" variant="primary">
                Update
              </Button>
              <Button variant='danger' className="btn-sm" onClick={()=> deleteHandler(product._id, product.name)}>
                                        <i className="fas fa-trash"></i>
               </Button>
              </Row>
            </Form>
          )}
        </FormContainer>
      </div>
        </React.Fragment>
    )
}

export default ProductEditeScreen;
