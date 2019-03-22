import { DISHES } from '../shared/dishes';
//--dish reducer

export const Dishes = (state = DISHES, action ) =>{
    switch(action.type){
        //default is no change in state
        default : 
            return state;
    }
}