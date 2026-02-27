import Image from "next/image"
import GoogleAdd from "../../assets/image/google-add.png"

export default function Add () {
    return (
        <section className="py-6 bg-[#FAFAFA]">
            <div className="container">
                <div className="w-full max-w-3xl mx-auto">
                    <Image
                        src={GoogleAdd} 
                        alt="GoogleAdd"
                    />
                </div>
            </div>
        </section>
    )
}