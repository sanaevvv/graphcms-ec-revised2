import React, { FC } from 'react'

type Props = {
  title: string
}

const TopBar:FC<Props>= ({title}) => {
  return (
    <div>
      <div className="section-title">
        <div className="menutitle">
          <h3 className="title"> {title} </h3>
        </div>
      </div>
    </div>
  );
}

export default TopBar
