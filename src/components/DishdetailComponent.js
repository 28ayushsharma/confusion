import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish ({dish}) {
        return( 
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay> </CardImgOverlay>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({comments}){
        return(
            <div>
                <h3>Comments</h3>
                <ListGroup className="list-unstyled">
                    {comments.map((comment) => {
                        return(
                            <div key={comment.id}>
                                <li   >{comment.comment} {comment.author}</li>
                                <li >-- {comment.author}, {new Intl.DateTimeFormat('en-US',
                                    { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(comment.date))}</li>
                            </div>
                        );
                    })}        
                </ListGroup>
            </div>
        );
    }

    const DishDetail=(props)=> {
        
        if(props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>                            
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active><Link to='/menu'>{props.dish.name}</Link></BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}></RenderDish>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments}></RenderComments>
                        </div>
                        
                    </div>
                </div>
            );
            
        }else{
            return( <div></div>);
        }
    }
export default DishDetail;