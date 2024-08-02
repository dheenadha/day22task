import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

function Card({ card }) {
  return (
    <div className="col bg-primary p-5">
      <div className={`card mb-5 rounded-3 shadow-sm ${card.plan == 'Enterprise' && 'border-primary'}`}>
        <div className={`card-header py-3 `}>
          <span className="my-0 fw-normal text-secondary">{card.plan}</span>
          <h1 className="card-title pricing-card-title">
            ${card.price}
            <small>/month</small></h1>
        </div>
        
        <div className="card-body ">
          
          
          <ul className="list-unstyled mt-3 mb-4">
            {card.features.map((feature, index) => {
              return (
                <li key={index}>
                  {feature.enable ? (
                    <span>
                      <FontAwesomeIcon icon={faCheck} /> {feature.name}
                    </span>
                  ) : (
                    <span className="dg" style={{color:"lightgray"}}>
                      <FontAwesomeIcon icon={faXmark} />
                      {feature.name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <button 
            type="button"
            className={`w-100 btn rounded-5 btn-lg btn btn-primary
              ${card.plan === "PRO"&& "btn btn-primary btn-lg active"} `}
          ><strong>
            BUTTON</strong>
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Card;
