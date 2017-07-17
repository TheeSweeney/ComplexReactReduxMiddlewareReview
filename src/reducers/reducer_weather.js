import { FETCH_WEATHER } from '../actions/index' 

export default function(state = [], action){
	switch(action.type){
		case FETCH_WEATHER:
			//return state.concat([ action.payload.data ]); //concat does not mutate the array, but return a new array with the concatenated value added on
			return [ action.payload.data, ...state ]; //... is es6 syntactic sugar that flattens two arrays. functionally identical to above line
	}
	return state;
}