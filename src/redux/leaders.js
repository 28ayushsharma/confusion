import { LEADERS } from '../shared/leaders';

export const Leaders = (state = LEADERS, action ) =>{
    switch(action.type){
        //default is no change in state
        default : 
            return state;
    }
}