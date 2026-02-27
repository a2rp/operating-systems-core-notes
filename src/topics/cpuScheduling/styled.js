// src/topics/cpuScheduling/styled.js
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

        .monoLine {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            color: var(--color-text-secondary);
            border-radius: 999px;
            padding: 7px 10px;
            font-size: 12px;
            line-height: 1.5;
            width: fit-content;
        }

        .metricsGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 760px) {
                grid-template-columns: 1fr;
            }
        }

        .metricCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .metricHead {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 75%,
                    var(--color-text-primary)
                );
                font-size: 16px;
            }
        }

        .algoStack {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .algoCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .algoTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            letter-spacing: 0.2px;
        }

        .tableBlock {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .tableTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            letter-spacing: 0.2px;
            font-size: 12px;
        }

        .twoTables {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            overflow: hidden;
            border-radius: 12px;
        }

        .table thead th {
            text-align: left;
            font-size: 12px;
            color: var(--color-text-primary);
            padding: 10px 10px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-surface)
            );
        }

        .table tbody td {
            font-size: 13px;
            color: var(--color-text-secondary);
            padding: 10px 10px;
            border-bottom: 1px solid var(--color-border);
        }

        .table tbody tr:last-child td {
            border-bottom: 0;
        }

        .monoTd {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary) !important;
            font-weight: 900;
        }

        .avgRow td {
            font-weight: 900;
            color: var(--color-text-primary);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
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

            span {
                color: var(--color-text-secondary);
                font-size: 12px;
                line-height: 1.55;
                font-weight: 800;
            }
        }
    `,
};
