import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ZoomImage = ({ src, alt, className = '', wrapperClassName = '' }) => (
    <Zoom zoomMargin={40} wrapperProps={{ className: `block ${wrapperClassName}` }}>
        <img
            src={src}
            alt={alt}
            className={`cursor-zoom-in ${className}`}
        />
</Zoom>
)

export default ZoomImage;