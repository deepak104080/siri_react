import React from 'react'
import ContextChild3 from './ContextChild3';
import { NameContext } from './ContextParent';

class ContextChild2 extends React.Component {
    render() {
            return (
                <div>
                    <h4 className='text-success'>This is child 2 component</h4>
                    <NameContext.Consumer>
                        {
                            (temp) => (
                                <div>Country Name - {temp}</div>
                            )
                        }
                    </NameContext.Consumer>

                    <ContextChild3/>
                
                </div>
            )
        }
}

export default ContextChild2;
