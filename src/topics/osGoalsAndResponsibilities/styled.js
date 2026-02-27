// src/components/osGoalsAndResponsibilities/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto 10px;
        padding: 16px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 12px;
        }

        .kicker {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-weight: 800;
            letter-spacing: 0.3px;
            font-size: 12px;
            text-transform: uppercase;

            .dot {
                height: 8px;
                width: 8px;
                border-radius: 999px;
                background: var(--color-primary);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent);
            }
        }

        .title {
            font-size: 20px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 920px;
        }

        .accordion {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .accItem {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;
            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 80%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .left {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            font-size: 13px;

            svg {
                font-size: 16px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                flex: 0 0 auto;
            }
        }

        .right {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .accBody {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
        }

        .pillRow {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 12px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 75%,
                    var(--color-text-primary)
                );
                font-size: 14px;
            }
        }

        .note {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 60%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;
            margin-bottom: 12px;

            .noteTitle {
                color: var(--color-text-primary);
                font-weight: 900;
                font-size: 12px;
                letter-spacing: 0.2px;
                margin-bottom: 6px;
            }
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.65;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            margin-bottom: 8px;
            word-break: break-word;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .goalCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 0;
        }

        .goalHead {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            min-width: 0;
        }

        .icon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            box-shadow: 0 14px 28px var(--color-shadow);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 75%,
                    var(--color-text-primary)
                );
            }
        }

        .headText {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 0;
        }

        .goalTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .goalOneLine {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.55;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-left: 14px;

            li {
                list-style: disc;
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.6;
            }
        }

        .example {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 75%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .exampleTitle {
                color: var(--color-text-primary);
                font-weight: 900;
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .exampleGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .exCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 0;
        }

        .exHead {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .exIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-accent) 75%,
                    var(--color-text-primary)
                );
                font-size: 17px;
            }
        }

        .exTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 14px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 55%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                color: var(--color-text-primary);
                font-weight: 900;
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .respGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 12px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .respCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .respHead {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-primary);
            font-weight: 900;

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 75%,
                    var(--color-text-primary)
                );
                font-size: 16px;
            }
        }
    `,
};
