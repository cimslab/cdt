import Image from 'next/image';

export default function Logo() {
    return (
        <div id="icdt-button" title="Imagine Canada's Digital Twin" className="icon">
            <Image
                priority
                src="/icdt-logo.png"
                height={40}
                width={40}
                alt=""
            />
        </div>
    );
};
