// useOwlCarousel.ts
import { useCallback, useEffect, useRef, useState } from "react";
import type { Resonators } from "@/features/CarouselV2/types/CharacterTypes";

export function useOwlCarousel(data?: Resonators[]) {
    const [active, setActive] = useState<number>(1);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const loadShow = useCallback(() => {
        const items = itemRefs.current;
        items.forEach((el, index) => {
        if (!el) return;
        if (index === active) {
            el.style.transform = "none";
            el.style.zIndex = "1";
            el.style.filter = "none";
            el.style.opacity = "1";
            el.style.overflow = "visible";
            el.classList.add(String(data?.[index]?.name));
        } else if (index > active) {
            el.style.transform = `translateX(${250 * (index - active)}px) scale(${1 - 0.2 * (index - active)}) perspective(16px) rotateY(-1deg)`;
            el.style.zIndex = `${-index + active}`;
            el.style.filter = "brightness(0.5)";
            el.style.opacity = index - active > 2 ? "0" : "1";
            el.style.overflow = "hidden";
            el.classList.remove(String(data?.[index]?.name));
        } else {
            el.style.transform = `translateX(${-250 * (active - index)}px) scale(${1 - 0.2 * (active - index)}) perspective(16px) rotateY(1deg)`;
            el.style.zIndex = `${-index + active}`;
            el.style.filter = "brightness(0.5)";
            el.style.opacity = active - index > 2 ? "0" : "1";
            el.style.overflow = "hidden";
            el.classList.remove(String(data?.[index]?.name));
        }
        });
    }, [active, data]);

    useEffect(() => {
        if (!data || data.length === 0) return;
        loadShow();
    }, [data, loadShow]);

    const handleNext = () =>
        setActive((prev) => (prev + 1 < (data?.length || 0) ? prev + 1 : prev));
    const handlePrev = () =>
        setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));

    return { active, handleNext, handlePrev, itemRefs };
}