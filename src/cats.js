import React from 'react';

function Cat(props) {
    return (
        <div className="col-lg-3 mt-4">
            <div className="card card-inverse card-info">
                <img className="card-img-top" src={`https://cataas.com/cat/${props.handleData.id}`} alt="cat" />
                <div className="card-footer">
                    <small>created_at: {new Date(props.handleData.created_at).toDateString()}</small><br />
                    <small>tags: {props.handleData.tags}</small>
                    <button className="btn btn-info float-right btn-sm">More-Info</button>
                </div>
            </div>
        </div>
    )
}

export default Cat
