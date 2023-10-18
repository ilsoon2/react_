const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const increase = () => ({ type: INCREASE})
export const decrease = () => ({ type: DECREASE})

const InitialState ={
  count: 0,
}


export default function counter ( state = InitialState, action){
    
}