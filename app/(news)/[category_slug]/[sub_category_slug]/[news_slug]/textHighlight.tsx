import Description from "@/components/text-editor/description";

type TextHighlightProps = {
    text: string;
};

export default function TextHighlight({
    text,
}: TextHighlightProps) {
    return (
        <div className="px-4 sm:px-8 lg:px-16" >
            <p className="py-4 pl-6 border-l-4 border-red text-lg sm:text-xl text-title sm:leading-7 font-semibold">
                <Description description={text} />
            </p>
        </div>
    );
}