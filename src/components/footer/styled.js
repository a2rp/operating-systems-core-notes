import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: grid;
        gap: 16px;
        padding: 24px;
        color: var(--color-text-muted);
        border-top: 1px solid var(--color-border);
        font-size: 12px;

        .footerIntro,
        .footerGroups,
        .footerBottom {
            display: flex;
            align-items: center;
        }

        .footerIntro {
            gap: 10px;

            img {
                width: 34px;
                height: 34px;
                object-fit: contain;
                border-radius: 8px;
            }

            div {
                display: grid;
                gap: 2px;
            }

            strong {
                color: var(--color-text-primary);
            }
        }

        .footerText {
            max-width: 680px;
            line-height: 1.6;
        }

        .footerGroups {
            flex-wrap: wrap;
            gap: 28px;
        }

        .footerGroups > div {
            display: grid;
            gap: 8px;
        }

        .footerGroups > div > span {
            color: var(--color-text-primary);
            font-weight: 700;
            letter-spacing: .08em;
            text-transform: uppercase;
        }

        .iconLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .iconLinks a {
            display: grid;
            width: 34px;
            height: 34px;
            place-items: center;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            border-radius: 8px;
            transition: color .18s ease, border-color .18s ease, text-shadow .18s ease, box-shadow .18s ease;
        }

        .iconLinks a:hover {
            color: var(--color-text-primary);
            border-color: var(--color-border-light);
            text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 60%, transparent);
            box-shadow: 0 0 14px var(--color-shadow);
        }

        .footerBottom {
            flex-wrap: wrap;
            gap: 8px;
            padding-top: 14px;
            border-top: 1px solid var(--color-border);
        }

        .footerBottom a {
            color: var(--color-text-secondary);
            font-weight: 600;
            transition: color .18s ease, text-shadow .18s ease;
        }

        .footerBottom a:hover {
            color: var(--color-text-primary);
            text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 60%, transparent);
        }

        @media (max-width: 600px) {
            padding: 20px 16px;
        }
    `,
};