import React from 'react';

interface Props {
    title: string,
    body: string | (() => number);
}

const StaticModal: React.FC<Props> = (props) => {

    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{props.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {props.body}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StaticModal;