import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup} from 'reactstrap';

class DishDetail extends Component{

    renderDish (dish) {
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

    renderComments(comments){
        return(
            <ListGroup className="list-unstyled">
                {comments.map((comment) => {
                    return(<div key={comment.id}>
                            <li   >{comment.comment} {comment.author}</li>
                            <li >-- {comment.author}, {new Intl.DateTimeFormat('en-US',
                                { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(comment.date))}</li>
                        </div>
                    );
                })}        
            </ListGroup>
        );
    }

    render(){
        const dish = this.props.dishdetail
        if(dish != null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div>
                        <div>
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>
            );
            
        }else{
            return( <div></div>);
        }
    }

}
export default DishDetail;