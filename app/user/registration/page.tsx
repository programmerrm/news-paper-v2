import Link from "next/link";
import Image from "next/image";
import { getFetchData } from "@/utils/getFetchData";
import RegistrationForm from "@/components/forms/registrationForm";

export default async function Page() {
    const webinfo = await getFetchData('/webinfo');
    const logo = webinfo?.webInfo?.site_logo;
    const site_name = webinfo?.webinfo?.site_name;
    return (
        <section className="min-h-screen flex items-center justify-center font-english">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-4 md:gap-8 bg-[#E0EBF0] w-full max-w-156 mx-auto p-4 sm:p-6 lg:p-12">
                    {logo && ((
                        <Link href="/" className="max-w-20 sm:max-w-25">
                            <Image
                                src={logo}
                                alt={site_name}
                                width={100}
                                height={64}
                            />
                        </Link>
                    ))}
                    <div className="text-center">
                        <h3 className="text-xl sm:text-2xl lg:text-[26px] leading-6 lg:leading-7 text-title font-inter">Create an account</h3>
                        <p className="text-xs sm:text-[13px] leading-5.25 font-inter mt-2 text-[#525252] max-w-108 mx-auto">Already have an account? <Link href="/user/login" className="text-red underline ml-1">Login to your account</Link></p>

                    </div>

                    <RegistrationForm />

                    <div>
                        <span className="text-center block py-3 sm:py-4 text-sm leading-6 font-medium text-black">or</span>

                        <div className="space-y-3">
                            <button className="bg-white text-title w-full flex items-center justify-center gap-2 p-2 sm:p-3 text-sm font-medium leading-6 transition-all border border-[#B6C3C8] cursor-pointer" type="button">
                                Facebook
                            </button>
                            <button className="bg-white text-title w-full flex items-center justify-center gap-2 p-2 sm:p-3 text-sm font-medium leading-6 transition-all border border-[#B6C3C8] cursor-pointer" type="button">
                                Google
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}