import UserProfile from "@/components/user-profile/userProfile";

export default function Page() {
    return (
        <section>
            <div className="container">
                <div className=" bg-white flex justify-center items-start py-10">
                    <UserProfile />
                </div>
            </div>
        </section>
    );
}
