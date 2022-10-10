import React, {useEffect, useReducer, useState} from 'react';

const UseReducer = () => {
    const initialObj = {
        balance: 0,
        show_balance: false,
        num_trn: 0
    }
    // const [account, setAccount] = useState(initialObj)
    const reducer = (state, action) => {
        switch(action.type) {
            case 'DEPOSIT5000':
                return {
                    ...state,
                    balance: state.balance + 5000
                }
            case 'WITHDRAW2000':
                return {
                    ...state,
                    balance: state.balance - 2000,
                    num_trn: state.num_trn + 1
                }
            case 'APPLYATM100':
                return {
                    ...state,
                    balance: state.balance - 100
                }
            case 'SHOWHIDEBALANCE':
                return {
                    ...state,
                    show_balance: !state.show_balance
                }
            case 'DEDUCTEMI':
                return {
                    ...state,
                    balance: state.balance - 5000,
                    num_trn: state.num_trn + 1
                }
            case 'CREDITINTEREST':
                return {
                    ...state,
                    balance: state.balance + 500
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialObj);

    useEffect(() => {
        console.log(state);
        console.log('usereducer component hit')
    }, [state])

    

    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                {state.show_balance && (<h4>Balance - {state.balance}</h4>)}
                <br></br>
                <h4>Number of Transactions - {state.num_trn}</h4>
                <br></br>
                <button className='btn btn-primary' onClick={() => dispatch({type: 'DEPOSIT5000'})}>Deposit 5000</button>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'WITHDRAW2000'})}>Withdraw 2000</button>
                <button className='btn btn-warning' onClick={() => dispatch({type: 'APPLYATM100'})}>Apply ATM Charges - 100</button>
                <button className='btn btn-danger' onClick={() => dispatch({type: 'SHOWHIDEBALANCE'})}>Show Hide Balance</button>
                <button className='btn btn-info' onClick={() => dispatch({type: 'DEDUCTEMI'})}>Deduct EMI</button>
                <button className='btn btn-primary' onClick={() => dispatch({type: 'CREDITINTEREST'})}>Credit Interest</button>
            </div>
        </div>
  )
}

export default UseReducer

// Account Balance
// deposit - balance, 
// withdraw - balance, num_trn
// atmcharges(100) - balance
// showhidebalance - balance_show
// emideduction(5000) - balance, num_trn
// interestcredit(500) - balance
// numtransaction - 

// balance
// balance_show
// num_transaction


// action - {type, value}
// reducer - (state, action) - returns new state object
// dispatch(action object) - method

// diff b/w useState and useReducer
// single varibale vs multiple variables
// setState vs dispatch
// no action object vs action obj
// simple logics vs complex logics
// xxx vs reducer (switch)

// benefits
// combined state variables
// complex logics
// when next state is dependant on previous differentr state object property
// easy to test


// HW
// count - useState
// ADD
// SUB

// add(5);
// sub(10);