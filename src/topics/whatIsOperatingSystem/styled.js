// src/components/whatIsOperatingSystem/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 18px 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .kicker {
            display: inline-flex;
            width: fit-content;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.6px;
            text-transform: uppercase;

            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            color: color-mix(
                in srgb,
                var(--color-primary) 78%,
                var(--color-text-primary)
            );
            box-shadow: 0 14px 32px var(--color-shadow);
        }

        .title {
            font-size: 22px;
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

        .item {
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

        .btn {
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

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .left {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .icon {
            height: 34px;
            width: 34px;
            border-radius: 12px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            flex: 0 0 auto;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );

            box-shadow: 0 14px 28px var(--color-shadow);

            svg {
                font-size: 16px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 75%,
                    var(--color-text-primary)
                );
            }
        }

        .text {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .body {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.65;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;

            color: var(--color-text-primary);
            font-weight: 900;

            padding: 1px 6px;
            border-radius: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-code-bg);
        }

        .monoBlock {
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
            word-break: break-word;
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .miniGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 760px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 10px;
        }

        .miniTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .callout {
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px 12px;

            svg {
                flex: 0 0 auto;
                margin-top: 2px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }

        .calloutText {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 0;
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
        }

        .calloutSub {
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.55;
            font-weight: 700;
        }

        .flow {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .step {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 10px 12px;
        }

        .stepTop {
            display: flex;
            align-items: center;
            gap: 8px;

            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }

        .stepSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.55;
            font-weight: 700;
        }

        .arrow {
            color: var(--color-text-muted);
            font-weight: 900;
            padding-left: 6px;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .col {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 10px;
        }

        .colTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }
    `,
};
