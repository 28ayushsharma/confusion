import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup} from 'reactstrap';


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
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}></RenderDish>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments}></RenderComments>
                    </div>
                    
                </div>
            );
            
        }else{
            return( <div></div>);
        }
    }
export default DishDetail;