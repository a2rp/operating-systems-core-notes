import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "./styled";

export default function BackToTop({ targetRef, threshold = 240 }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const node = targetRef?.current;
        if (!node) return undefined;
        const onScroll = () => setShow(node.scrollTop > threshold);
        onScroll();
        node.addEventListener("scroll", onScroll, { passive: true });
        return () => node.removeEventListener("scroll", onScroll);
    }, [targetRef, threshold]);

    const handleClick = () => targetRef?.current?.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <Styled.Button type="button" $show={show} onClick={handleClick} aria-label="Go to top" title="Go to top">
            <FiArrowUp />
        </Styled.Button>
    );
}