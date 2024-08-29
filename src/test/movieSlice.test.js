import moviesSlice from '../store/moviesSlice'
import { moviesMock } from './mocks/movies.mocks'

describe('MovieSlice test', () => {
    
    it('should set loading true while action is pending', () => {
        const action = {type: moviesSlice.pending};
        const initialState = moviesSlice.reducer(
        { 
            movies: [], fetchStatus: '',
        }, action);
        expect(action).toEqual({type: moviesSlice.pending})
     })

    it('should return payload when action is fulfilled', () => {
        const action = {
            type: moviesSlice.fulfilled, 
            payload: moviesMock
        };
        const initialState = moviesSlice.reducer(
        { 
            movies: [], fetchStatus: '',
        }, action);
        expect(action.payload).toBeTruthy()
    })

    it('should set error when action is rejected', () => {
        const action = {type: moviesSlice.rejected};
        const initialState = moviesSlice.reducer(
        { 
            movies: [], fetchStatus: '',
        }, action);
        expect(action).toEqual({type: moviesSlice.rejected})
     })

})