
import React from "react";

function Tact(props) {
  return (
    <div>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/565/565722.svg?token=exp=1613987426~hmac=3ffd6cf7451762bc743237d461fee5aa"
              width='30'
              height='20'
              onClick={() => alert('this is edit for id ' + props.vid)}
            /> {' '}
            
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/1345/1345874.svg?token=exp=1613987381~hmac=da518cec92e38e07120355f9b622f49a"
              width='30'
              height='20'
              onClick={() => alert('this is delete for id ' + props.vid)}
            />
           
            
          </div>
  );
}

export default Tact;