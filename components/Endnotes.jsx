import { Container, Upper, Lower, ImageContainer } from "./Container";
import Image from "next/image";

const Endnotes = (props) => {
    return (
        <div className="w-full bg-white h-screen flex flex-col justify-center items-center">
            <Container>
                <Upper>
                    <div>
                        <h1 className="font-bold md:text-5xl text-3xl text-center mb-6">Endnotes</h1>
                        <p className="font-winnieyoe text-xl md:text-2xl text-center">
                            On April 11, 2022, the Department of Design and Construction started installing construction fencing in preparation for dismantling the Tombs.
                        </p>
                    </div>
                </Upper>
                <ImageContainer>
                    <Image
                        src="/Context7.png"
                        alt=""
                        layout="responsive"
                        width={2050}
                        height={500}
                        objectFit="cover"
                    />
                </ImageContainer>
                <Lower>
                    <div className="flex flex-col">
                        <p className="font-bold text-xl md:text-2xl mr-6 mb-2">Share your story</p>
                        <p className="font-winnieyoe text-lg md:text-xl text-center mb-8">
                            Want to share your thoughts about the jail plan in Chinatown? <a target="_blank" rel="noreferrer" className="underline decoration-dotted decoration-1" href="https://dufzo9ilgdz.typeform.com/to/g7eMpXeP?typeform-source=admin.typeform.com">Reach out here.</a>
                        </p>
                    </div>
                </Lower>
            </Container>
        </div>
    );
};

export { Endnotes };


