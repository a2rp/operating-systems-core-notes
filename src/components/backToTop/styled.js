import styled from "styled-components";

export const Styled = {
    Button: styled.button`
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 80;
        display: grid;
        width: 44px;
        height: 44px;
        place-items: center;
        color: var(--color-text-primary);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 50%;
        box-shadow: 0 12px 30px var(--color-shadow);
        cursor: pointer;
        opacity: ${(props) => (props.$show ? 1 : 0)};
        visibility: ${(props) => (props.$show ? "visible" : "hidden")};
        transition: opacity .18s ease, border-color .18s ease, box-shadow .18s ease;

        &:hover {
            border-color: var(--color-border-light);
            box-shadow: 0 0 18px var(--color-shadow);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }

        @media (max-width: 520px) {
            right: 14px;
            bottom: 14px;
        }
    `,
};