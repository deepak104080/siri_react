import React, {useEffect} from 'react'

const UseCallbackchild = (props) => {
    const {tempFn} = props;

    useEffect(() => {
        console.log('child re-rendered')
    }, [tempFn])

    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                <div>Child Comp</div>
                <div>{tempFn('Test123')}</div>
            </div>
        </div>
    )
}

export default UseCallbackchild
