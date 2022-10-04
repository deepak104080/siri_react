import React, {forwardRef} from 'react'

const Ref_Child = (props, ref) => {
    return (
        <div className="row bg-info bg-opacity-50">
                <div className="col-12">
                        Name - {props.name}
                        <div ref={ref}></div>
                </div>
            </div>
    )
}

export default forwardRef(Ref_Child);
