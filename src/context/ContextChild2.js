import React from 'react'
import ContextChild3 from './ContextChild3';
import { NameContext } from './ContextParent';

class ContextChild2 extends React.Component {
    componentDidUpdate(){
        console.log('child 2 re render.')
    }
    render() {
            return (
                <div>
                    <h4 className='text-success'>This is child 2 component</h4>
                    <NameContext.Consumer>
                        {
                            (temp) => (
                                <>
                                <div>Country Name - {temp.name}</div>
                                <br></br>
                                <button onClick={() => temp.setCount(temp.count + 1)}>Count Increase</button>
                                </>
                            )
                        }
                    </NameContext.Consumer>

                    <ContextChild3/>
                
                </div>
            )
        }
}

export default ContextChild2;
