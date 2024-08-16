import { memo } from "react";

const ImagePreview = ({ imageData }) => (
  <div>
    <img src={imageData} alt="Drawing Preview" style={{ border: '1px solid black', width: '280px', height: '280px' ,backgroundColor:'black' }} />
  </div>
);

export default memo(ImagePreview);
