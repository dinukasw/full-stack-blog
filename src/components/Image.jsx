import { Image, ImageKitProvider } from '@imagekit/react';

const ImageComponent = ({ src, className, alt , w, h}) => {
    return (
        <ImageKitProvider urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}>
            <Image
                src={src}
                className={className}
                alt={alt}
                loading="lazy"
                lqip={{
                    active: true,
                    quality: 20,
                }}
                width={w}
                height={h}
            />
        </ImageKitProvider>
    )
}

export default ImageComponent;