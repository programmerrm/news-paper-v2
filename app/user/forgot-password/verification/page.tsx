import { getFetchData } from "@/utils/getFetchData";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import ForgotPasswordOtpForm from "@/components/forms/forgotPasswordOtpForm";

export default async function Page() {

    const webinfo = await getFetchData('/webinfo');
    const logo = webinfo?.webInfo?.site_logo;
    const site_name = webinfo?.webinfo?.site_name;

    // cookie get
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("user");

    let email = "";

    if (userCookie) {
        const user = JSON.parse(userCookie.value);
        email = user?.email;
    }

    return (
        <section className="min-h-screen flex items-center justify-center font-english">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-4 md:gap-8 bg-[#E0EBF0] w-full max-w-156 mx-auto p-4 sm:p-6 lg:p-12">

                    {logo && (
                        <Link href="/" className="max-w-20 sm:max-w-25">
                            <Image
                                src={logo}
                                alt={site_name}
                                width={100}
                                height={64}
                            />
                        </Link>
                    )}

                    <div className="text-center">
                        <h3 className="text-xl sm:text-2xl lg:text-[26px] leading-6 lg:leading-7 text-title font-inter">
                            Enter verification code
                        </h3>

                        <p className="text-xs sm:text-[13px] leading-5.25 font-inter mt-2 text-[#525252] max-w-108 mx-auto">
                            The verification code has been sent to your email {email}
                        </p>
                    </div>
                    <ForgotPasswordOtpForm />
                </div>
            </div>
        </section>
    );
}
