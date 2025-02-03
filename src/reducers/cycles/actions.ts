import { Cycle } from "./reducer";

export enum CyclesStateActionTypes{
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE', 
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
    MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}

function addNewCycle(newCycle: Cycle){
    return {
    type: CyclesStateActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

function interruptCurrentCycle(){
    
    console.log('entrou')
    
    return {
        type: CyclesStateActionTypes.INTERRUPT_CURRENT_CYCLE,
    }
}

function markCurrentCycleAsFinished(){
    return {
        type: CyclesStateActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    }
}

export const cyclesActions = {
    addNewCycle,
    interruptCurrentCycle,
    markCurrentCycleAsFinished,
}