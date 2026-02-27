// src/topics/ioBasics/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
            font-size: 13px;
            line-height: 1.6;
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
                    var(--color-surface-2) 85%,
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

        .accLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .accIcon {
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

            svg {
                font-size: 17px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );
            }
        }

        .accTitle {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accRight {
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
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
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
            white-space: pre-line;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .col {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
        }

        .colTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            margin-bottom: 10px;
            letter-spacing: 0.2px;
        }

        .cards2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .cardTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .flow {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: 2px;
        }

        .step {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                var(--color-surface)
            );
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
        }

        .arrow {
            color: var(--color-text-muted);
            padding-left: 6px;
            display: inline-flex;
            align-items: center;

            svg {
                font-size: 16px;
            }
        }

        .visual {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-code-bg) 55%,
                var(--color-surface)
            );
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .track {
            display: flex;
            justify-content: space-between;
            color: var(--color-text-muted);
            font-size: 11px;

            .t {
                opacity: 0.85;
            }
        }

        .line {
            position: relative;
            height: 28px;
            border-radius: 999px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 0 10px;
            overflow: hidden;
        }

        .dash {
            height: 2px;
            flex: 1 1 auto;
            background: color-mix(
                in srgb,
                var(--color-primary) 30%,
                var(--color-border)
            );
            border-radius: 999px;
            opacity: 0.9;
        }

        .dash.jump {
            background: color-mix(
                in srgb,
                var(--color-accent) 28%,
                var(--color-border)
            );
            opacity: 0.85;
        }

        .dot {
            height: 14px;
            width: 14px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            flex: 0 0 auto;
        }

        .dot.req {
            background: color-mix(
                in srgb,
                var(--color-primary) 18%,
                var(--color-surface-2)
            );
        }

        .dot.head {
            height: 18px;
            width: 18px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: color-mix(
                in srgb,
                var(--color-accent) 18%,
                var(--color-surface-2)
            );

            svg {
                font-size: 12px;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 75%,
                    var(--color-text-primary)
                );
            }
        }

        .caption {
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.55;
        }
    `,
};
