import Link from "next/link";
import Button from "../button/Button";
import CommentInput from "../input/CommentInput";

export default function CommentBox () {
    return (
        <div className="bg-[#E0EBF0] p-4 sm:p-8">
            <div className="flex items-center justify-between gap-3">
                <h5>কমেন্ট করার জন্য লগইন করুন</h5>
                <Link href="/auth/login" className="text-red text-sm sm:text-base leading-6.5 underline">লগইন করুন</Link>
            </div>
            <form action="#" className="mt-2">
                <div>
                    <CommentInput
                        placeholder="কমেন্ট করুন"
                    />
                    
                </div>
                <div className="max-w-33.25 mt-4">
                    <Button
                        text="পোস্ট করুন"
                    />
                </div>
            </form>
            
        </div>
    )
}