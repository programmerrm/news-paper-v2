import NotFoundPage from "@/app/error-page/Error";

export default function ErrorPage() {
    return (
        <>
            <section className="py-5 sm:py-10">
                <div className="container">
                    
                    <NotFoundPage />
                </div>
            </section>
        </>
    );
}