import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'


const HomeScreen = ({history}) => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList
    // const [products,setProducts] = useState([])
    
    // const getDjangoData = async () => {
    //     try{
    //         const response = await fetch("http://localhost:8000/api/products/")
    //         setProducts( await response.json())
    //     }catch(error){
    //         console.log("my error is "+ error);
    //     }

    // }
    // useEffect(()=>{
    //     getDjangoData();
    // },[])
    let keyword = history.location.search
    console.log(keyword)

    useEffect(()=>{
        dispatch(listProducts(keyword))
    },[dispatch,keyword])

    // const product = []

    return (
        <React.Fragment>
            {!keyword && <ProductCarousel />}
            <h1>Latest Products</h1>
            {loading ? <Loader/>
            : error ? <Message variant="danger">{error}</Message>
            : <div><Row>
            {products.map(product=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
        <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
            }
            
        </React.Fragment>
    )
}

export default HomeScreen
