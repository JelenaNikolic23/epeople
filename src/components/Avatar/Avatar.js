// TODO
import React from 'react';

const Avatar = ({ photo }) => {

    return (
        <div>
            <div className="collection">
                <ul className="collection-item avatar"  >
                    <li>
                        <img className="circle" alt="" src={photo}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export {Avatar} ;
