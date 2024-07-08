import React from 'react';
import { Card } from './Card';
import { Register } from './Register';

const StickyBackgroundSection = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 h-[200%] bg-cover" style={{ backgroundImage: 'url(https://passive.empify.com/hosted/images/54/244c8e331940ed8382b88e0c6ab77c/Graphucs-04.png)',backgroundColor:'#EFF3FB',backgroundAttachment:'fixed' ,backgroundRepeat:'repeat',backgroundPosition:'center' }}>
        <div className='relative z-10 inset-0 md:mt-[768] '>
            <Register/>
            <Card/>
        </div>
      </div>
    </div>
  );
};

export default StickyBackgroundSection;
